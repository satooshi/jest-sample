FROM node:8.9.0

ENV APP_ROOT /app
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

COPY . /$APP_ROOT

