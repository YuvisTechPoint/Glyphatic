#!/bin/bash
set -euo pipefail

DOMAIN="glyphatic.com"
EMAIL="${1:-}"

if [ -z "$EMAIL" ]; then
    echo "Usage: ./scripts/init-ssl.sh your@email.com"
    exit 1
fi

APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "=== Initializing SSL for $DOMAIN ==="

cd "$APP_DIR"

cp nginx/conf.d/glyphatic.com.conf.initial nginx/conf.d/glyphatic.com.conf

docker compose up -d nginx

echo "Waiting for nginx to start..."
sleep 5

docker compose run --rm certbot certbot certonly \
    --webroot \
    -w /var/www/certbot \
    -d "$DOMAIN" \
    -d "www.$DOMAIN" \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email

cp nginx/conf.d/glyphatic.com.conf.ssl nginx/conf.d/glyphatic.com.conf 2>/dev/null || true

docker compose restart nginx

echo ""
echo "SSL certificate obtained for $DOMAIN"
echo "Restore the full SSL nginx config and restart:"
echo "  docker compose restart nginx"
