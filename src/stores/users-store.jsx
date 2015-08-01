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
  _usersRef: new Firebase(utl.firebaseUrl + 'usersLog/'),
  getCurrentUser () {
    this.trigger('change', this._currentUser)
  },
  login () {
    this._baseRef.authWithOAuthPopup('google', function(error,authData) {
      if (error) {
        this._handleLoginError(error);
      } else {
        this._onAuth(authData);
      }
    }.bind(this), { remember: 'sessionOnly', scope: 'email' });
  },
  logout () {
    this._baseRef.unauth()
  },
  _setCurrentUser (profile) {
    this._currentUser = profile
    this.trigger('change',this._currentUser);
  },
  _onAuth(authData) {
    this._usersRef.onAuth(function(authData){
      if (!authData) {
        var user = this._currentUser
        var logReport = {
          email: user.email,
          name: user.name,
          profileImageURL: user.profileImageURL,
          uid: user.uid,
          operation: 'logout',
          time: Date.now(),
          isLoggedIn: false,
        }
        this._usersRef.push(logReport)
        this._setCurrentUser(null)
      } else {
        var tempProfile = {
          email: authData.google.email,
          name: authData.google.displayName,
          profileImageURL: authData.google.profileImageURL,
          uid: authData.uid,
          operation: 'login',
          time: Date.now(),
          isLoggedIn: true,
        }
        this._usersRef.push(tempProfile)
        this._setCurrentUser(tempProfile)
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
