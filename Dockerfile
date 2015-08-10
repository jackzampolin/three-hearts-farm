FROM node:0.10-onbuild

MAINTAINER Jack Zampolin <jack.zampolin@gmail.com>

# Expose default port for application
EXPOSE 8000

CMD npm run production
