# Bash

# Git pull
git pull

# Build docker image force with tag "ecoommerce-backend"
docker build -t ecoommerce-backend . # --no-cache

# Run the docker container but remove the previous container
docker rm -f "ecoommercebackend"
docker run -d --name countryjson -p 5051:5051 ecoommerce-backend