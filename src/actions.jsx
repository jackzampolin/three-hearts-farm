// The Actions File

var Reflux = require('reflux')

module.exports = Reflux.createActions([
  'login',
  'logout',
  'getCurrentUser',
  'getArticles',
  'getItems',
]);
