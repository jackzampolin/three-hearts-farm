var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux')
var Actions = require('../actions');
var UserStore = require('../stores/users-store')
var Link = Router.Link

var Header = React.createClass({
  mixins : [
    Reflux.listenTo(UserStore, 'onChange')
  ],
  getInitialState () {
    return {
      user: null
    }
  },
  render () {
    return (
      <nav className='navbar navbar-default header'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            Three Hearts Farm
          </Link>
          { this.state.user ? this.loggedIn() : this.loggedOut() }
        </div>
      </nav>
    );
  },
  onChange (event, user) {
    if (!!user && user.isLoggedIn) {
      this.setState({ user })
    } else {
      this.setState({ user: null })
    }
  },
  loggedIn () {
    return <div className='inout' onClick={Actions.logout}>
      <Link to='/'>
        <img className='profile' src={this.state.user.profileImageURL} />
        <p className='profile'>{this.state.user.name}</p>
      </Link>
      <button className='profile' type='button' className='btn btn-default'>
        Logout
      </button>
    </div>
  },
  loading () {

  },
  loggedOut () {
    return <div className='inout' onClick={Actions.login}>
      <button type='button' className='btn btn-default'>
        Login
      </button>
    </div>
  },
});

module.exports = Header;