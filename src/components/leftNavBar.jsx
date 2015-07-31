// Node Modules
var React = require('react')
var Router = require('react-router');
var mui = require('material-ui');

// Local Files
var utl = require('../utils/utl');
var styles = utl.styles.components.leftNavBar

// Elements
var LeftNav = mui.LeftNav;

var LeftNavBar = React.createClass({
  mixins: [
    Router.Navigation
  ],
  render () {
    var menu = utl.leftMenuItems
    var basicMenu = menu.basic
    var partnerMenu = menu.partner
    var menuItems = basicMenu.concat(partnerMenu)
    if (this.props.uid) {
      var userMenu = menu.user(this.props.uid)
      menuItems.splice(0,0,userMenu[0],userMenu[1])
    };
    return  <div>
      <LeftNav
        ref='navRef'
        className='navRef'
        docked={false}
        menuItems={menuItems}
        onChange={this._handleMenuClick}
      />
    </div>
  },
  _handleMenuClick (event, selectedIndex, menuItem) {
    this.transitionTo(menuItem.route)
  },
});

module.exports = LeftNavBar
