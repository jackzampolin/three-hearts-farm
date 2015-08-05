// This component contains the Header to simplify the
// inheritance chain.  Was having problems with owner,
// a React relationship, != parent, a DOM relationship.

// Node Modules
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');

// Local Files
var Actions = require('./actions');
var utl = require('./utils/utl');
var UserStore = require('./stores/users-store');
var LeftNavBar = require('./components/leftNavBar');
var ActionAccountCircle = require('./components/svgIcons/actionAccountCircle');
var CommunicationVpnKey = require('./components/svgIcons/communicationVpnKey');
var NavigationMenu = require('./components/svgIcons/navigationMenu');

// Components
var Link = Router.Link;
var AppBar = mui.AppBar;
var FlatButton = mui.FlatButton;
var FontIcon = mui.FontIcon;
var MenuItem = mui.MenuItem;
var IconButton = mui.IconButton;
var LeftNav = mui.LeftNav;
var Avatar = mui.Avatar;
var AppCanvas = mui.AppCanvas;
var Snackbar = mui.Snackbar;

var Main = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  mixins : [
    Reflux.listenTo(UserStore, '_onChange'),
  ],
  getInitialState () {
    return {
      user: null,
    }
  },
  render () {
    var user = this.state.user
    return <AppCanvas>
      <LeftNavBar
        ref='navRef'
        uid={ user ? this._parseNumber(user.uid) : null }
      />
      <AppBar
        title="Three Hearts Farm"
        iconElementLeft={
          <IconButton
            className='hamburgerMenu'
            onClick={this._menuToggle}>
            <NavigationMenu/>
          </IconButton>
        }
        iconElementRight={ user ? this._loggedIn() : this._loggedOut() }
      />
      { this.props.children }
    </AppCanvas>
  },
  _parseNumber (uid) {
    return parseInt(uid.match(/\d+/)[0]).toString(30)
  },
  _menuToggle () {
    this.refs.navRef ? this.refs.navRef.refs.navRef.toggle() : null
  },
  _onChange (event, user) {
    this.setState({ user })
  },
  _loggedIn () {
    return <div>
      <IconButton
        tooltip="Logout"
        tooltipPosition="bottom-center"
        onClick={Actions.logout}
        touch={true}
      >
        <ActionAccountCircle color={'white'}/>
      </IconButton>
      <Snackbar
        ref='snackbar'
        message="Logged In Successfully!"
        action="dismiss"
        openOnMount={true}
        onActionTouchTap={this._handleDismissClick}
      />
    </div>
  },
  _handleDismissClick () {
    this.refs.snackbar.dismiss()
  },
  _loggedOut () {
    return <IconButton
      tooltip="Login"
      tooltipPosition="bottom-center"
      onClick={Actions.login}
      touch={true}
    >
      <CommunicationVpnKey />
    </IconButton>
  },
});

module.exports = Main;
