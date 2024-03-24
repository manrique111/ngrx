#!/bin/bash

BUILD=${1:-false}
CLEAN_MODULE=${2:-false}

IMAGE_NAME=datta
IMAGE_TAG=v1
CONTAINER_NAME=front
PUERTO_CONTAINER=80
red_docker="mandarina"

# si es build crea la imagen del container
if [[ "$BUILD" == "build" ]]
then
    echo "Compilando la imagen"
    docker build -t "$IMAGE_NAME":"$IMAGE_TAG" .
fi

if [[ "$CLEAN_MODULE" == "clean" ]]
then
  rm -r app/node_modules
  rm -r app/.angular
  yarn cache clean
fi

# Verificar si el contenedor existe
if docker ps -a --format '{{.Names}}' | grep -q "^$CONTAINER_NAME$"; then
  # Si existe, eliminalo
  docker rm $CONTAINER_NAME
  echo "Contenedor $CONTAINER_NAME eliminado."
fi

# Verificar si el puerto está ocupado y preguntar para destruir el proceso
if lsof -Pi :"$PUERTO_CONTAINER" -sTCP:LISTEN -t >/dev/null; then
  echo "El puerto está ocupado por otro proceso. ¿Desea detenerlo? [s/n]"
  read respuesta
  if [ "$respuesta" = "s" ]; then
    # Obtener el ID del proceso que está utilizando el puerto
    PID=$(lsof -t -i :"$PUERTO_CONTAINER")

    # Detener el proceso
    kill $PID
  fi
fi

docker network create "${red_docker}"

echo "Deploying container"
docker run -d --name "$CONTAINER_NAME" -p "$PUERTO_CONTAINER":"$PUERTO_CONTAINER" -v "${PWD}/app:/app" --network "${red_docker}" "$IMAGE_NAME":"$IMAGE_TAG"

#echo "Running app"
#docker exec -it "$CONTAINER_NAME" ng serve -o --host 0.0.0.0 --port 80