// This file contains all of the Routes as well as some setup

// Require Libraries
var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
// Need this until React v1.0.0
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Require Components to render router
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./main')
var Storefront = require('./pages/storefront')
var UserPage = require('./pages/userpage')
var Contact = require('./pages/contact')
var Team = require('./pages/team')
var About = require('./pages/about')
var Blog = require('./pages/blog')
var Splash = require('./defaults/splash')

// Routing Tree
module.exports = (
  <Router history={new HashHistory.default}>
    <Route component={ Main }>
      <Route path='/' component={ Splash }>
        <Route path='blog' component={ Blog } />
        <Route path='about' component={ About } />
        <Route path='team' component={ Team } />
        <Route path='contact' component={ Contact } />
      </Route>
      <Route path='users/:id' component={ UserPage } />
      <Route path='storefront' component={ Storefront } />
    </Route>
  </Router>
)