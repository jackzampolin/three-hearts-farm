// Contains various static assets used in the program.
// ThemeManager stored here to facilitate custom themes.

// Node Modules
var React = require('react')
var mui = require('material-ui');

// Components of utl
var themeManager = new mui.Styles.ThemeManager();
var styles = require('./styles/styles')
var leftMenuItems = require('./staticAssets/leftMenuItems')
var staticPages = require('./staticAssets/staticPages')
var errorMessages = require('./staticAssets/errorMessages')
var imagePath = require('./staticAssets/imagePath')
var email = 'threeheartsfarmmt@gmail.com';
var phone = '406-600-8874'
var firebaseUrl = 'https://brewdoctor-react.firebaseio.com/'
var teamBios = require('./staticAssets/teamBios')
var farmName = require('./staticAssets/farmName')
var splashLogo = imagePath + 'thfheader.png';
var mi = 'material-icons'
var foodIssues = require('./staticAssets/foodIssues')

var utl = { themeManager, styles, leftMenuItems, staticPages, errorMessages, imagePath, email, phone, firebaseUrl, teamBios, farmName, splashLogo, mi, foodIssues };

module.exports = utl;