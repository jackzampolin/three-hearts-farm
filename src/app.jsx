// This file renders all the other components
var React = require('react');
var Routes = require('./routes');
var farmName = require('./utils/staticAssets/farmInfo').name

document.getElementsByTagName('title')[0].text = farmName

React.render(Routes, document.querySelector('#app'));
