var React = require('react');
var Constants = require('../utils/constants')
var mui = require('material-ui');
var CardMedia = mui.CardMedia;
var Card = mui.Card;
var Footer = require('./footer')
var Default = require('../pages/default')

var Splash = React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: Constants.themeManager
    };
  },
  render () {
    return <Card>
      <CardMedia style={{ paddingTop: '3em'}}>
        <img src='./assets/images/thfheader.png' />
      </CardMedia>
        { this.props.children ? this.props.children : <Default /> }
      <Footer />
    </Card>
  },
});

module.exports = Splash;
