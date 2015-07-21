var React = require('react');
var Constants = require('../utils/constants');
var mui = require('material-ui');
var Paper = mui.Paper;


var Blog = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: Constants.themeManager
    };
  },
  getInitialState () {
    return {
      user: null,
    }
  },
  componentWillMount () {
    return null
  },
  render () {
    return <div>
      Blog
    </div>
  },
});

module.exports = Blog;
