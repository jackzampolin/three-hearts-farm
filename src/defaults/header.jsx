var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var UserStore = require('../stores/users-store');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Link = Router.Link;
var AppBar = mui.AppBar;
var FlatButton = mui.FlatButton;
var FontIcon = mui.FontIcon;
var MenuItem = mui.MenuItem;
var IconButton = mui.IconButton;
var LeftNav = mui.LeftNav;
var Avatar = mui.Avatar;

var Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
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
    menuItems = [
      { route: '/', text: 'Home', onTouchTap: this.handleMenuClick },
      { route: 'storefront', text: 'Storefront', onTouchTap: this.handleMenuClick },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://google.com',
         text: 'User Defined'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://google.com',
         text: 'User Defined'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://google.com',
         text: 'User Defined'
      },
    ];
    if (this.state.user) {
      var uid = this.state.user.uid.match(/\d+/)[0]
      menuItems.splice(2,0,{
        route: uid,
        text: 'Profile',
        onTouchTap: this.handleMenuClick }
      )
    };
    return <div>
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
    </div>
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

module.exports = Header;

// leftMenuClick () {
//   var menuOptions = [
//     <MenuItem
//       index={1}
//       attribute={'Home'}
//       onClick={this.home}
//       primaryText="Maps"/>,
//     <MenuItem
//       index={2}
//       attribute={'Storefront'}
//       onClick={this.storefront}
//       primaryText="Books"/>,
//   ];
//   var iconButton = <IconButton iconClassName="material-icons" onClick={this.menuToggle}>menu</IconButton>;
//   return <IconMenu
//     openDirection='bottom-right'
//     ref='iconMenu'
//     iconButtonElement={iconButton}>
//     { menuOptions }
//   </IconMenu>
// },