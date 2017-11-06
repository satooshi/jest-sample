FROM node:8.9.0

ENV APP_ROOT /app

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

EXPOSE 8080

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install

COPY . $APP_ROOT

CMD yarn dev
