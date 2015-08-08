FROM phusion/baseimage

RUN apt-get update && apt-get install -y \
    nodejs \
    nodejs-legacy \
    npm \
    git \
    && \
    git clone https://github.com/jackzampolin/three-hearts-farm && \
    cd three-hearts-farm && \
    npm install -g gulp-cli && \
    npm install && \
    gulp production \

EXPOSE 8000
