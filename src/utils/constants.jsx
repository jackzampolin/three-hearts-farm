// Contains various constants used in the program
// ThemeManager stored here to facilitate custom
// themes.
var React = require('react')
var mui = require('material-ui');
var themeManager = new mui.Styles.ThemeManager();

var styles = require('./styles/styles')
var leftMenuItems = require('./staticAssets/leftMenuItems')
var staticPages = require('./staticAssets/staticPages')
var errorMessages = require('./staticAssets/errorMessages')
var imagePath = require('./staticAssets/imagePath')
var email = 'threeheartsfarmmt@gmail.com';
var phone = '406-600-8874'
var firebaseUrl = 'https://brewdoctor-react.firebaseio.com/'

var Constants = { styles, email, phone, errorMessages, firebaseUrl, themeManager, staticPages, imagePath, leftMenuItems };
module.exports = Constants;