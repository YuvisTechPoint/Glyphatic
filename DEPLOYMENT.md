# Deployment Guide — Glyphatic.com on Hostinger VPS

## Architecture

```
GitHub ──push──▶ GitHub Actions ──build──▶ GHCR (Docker image)
                                              │
                                              ▼
Hostinger VPS (glyphatic.com) ◀──SSH deploy──┘
  ├── Docker: Next.js app (port 3000)
  ├── Docker: Nginx reverse proxy (ports 8080→80, 8443→443)
  ├── Docker: Certbot (auto-renew SSL)
  └── Supabase (remote PostgreSQL)
```

> **Port mapping:** Nginx listens on 8080 (HTTP) and 8443 (HTTPS) on the host to
> avoid clashing with existing services on 80/443. A host-level Nginx or Cloudflare
> tunnel can forward traffic if needed.

---

## 1. DNS Setup (Hostinger)

In your Hostinger hPanel → Domains → glyphatic.com → DNS/Nameservers:

| Type  | Name | Value              | TTL  |
|-------|------|--------------------|------|
| A     | @    | YOUR_VPS_IP        | 3600 |
| A     | www  | YOUR_VPS_IP        | 3600 |

> **Note:** Since the app runs on ports 8080/8443, you'll need either:
> - A reverse proxy (like the host's existing Nginx on 80/443) forwarding to 8080/8443
> - Or Cloudflare Tunnel (you already have `cloudflared` running) to route traffic

Wait 5-30 minutes for DNS propagation. Verify with:

```bash
dig glyphatic.com +short
dig www.glyphatic.com +short
```

---

## 2. SSH Key Setup (for GitHub Actions)

### 2.1 Generate SSH key (on your local machine)

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/gh_deploy_glyphatic
```

Press Enter for no passphrase (CI/CD needs unattended access).

### 2.2 Add public key to VPS

```bash
# Copy the public key content
cat ~/.ssh/gh_deploy_glyphatic.pub

# SSH into VPS and add it
ssh saurav@srv1839154.hstgr.cloud
mkdir -p ~/.ssh
echo "PASTE_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### 2.3 Test SSH connection

```bash
ssh -i ~/.ssh/gh_deploy_glyphatic saurav@srv1839154.hstgr.cloud
```

### 2.4 Add private key to GitHub Secrets

```bash
# Copy the private key (entire content including BEGIN/END lines)
cat ~/.ssh/gh_deploy_glyphatic
```

Go to GitHub repo → Settings → Secrets and variables → Actions → New repository secret:

| Secret         | Value                                        |
|----------------|----------------------------------------------|
| `VPS_HOST`     | `srv1839154.hstgr.cloud` (or VPS IP)        |
| `VPS_USER`     | `saurav`                                     |
| `VPS_SSH_KEY`  | Entire contents of `~/.ssh/gh_deploy_glyphatic` |
| `VPS_PORT`     | `22`                                         |

---

## 3. VPS Initial Setup

SSH into your Hostinger VPS:

```bash
ssh saurav@srv1839154.hstgr.cloud
```

### 3.1 Install Docker & dependencies (if not already installed)

```bash
curl -fsSL https://get.docker.com | sh
systemctl enable docker && systemctl start docker
```

### 3.2 Create app directory

```bash
mkdir -p ~/glyphatic
```

---

## 4. GitHub Secrets

Already configured in Step 2.4. Verify these exist in GitHub repo → Settings → Secrets:

| Secret         | Value                                        |
|----------------|----------------------------------------------|
| `VPS_HOST`     | `srv1839154.hstgr.cloud` (or VPS IP)        |
| `VPS_USER`     | `saurav`                                     |
| `VPS_SSH_KEY`  | Private SSH key content                      |
| `VPS_PORT`     | `22`                                         |

---

## 5. First Deployment

### 5.1 Copy project files to VPS

```bash
rsync -avz --exclude=node_modules --exclude=.next --exclude=.git \
  ./ saurav@srv1839154.hstgr.cloud:~/glyphatic/
```

### 5.2 Create .env on VPS

```bash
ssh saurav@srv1839154.hstgr.cloud
cd ~/glyphatic
cp .env.example .env
nano .env   # Fill in all production values
```

### 5.3 Initialize SSL certificate

```bash
cd ~/glyphatic

# Use HTTP-only nginx config first
cp nginx/conf.d/glyphatic.com.conf.initial nginx/conf.d/glyphatic.com.conf

# Start nginx for ACME challenge
docker compose up -d nginx

# Obtain SSL cert
docker compose run --rm certbot certbot certonly \
    --webroot -w /var/www/certbot \
    -d glyphatic.com -d www.glyphatic.com \
    --email YOUR_EMAIL@glyphatic.com \
    --agree-tos --no-eff-email

# Restore full SSL config (already in place)
docker compose restart nginx
```

### 5.4 Deploy the app

```bash
cd ~/glyphatic
docker compose up -d
```

---

## 6. Ongoing Deployments

After initial setup, deployments are automatic:

```bash
git push origin main
```

GitHub Actions will:
1. Build Docker image
2. Push to GitHub Container Registry
3. SSH into VPS
4. Pull new image and restart

### Manual deploy (if needed):

```bash
ssh saurav@srv1839154.hstgr.cloud
cd ~/glyphatic
docker compose pull app
docker compose up -d --remove-orphans
docker image prune -f
```

---

## 7. Useful Commands

```bash
# View logs
docker compose logs -f app
docker compose logs -f nginx

# Restart services
docker compose restart app
docker compose restart nginx

# Check status
docker compose ps
docker compose top

# Rebuild after code changes
docker compose up -d --build app

# Access app shell
docker compose exec app sh

# Renew SSL manually
docker compose run --rm certbot certbot renew
```

---

## 8. Environment Variables on VPS

The `.env` file on the VPS must contain all production values. Key ones:

```bash
NEXT_PUBLIC_SITE_URL=https://glyphatic.com
NEXTAUTH_URL=https://glyphatic.com
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
DATABASE_URL=<from Supabase: Settings → Database → Connection string>
DIRECT_URL=<from Supabase: Settings → Database → Connection string (direct)>
```

---

## 9. Troubleshooting

| Issue | Fix |
|-------|-----|
| 502 Bad Gateway | App not running: `docker compose logs app` |
| SSL errors | Cert expired: `docker compose run --rm certbot certbot renew` |
| Build fails | Check Dockerfile: `docker compose build app` |
| DNS not resolving | Wait for propagation, check `dig glyphatic.com` |
| SSH deploy fails | Verify SSH key in GitHub Secrets matches VPS authorized_keys |
| Port conflict | Check `ss -lntup` for 8080/8443, change ports in docker-compose.yml |
