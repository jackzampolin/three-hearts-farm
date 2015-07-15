var Reflux = require('reflux');
var Actions = require('../actions');
var Firebase = require('firebase');
var consts = require('../utils/constants');
var _ = require('lodash');

// Firebase Auth data
// https://www.firebase.com/docs/web/guide/login/google.html

module.exports = Reflux.createStore({

  listenables: [Actions],

  baseRef: new Firebase(consts.firebaseUrl),

  usersRef: new Firebase(consts.firebaseUrl + 'users/'),

  login () {
    this.baseRef.authWithOAuthPopup('google', function(error,authData) {
      if (error) {
        this.handleLoginError(error);
      } else {
        // Sets the user ref for the session
        this.loginCompleted(authData);
        // Sets event listener for auth events
        this.onAuth(authData);
        // Sets event listener for profile changes
        this.onValue(authData);
      }
    }.bind(this), { remember: 'sessionOnly', scope: 'email' });
  },
  handleLoginError (error) {
    this.usersRef.child('errors/').push({ error });
    switch (error.code) {
      case 'TRANSPORT_UNAVAILABLE':
        this.transportUnavailable(error);
        break;
      case 'INVALID_PASSWORD':
        this.invalidPassword(error);
        break;
      case 'INVALID_USER':
        this.invalidUser(error);
        break;
      case 'NETWORK_ERROR':
        this.networkError(error);
        break;
      case 'UNKNOWN_ERROR':
        this.unknownError(error);
        break;
      case 'USER_CANCELLED':
        this.userCancelled(error);
        break;
      case 'USER_DENIED':
        this.userDenied(error);
        break;
    }
  },
  transportUnavailable (error) {
    console.log(error)
  },
  invalidPassword (error) {
    console.log(error)
  },
  invalidUser (error) {
    console.log(error)
  },
  networkError (error) {
    console.log(error)
  },
  unknownError (error) {
    console.log(error)
  },
  userCancelled (error) {
    console.log(error)
  },
  userDenied (error) {
    console.log(error)
  },
  logout () {
    this.baseRef.unauth()
  },
  setCurrentUser (profile) {
    this.currentUser = profile
    this.trigger('change',this.currentUser);
  },
  loginCompleted (authData) {
    this.userRef = new Firebase(consts.firebaseUrl + 'users/' + authData.uid);
  },
  onValue (authData) {
    this.userRef.on('value', function(profile){
      this.setCurrentUser(profile.val())
    }.bind(this));
  },
  onAuth(authData) {
    this.userRef.onAuth(function(authData){
      if (!!authData) {
        var profile = {
          uid: authData.uid,
          name: authData.google.displayName,
          profileImageURL: authData.google.profileImageURL,
          email: authData.google.email,
          isLoggedIn: true
        };
        this.userRef.update(profile)
        this.setCurrentUser(profile)
      } else {
        this.userRef.update({ isLoggedIn: false });
        this.currentUser = null;
        this.trigger('change', this.currentUser)
      }
    }.bind(this))
  },
});