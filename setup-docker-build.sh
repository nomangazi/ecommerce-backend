# Bash

# Git pull
git pull

# Build docker image force with tag "coutnry-json"
docker build -t ecoommerce-backend . # --no-cache

# Run the docker container but remove the previous container
docker rm -f countryjson
docker run -d --name countryjson -p 5010:5010 ecoommerce-backend