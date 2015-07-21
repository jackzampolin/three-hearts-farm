var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var Constants = require('../utils/constants');
var mui = require('material-ui');
var UserStore = require('../stores/users-store');
var Paper = mui.Paper;

var BoilerPlate = React.createClass({
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
  onChange (event, user) {
    if (!!user && user.isLoggedIn) {
      this.setState({ user })
    } else {
      this.setState({ user: null })
    }
  },
});

module.exports = BoilerPlate;
