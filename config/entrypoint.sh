#!/bin/bash

# echo "Actualizando Variables de Entorno ..."

# envsubst < /app/src/assets/js/env.tmpl.js > /app/src/assets/js/env.js "$(printf '${%s} ' $(env | cut -d'=' -f1))"

echo "instalar"
#yarn install


 while true
    do
      sleep 20
    done


if [[ "$WAIT_DOCKER" == "True" ]]; then
    while true
    do
      sleep 20
    done
else
  echo "Iniciando angular"
  #ng serve -o --host 0.0.0.0 --port 80
fi

