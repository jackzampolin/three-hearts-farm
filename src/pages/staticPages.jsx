// Node Modules
var React = require('react');
var mui = require('material-ui');
// Local Files
var utl = require('../utils/utl')
var Footer = require('../components/footer')
var Default = require('./static/default')
// Elements
var styles = utl.styles.pages.staticPages
var CardMedia = mui.CardMedia;
var Card = mui.Card;

var staticPages = React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    return <Card>
      <CardMedia style={styles.appBarPadding}>
        <img src={utl.splashLogo} />
      </CardMedia>
        { this.props.children ? this.props.children : <Default /> }
      <Footer />
    </Card>
  },
});

module.exports = staticPages;
