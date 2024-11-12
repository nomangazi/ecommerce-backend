# Bash

# Git pull
git pull

# Build docker image force with tag "coutnry-json"
docker build -t country-info-json . # --no-cache

# Run the docker container but remove the previous container
docker rm -f countryjson
docker run -d --name countryjson -p 5050:5050 country-info-json