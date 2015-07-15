var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux')
var Actions = require('../actions');
var UserStore = require('../stores/users-store')
var mui = require('material-ui')
var ThemeManager = new mui.Styles.ThemeManager()
var Link = Router.Link
var AppBar = mui.AppBar;
var Styles = mui.Styles;
var FlatButton = mui.FlatButton;
var Avatar = mui.Avatar;
var RaisedButton = mui.RaisedButton;
var MenuItem = mui.MenuItem;
var LeftNav = mui.LeftNav;
var IconButton = mui.IconButton;


var Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  mixins : [
    Reflux.listenTo(UserStore, 'onChange'),
    mui.Styles
  ],
  getInitialState () {
    return {
      user: null
    }
  },
  render () {
    menuItems = [
      { route: '/', text: 'Home' },
      { route: '/storefront', text: 'Online Store' },
      { route: '/components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'http://ofrf.org/education/database',
         text: 'Organic Education'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'http://organicfarmingworks.com/resources/',
         text: 'Organic Farming Works'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'http://www.nrcs.usda.gov/wps/portal/nrcs/main/national/landuse/crops/organic/',
         text: 'Natural Resources Conservation Service'
      },
    ];
    if (this.state.user) {
      var uid = this.state.user.uid.match(/\d+/)[0];
      var payload = { route: '/users/'+uid, text: 'Customer Profile' };
      menuItems.splice(2,0,payload)
    };
    var style = { top: '10%' }
    return (<div>
      <LeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        style={style}
      />
      <AppBar
        ref='appBar'
        title="Three Hearts Farm"
        iconElementLeft={<IconButton
          iconClassName="material-icons"
          onClick={this.leftMenuClick}>
          menu
        </IconButton>}
        iconElementRight={ this.state.user ? this.loggedIn() : this.loggedOut() }
      />
    </div>
    );
  },
  leftMenuClick () {
    this.refs.leftNav.toggle()
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