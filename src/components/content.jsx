var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux')
var Actions = require('../actions');
var UserStore = require('../stores/users-store')
var Link = Router.Link

var Content = React.createClass({
  mixins : [
    Reflux.listenTo(UserStore, 'onChange')
  ],
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
  render () {
    return (
      <div>
        { this.state.user ? this.loggedIn() : this.loggedOut() }
      </div>
    );
  },
  loggedIn () {
    console.log('logged in')
    return <div>
       logged in
    </div>
  },
  loggedOut () {
    console.log('logged out')
    return <div>
      logged out
    </div>
  },
});

module.exports = Content;