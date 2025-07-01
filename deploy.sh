#!/usr/bin/env bash
# Deploy current main/master branch to gh-pages for GitHub Pages hosting
set -e

GREEN=$(tput setaf 2)
RED=$(tput setaf 1)
RESET=$(tput sgr0)

BRANCH="gh-pages"

printf "${GREEN}Building static site ...${RESET}\n"
# Nothing to build, but you might run minifiers here

printf "${GREEN}Pushing to %s branch ...${RESET}\n" "$BRANCH"

# Save current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Delete old gh-pages (locally) if it exists
if git show-ref --verify --quiet refs/heads/$BRANCH; then
  git branch -D $BRANCH
fi

# Create orphan gh-pages, copy tracked files, push
git checkout --orphan $BRANCH
git add -A
git commit -m "Deploy to $BRANCH `date +%Y-%m-%d`"
git push -f origin $BRANCH

printf "${GREEN}✔ Deployment complete!${RESET}\n"
printf "${GREEN}Your site should soon be live at: https://$(git config --get remote.origin.url | sed -E 's/.*github.com[:/](.*)\.git/\1/')/ ${RESET}\n"

# Return to original branch
git checkout "$CURRENT_BRANCH"