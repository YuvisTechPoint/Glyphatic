#!/bin/bash
set -euo pipefail

APP_DIR="/home/${VPS_USER:-root}/glyphatic"
REPO="ghcr.io/${GITHUB_REPOSITORY}"

echo "=== Glyphatic VPS Initial Setup ==="

if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    systemctl enable docker
    systemctl start docker
    echo "Docker installed."
else
    echo "Docker already installed: $(docker --version)"
fi

if ! docker compose version &> /dev/null; then
    echo "Installing Docker Compose plugin..."
    apt-get update && apt-get install -y docker-compose-plugin
else
    echo "Docker Compose already installed."
fi

mkdir -p "$APP_DIR"
echo "App directory: $APP_DIR"

echo ""
echo "=== Next Steps ==="
echo "1. Copy project files to $APP_DIR"
echo "2. Create $APP_DIR/.env with production values"
echo "3. Run initial SSL setup:"
echo ""
echo "   cd $APP_DIR"
echo "   cp nginx/conf.d/glyphatic.com.conf.initial nginx/conf.d/glyphatic.com.conf"
echo "   docker compose up -d nginx"
echo "   docker compose run certbot certbot certonly --webroot -w /var/www/certbot -d glyphatic.com -d www.glyphatic.com --email YOUR_EMAIL --agree-tos --no-eff-email"
echo "   cp nginx/conf.d/glyphatic.com.conf nginx/conf.d/glyphatic.com.conf"
echo "   docker compose restart nginx"
echo ""
echo "4. After SSL is set up, deploy the app:"
echo "   docker compose up -d"
echo ""
