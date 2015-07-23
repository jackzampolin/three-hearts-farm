// Node Modules
var React = require('react');
var mui = require('material-ui');
// Local Files
var utl = require('../../utils/utl');
// Elements
var styles = utl.styles
var Paper = mui.Paper;
var CardTitle = mui.CardTitle;
var CardText = mui.CardText;
var CardMedia = mui.CardMedia;

var Default = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    var assets = utl.staticPages.defaultPage
    return <Paper style={styles.splashContainer}>
      <CardMedia>
        <img src={assets.image} />
      </CardMedia>
      <CardTitle
        className='cardTitle'
        title={assets.title}
        subtitle={assets.subtitle}/>
      <CardText
        className='cardText'
        style={styles.splashText}>
        {assets.text}
      </CardText>
    </Paper>

  },
});

module.exports = Default;
