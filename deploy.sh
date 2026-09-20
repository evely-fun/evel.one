#!/usr/bin/env sh
# Deploys the built site to Cloudflare Pages.
# Needs CLOUDFLARE_API_TOKEN (scope: Account > Cloudflare Pages > Edit)
# and CLOUDFLARE_ACCOUNT_ID in the environment.
set -e

npm ci
npm run build
npx wrangler pages deploy dist \
  --project-name evel-one \
  --branch main \
  --commit-dirty=true
