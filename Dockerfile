FROM node:19.9.0-bullseye-slim

ENV TZ=America/Mexico_City
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update && apt -y upgrade \
    && npm install -g npm@latest && npm install -g @angular/cli@latest \
     && apt install -y python3-pip \
     && apt install -y build-essential libssl-dev libffi-dev python3-dev gettext \
     && apt install -y vim && apt list --upgradable

RUN ln -s /usr/bin/python3 /usr/bin/python

RUN mkdir /app

RUN mkdir /opt/config

COPY /app /app
COPY config /opt/config

WORKDIR /app

ENTRYPOINT /opt/config/entrypoint.sh

