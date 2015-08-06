// This file renders all the other components
var React = require('react');
var Routes = require('./routes');
var farmName = require('./utils/staticAssets/farmInfo').name

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

document.getElementsByTagName('title')[0].text = farmName

React.render(Routes, document.querySelector('#app'));
