// Node Modules
var React = require('react');
var mui = require('material-ui');

// Local Files
var utl = require('../../utils/utl');

// Elements
var styles = utl.styles;
var Paper = mui.Paper;
var CardMedia = mui.CardMedia;
var CardText = mui.CardText;
var CardText = mui.CardText;
var CardTitle = mui.CardTitle;

var About = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    var assets = utl.staticPages.aboutPage
    return <Paper style={styles.splashContainer}>
      <CardMedia>
        <img src={assets.image} />
      </CardMedia>
      <CardTitle title={assets.title} subtitle={assets.subtitle}/>
      <CardText style={styles.splashText}>{assets.text}</CardText>
    </Paper>
  },
});

module.exports = About;
