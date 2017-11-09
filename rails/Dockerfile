FROM ruby:2.4.2

ENV APP_ROOT /app
ENV BUNDLE_PATH /bundle

RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

RUN mkdir -p $APP_ROOT/tmp/cache \
  && mkdir -p $APP_ROOT/tmp/pids \
  && mkdir -p $APP_ROOT/tmp/sockets

RUN apt-get update \
  && apt-get install --yes --no-install-recommends nodejs mysql-client imagemagick libmagickwand-dev \
  && rm -rf /var/lib/apt/lists/*

COPY Gemfile $APP_ROOT
COPY Gemfile.lock $APP_ROOT

RUN echo 'gem: --no-document' >> ~/.gemrc && \
    cp ~/.gemrc /etc/gemrc && \
    chmod uog+r /etc/gemrc && \
    bundle config --global build.nokogiri --use-system-libraries && \
    bundle config --global jobs 4 && \
    bundle install && \
    rm -rf ~/.gem

EXPOSE 3000
#COPY start.sh /$APP_ROOT/start.sh

#COPY . /$APP_ROOT
#ENTRYPOINT start.sh
CMD /$APP_ROOT/start.sh

