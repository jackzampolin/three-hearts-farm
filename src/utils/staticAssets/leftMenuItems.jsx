var Partners = require('./partners')
var mui = require('material-ui');
var MenuItem = mui.MenuItem;

var basic = [
  { route: '/', text: 'Home', iconClassName: 'material-icons', onTouchTap: this.handleMenuClick },
  { route: 'blog', text: 'Blog', onTouchTap: this.handleMenuClick },
  { route: 'about', text: 'About', onTouchTap: this.handleMenuClick },
  { route: 'contact', text: 'Contact', onTouchTap: this.handleMenuClick },
  { route: 'team', text: 'Team', onTouchTap: this.handleMenuClick },
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