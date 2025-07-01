#!/bin/bash

# Colored output
GREEN="\033[0;32m"
RED="\033[0;31m"
YELLOW="\033[1;33m"
NC="\033[0m" # No color

echo -e "${YELLOW}📦 Staging all changes...${NC}"
git add .

# Prompt for commit message
read -p "📝 Enter commit message: " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
  echo -e "${RED}❌ Commit message is required. Aborting.${NC}"
  exit 1
fi

# Commit
echo -e "${YELLOW}📸 Committing changes...${NC}"
git commit -m "$COMMIT_MSG" || {
  echo -e "${RED}❌ Commit failed. Aborting.${NC}"
  exit 1
}

# Push to master
echo -e "${YELLOW}🚀 Pushing to master...${NC}"
git push origin master || {
  echo -e "${RED}❌ Push to master failed. Aborting.${NC}"
  exit 1
}

# Switch to gh-pages
echo -e "${YELLOW}🔀 Switching to gh-pages...${NC}"
git checkout gh-pages || {
  echo -e "${RED}❌ Could not switch to gh-pages. Aborting.${NC}"
  exit 1
}

# Sync with master
echo -e "${YELLOW}🔁 Syncing gh-pages with master...${NC}"
git merge master --allow-unrelated-histories -m "Sync from master" || {
  echo -e "${RED}❌ Merge failed. Resolve conflicts and try again.${NC}"
  exit 1
}

# Push to gh-pages
echo -e "${YELLOW}🚀 Deploying to GitHub Pages...${NC}"
git push origin gh-pages || {
  echo -e "${RED}❌ Push to gh-pages failed. Aborting.${NC}"
  exit 1
}

# Switch back to master
echo -e "${YELLOW}🔙 Switching back to master...${NC}"
git checkout master || {
  echo -e "${RED}❌ Could not switch back to master. Please check manually.${NC}"
  exit 1
}

echo -e "${GREEN}✅ Deployment complete!"
echo -e "${GREEN}🌍 Visit your site at: https://theekingza.github.io/SHE_Films/${NC}"
