// Node Modules
var Reflux = require('reflux');
var Firebase = require('firebase');
var _ = require('lodash');

// Local Files
var utl = require('../utils/utl');
var Actions = require('../actions');

// Firebase Auth data
// https://www.firebase.com/docs/web/guide/login/google.html

module.exports = Reflux.createStore({
  listenables: [Actions],
  _baseRef: new Firebase(utl.firebaseUrl),
  _usersRef: new Firebase(utl.firebaseUrl + 'users/'),
  getCurrentUser () {
    this.trigger('change', this.currentUser)
  },
  login () {
    this._baseRef.authWithOAuthPopup('google', function(error,authData) {
      if (error) {
        this._handleLoginError(error);
      } else {
        // Sets the user ref for the session
        this._loginCompleted(authData);
        // Sets event listener for auth events
        this._onAuth(authData);
        // Sets event listener for profile changes
        this._onValue(authData);
      }
    }.bind(this), { remember: 'sessionOnly', scope: 'email' });
  },
  logout () {
    this._baseRef.unauth()
  },
  _setCurrentUser (profile) {
    this.currentUser = profile
    this.trigger('change',this.currentUser);
  },
  _loginCompleted (authData) {
    this.userRef = new Firebase(utl.firebaseUrl + 'users/' + authData.uid);
  },
  _onValue (authData) {
    this.userRef.on('value', function(profile){
      this._setCurrentUser(profile.val())
    }.bind(this));
  },
  _onAuth(authData) {
    this.userRef.onAuth(function(authData){
      if (!!authData) {
        this.userRef.update({ isLoggedIn: true })
      } else {
        this.userRef.update({ isLoggedIn: false });
        this.currentUser = null;
        this.trigger('change', this.currentUser)
      }
    }.bind(this))
  },
  _handleLoginError (error) {
    this._usersRef.child('errors/').push({ error });
    switch (error.code) {
      case 'TRANSPORT_UNAVAILABLE':
        this._transportUnavailable(error);
        break;
      case 'INVALID_PASSWORD':
        this._invalidPassword(error);
        break;
      case 'INVALID_USER':
        this._invalidUser(error);
        break;
      case 'NETWORK_ERROR':
        this._networkError(error);
        break;
      case 'UNKNOWN_ERROR':
        this._unknownError(error);
        break;
      case 'USER_CANCELLED':
        this._userCancelled(error);
        break;
      case 'USER_DENIED':
        this._userDenied(error);
        break;
    }
  },
  _transportUnavailable (error) {
    console.log(error)
  },
  _invalidPassword (error) {
    console.log(error)
  },
  _invalidUser (error) {
    console.log(error)
  },
  _networkError (error) {
    console.log(error)
  },
  _unknownError (error) {
    console.log(error)
  },
  _userCancelled (error) {
    console.log(error)
  },
  _userDenied (error) {
    console.log(error)
  },
});