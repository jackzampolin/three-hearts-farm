var Partners = require('./partners')
var mui = require('material-ui');
var MenuItem = mui.MenuItem;

var basic = [
  { route: '/', text: 'Home', iconClassName: 'material-icons' },
  { route: 'blog', text: 'Blog' },
  { route: 'about', text: 'About' },
  { route: 'contact', text: 'Contact' },
  { route: 'team', text: 'Team' },
  { type: MenuItem.Types.SUBHEADER, text: 'Partners' }
];

var partner = Partners.map(function(partner){
  return {
    type: MenuItem.Types.LINK,
    payload: partner.url,
    text: partner.name
  }
});

var user = function(uid) {
  return [
    { route: 'users/' + uid, text: 'Profile'},
    { route: 'storefront', text: 'Storefront'}
  ];
};

var leftMenuItems = { basic, partner, user }

module.exports = leftMenuItems