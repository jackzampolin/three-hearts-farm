// Contains various static assets used in the program.
// ThemeManager stored here to facilitate custom themes.

// Node Modules
var React = require('react')
var mui = require('material-ui');
// Local Files
var ENV = require('../../config/config');
var farmInfo = require('./staticAssets/farmInfo')

var utl = {
  themeManager: new mui.Styles.ThemeManager(),
  styles: require('./styles/styles'),
  leftMenuItems: require('./staticAssets/leftMenuItems'),
  staticPages: require('./staticAssets/staticPages'),
  errorMessages: require('./staticAssets/errorMessages'),
  imagePath: ENV.imagePath,
  email: farmInfo.email,
  phone: farmInfo.phone,
  firebaseUrl: ENV.firebaseUrl,
  teamBios: require('./staticAssets/teamBios'),
  farmName: farmInfo.name,
  splashLogo: ENV.imagePath + 'thfheader.png',
  foodIssues: require('./staticAssets/foodIssues'),
  validator: require('./staticAssets/validator'),
  seedItems: require('./staticAssets/seedItems')
};

module.exports = utl;
