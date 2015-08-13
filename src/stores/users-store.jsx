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
  _googleAuthOptions: {
    remember: 'sessionOnly',
    scope: 'email'
  },
  // Public methods
  // Sends user data thru actions to requesting element
  getCurrentUser () {
    this.trigger('change', this._currentUser)
  },
  // Triggers login flow.  Button held in main.jsx
  login () {
    this._usersRef = this._baseRef.child('users');
    this._baseRef.onAuth(this._onAuth)
    this._baseRef.authWithOAuthPopup('google', this._login, this._googleAuthOptions);
  },
  // Logs out logged in user
  logout () {
    this._baseRef.unauth()
    this._baseRef.offAuth(this._onAuth)
    this._userRef.off('value', this._handleDbChange)
  },
  // Private methods
  // Called by login.  Callback for OAuth.  Recursive for TRANSPORT_UNAVAILABLE.
  _login (error, authData) {
    if (!!error && error.code === "TRANSPORT_UNAVAILABLE") {
      this._baseRef.authWithOAuthRedirect('google',this._login, this._googleAuthOptions)
    } else if (error) {
      this._handleLoginError(error)
    }
  },
  // Fires on auth events.  If it is an unauth() authData == null else it is individual authData
  _onAuth (authData) {
    if (authData) {
      // Checks if user is already in DB.
      // Yes calls this._setCurrentUser with the return snapshot
      // No stores user data and calls this._setCurrentUser with set data
      this._usersRef.child(authData.uid).once('value', this._checkUser)
    } else {
      // Make this._currentUser = null
      this._setCurrentUser(authData)
    }
  },
  _checkUser (snapshot) {
    var profile = snapshot.val()
    if (profile) {
      this._setCurrentUser(profile)
      this._userRef = this._usersRef.child(profile.uid)
      this._userRef.on('value', this._handleDbChange)
    } else {
      this._saveUserData(this._baseRef.getAuth())
    }
  },
  _saveUserData (authData) {
    var startProfile = this._newUserProfile(authData)
    this._usersRef.child(authData.uid).set(startProfile)
    this._userRef = this._usersRef.child(startProfile.uid)
    this._userRef.on('value', this._handleDbChange)
    this._setCurrentUser(startProfile)
  },
  _handleLoginError (error) {
    this._baseRef.child('errors').push({ error });
    console.log(error)
  },
  _handleDbChange (snapshot) {
    this._setCurrentUser(snapshot.val())
  },
  _setCurrentUser (profile) {
    this._currentUser = profile
    this.trigger('change',this._currentUser);
  },
  _newUserProfile (authData) {
    return {
      email: authData.google.email,
      name: authData.google.displayName,
      profileImageURL: authData.google.profileImageURL,
      uid: authData.uid,
      validated: false,
      isBetsyOrJack: false,
      officePhone: null,
      personalPhone: null,
      businessName: null,
      address: null,
      deliveryInstructions: null,
      paymentMethod: null,
    }
  },
});

// switch (error.code) {
//   case 'TRANSPORT_UNAVAILABLE':
//     this._transportUnavailable(error);
//     break;
//   case 'INVALID_PASSWORD':
//     this._invalidPassword(error);
//     break;
//   case 'INVALID_USER':
//     this._invalidUser(error);
//     break;
//   case 'NETWORK_ERROR':
//     this._networkError(error);
//     break;
//   case 'UNKNOWN_ERROR':
//     this._unknownError(error);
//     break;
//   case 'USER_CANCELLED':
//     this._userCancelled(error);
//     break;
//   case 'USER_DENIED':
//     this._userDenied(error);
//     break;
// }

// _transportUnavailable (error) {
//   console.log(error)
// },
// _invalidPassword (error) {
//   console.log(error)
// },
// _invalidUser (error) {
//   console.log(error)
// },
// _networkError (error) {
//   console.log(error)
// },
// _unknownError (error) {
//   console.log(error)
// },
// _userCancelled (error) {
//   console.log(error)
// },
// _userDenied (error) {
//   console.log(error)
// },

// var logReport = {
//   email: user.email,
//   name: user.name,
//   profileImageURL: user.profileImageURL,
//   uid: user.uid,
//   operation: 'logout',
//   time: Date.now(),
//   isLoggedIn: false,
// }

// var tempProfile = {
//   email: authData.google.email,
//   name: authData.google.displayName,
//   profileImageURL: authData.google.profileImageURL,
//   uid: authData.uid,
//   operation: 'login',
//   time: Date.now(),
//   isLoggedIn: true,
// }
