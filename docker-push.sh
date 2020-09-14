#!/bin/bash

docker build . -t blog
docker tag blog docker.knif.dev/blog
docker push docker.knif.dev/blog