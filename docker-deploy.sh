#!/usr/bin/env bash

TARGET='main'

cd ~/app || exit

ACTION='\033[1;90m'
NOCOLOR='\033[0m'

# Checking if we are on the main branch

echo -e ${ACTION}Checking Git repo
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != ${TARGET} ]
then
	  exit 0
fi

# Checking if the repository is up to date.

git fetch
HEADHASH=$(git rev-parse HEAD)
UPSTREAMHASH=$(git rev-parse ${TARGET}@{upstream})

if [ "$HEADHASH" == "$UPSTREAMHASH" ]
then
	  echo -e "${FINISHED}"Current branch is up to date with origin/${TARGET}."${NOCOLOR}"
	    exit 0
fi

# If that's not the case, we pull the latest changes and we build a new image

git pull origin main;

# Docker

docker compose up -d --build

exit 0;