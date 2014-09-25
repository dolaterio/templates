FROM ubuntu:14.04

RUN locale-gen en_US.UTF-8 && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends software-properties-common && \
    apt-add-repository ppa:brightbox/ruby-ng && \
    apt-get update && \
    apt-get install -y --no-install-recommends ruby2.1 ruby2.1.dev zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt1-dev libcurl4-openssl-dev && \
    gem install bundler --no-ri --no-rdoc

WORKDIR /opt/

ADD worker.rb /opt/worker.rb
ADD Gemfile /opt/Gemfile

RUN bundle install --without development test

ENTRYPOINT ["ruby", "worker.rb"]
