var React = require('react');
var mui = require('material-ui')
var utl = require('../utils/utl')
var Paper = mui.Paper
var CardMedia = mui.CardMedia


var Storefront = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    return <Paper style={{
      margin: 'auto',
      width: '60%',
      height: '100%',
      padding: '10px',
    }}>
      <CardMedia><img src='./assets/images/rainbow.jpg' /></CardMedia>

    </Paper>
  }

});

module.exports = Storefront
