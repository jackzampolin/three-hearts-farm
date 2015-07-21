// This component contains the Header to simplify the
// inheritance chain.  Was having problems with owner,
// a React relationship, != parent, a DOM relationship.

// Require various libraries
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('./actions');
var Constants = require('./utils/constants');
var mui = require('material-ui');

// Components and Stores required
var UserStore = require('./stores/users-store');
var Link = Router.Link;
var AppBar = mui.AppBar;
var FlatButton = mui.FlatButton;
var FontIcon = mui.FontIcon;
var MenuItem = mui.MenuItem;
var IconButton = mui.IconButton;
var LeftNav = mui.LeftNav;
var Avatar = mui.Avatar;
var AppCanvas = mui.AppCanvas;

var Main = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: Constants.themeManager
    };
  },
  mixins : [
    Reflux.listenTo(UserStore, 'onChange'),
    Router.Navigation
  ],
  getInitialState () {
    return {
      user: null,
    }
  },
  handleMenuClick (event, selectedIndex, menuItem) {
    this.transitionTo(menuItem.route)
  },
  render () {
    var user = this.state.user
    var menu = Constants.leftMenuItems
    var basicMenu = menu.basic
    var partnerMenu = menu.partner
    var menuItems = basicMenu.concat(partnerMenu)
    if (user) {
      var uid = parseInt(this.state.user.uid.match(/\d+/)[0]).toString(30)
      var userMenu = menu.user(uid)
      menuItems.splice(0,0,userMenu[0],userMenu[1])
    };
    return <AppCanvas>
      <LeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        onChange={this.handleMenuClick}
      />
      <AppBar
        ref='appBar'
        title="Three Hearts Farm"
        iconElementLeft={ this.leftMenuClick() }
        iconElementRight={ this.state.user ? this.loggedIn() : this.loggedOut() }
      />
      { this.props.children }
    </AppCanvas>
  },
  leftMenuClick () {
    return <IconButton
      iconClassName="material-icons"
      onClick={this.menuToggle}>
      menu
    </IconButton>;
  },
  menuToggle () {
    this.refs.leftNav ? this.refs.leftNav.toggle() : null
  },
  onChange (event, user) {
    if (!!user && user.isLoggedIn) {
      this.setState({ user })
    } else {
      this.setState({ user: null })
    }
  },
  loggedIn () {
    return <FlatButton
      label='Logout'
      tooltipPosition="bottom-center"
      onClick={Actions.logout}
      tooltip="Logout" />
  },
  loggedOut () {
    return <FlatButton
      label='Login'
      tooltipPosition="bottom-center"
      onClick={Actions.login}
      tooltip="Login" />

  },
});

module.exports = Main;
