FROM jackzampolin/three-hearts-farm

CMD cd three-hearts-farm

CMD git pull origin master

CMD npm install gulp-cli gulp-webdriver

CMD npm install

EXPOSE 8000
CMD gulp