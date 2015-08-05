// This file contains all of the Routes as well as some setup

// Need this until React v1.0.0
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Node Modules
var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');

// Local Files
var Main = require('./main')
var Storefront = require('./pages/storefront')
var UserPage = require('./pages/userPage')
var Contact = require('./pages/static/contact')
var Team = require('./pages/static/team')
var About = require('./pages/static/about')
var Blog = require('./pages/blog')
var StaticPages = require('./pages/staticPages')

// Components
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Routing Tree
module.exports = (
  <Router history={new HashHistory.default}>
    <Route component={ Main }>
      <Route path='/' component={ StaticPages }>
        <Route path='about' component={ About } />
        <Route path='team' component={ Team } />
        <Route path='contact' component={ Contact } />
      </Route>
      <Route path='blog' component={ Blog }>
        <Route path=':id' component={ Blog } />
      </Route>
      <Route path='profile' component={ UserPage } />
      <Route path='storefront' component={ Storefront } />
    </Route>
  </Router>
)
