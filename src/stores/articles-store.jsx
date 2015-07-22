// Node Modules
var Reflux = require('reflux');
var Firebase = require('firebase');
var _ = require('lodash');

// Local Files
var utl = require('../utils/utl');
var Actions = require('../actions');

// Firebase Auth data
// https://www.firebase.com/docs/web/guide/login/google.html

module.exports = Reflux.createStore({

  listenables: [Actions],

  _articlesRef: new Firebase(utl.firebaseUrl + 'articles/'),

  getArticles () {
    this._articlesRef.on('value', function(articles){
      var payload = this._crunchArticles(articles.val())
      this._setArticles(payload);
    }.bind(this));
  },
  _setArticles (articles) {
    this.Articles = articles;
    this.trigger('change',this.Articles);
  },
  _crunchArticles (articles) {
    return _.map(articles, function (articleObject, key) {
      return {
        title: articleObject.title,
        articleContent: articleObject.articleContent.split(/\n/),
        articlePicture: articleObject.articlePicture,
        author: articleObject.author,
        id: key,
      }
    })
  },
});