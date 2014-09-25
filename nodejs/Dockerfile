FROM ubuntu:14.04

RUN locale-gen en_US.UTF-8 && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends nodejs npm nodejs-legacy

ENV PATH node_modules/.bin:$PATH
WORKDIR /opt/

ADD worker.js /opt/worker.js
ADD package.json /opt/package.json

RUN npm install

ENTRYPOINT ["node", "worker.js"]
