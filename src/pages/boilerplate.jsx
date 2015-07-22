// Node Modules
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');
// Local Files
var Actions = require('../actions');
var utl = require('../utils/utl');
var UserStore = require('../stores/users-store');
// Elements
var styles = utl.styles;
var Paper = mui.Paper;

var BoilerPlate = React.createClass({
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
  componentWillMount () {
    return null
  },
  render () {
    return <div>
    </div>
  },
  _onChange (event, user) {
    if (!!user && user.isLoggedIn) {
      this.setState({ user })
    } else {
      this.setState({ user: null })
    }
  },
});

module.exports = BoilerPlate;
