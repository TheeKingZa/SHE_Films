#!/bin/bash

# Stop on error
set -e

# Get current date for commit message
NOW=$(date +"%Y-%m-%d %H:%M:%S")

# Set repo info
REPO="TheeKingZa/SHE_Films"
BRANCH="gh-pages"
BUILD_DIR="."
TEMP_DIR=$(mktemp -d)

echo "📦 Building static site..."

# Copy everything to temp folder (excluding .git folder)
rsync -av --exclude='.git' "$BUILD_DIR/" "$TEMP_DIR"

# Switch to temp folder
cd "$TEMP_DIR"

# Add .nojekyll so GitHub Pages doesn’t ignore folders starting with _
touch .nojekyll

# Initialize new git repo in temp
git init
git checkout -b $BRANCH

# Set Git author name only
git config user.name "Pule Mathikha"
# Email line is removed as requested

# Add remote and commit
git remote add origin https://github.com/$REPO.git
git add .
git commit -m "Deploy to $BRANCH at $NOW"

# Push forcefully to gh-pages
git push --force origin $BRANCH

echo "✅ Deployment complete!"
echo "🌍 Site should be live at: https://theekingza.github.io/SHE_Films/"
