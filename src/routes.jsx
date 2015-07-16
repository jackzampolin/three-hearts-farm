var React = require('react');
var ReactRouter = require('react-router');
var BrowserHistory = require('react-router/lib/browserhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./defaults/main')
var Storefront = require('./pages/storefront')
var UserPage = require('./pages/userpage')

module.exports = (
  <Router history={new BrowserHistory.default}>
    <Route path='/' component={Main}>
      <Route path='/storefront' component={Storefront} />
      <Route path='/users/:id' component={UserPage} />
    </Route>
  </Router>
)