var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');
var UserStore = require('../stores/users-store');
var Actions = require('../actions');
var Loading = require('../components/loading');
var ThemeManager = new mui.Styles.ThemeManager()
var FlatButton = mui.FlatButton;
var Avatar = mui.Avatar;
var Paper = mui.paper


var UserPage = React.createClass({
  mixins : [
    Reflux.listenTo(UserStore, 'onChange')
  ],
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState () {
    return {
      user: null
    }
  },
  onChange (event, user) {
    if (!!user && user.isLoggedIn) {
      this.setState({ user })
    } else {
      this.setState({ user: null })
    }
  },
  componentDidMount () {
    Actions.getCurrentUser()
  },
  render () {
    return <div>
      { this.state.user ? this.displayUserData() : this.displayUserData() }
    </div>
  },
  displayUserData () {
    return <Paper style={{margin: '2em'}}>

    </Paper>
  },

  loading () {
    return <Loading />
  },
});

module.exports = UserPage