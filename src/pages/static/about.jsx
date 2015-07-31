// Node Modules
var React = require('react');
var mui = require('material-ui');

// Local Files
var utl = require('../../utils/utl');

// Elements
var styles = utl.styles.pages.staticP.about;
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
    return <Paper style={styles.container}>
      <CardMedia>
        <img src={assets.image} />
      </CardMedia>
      <CardTitle
        className='cardTitle'
        title={assets.title}
        subtitle={assets.subtitle}/>
      <CardText
        className='cardText'
        style={styles.text}>
        {assets.text}
      </CardText>
    </Paper>
  },
});

module.exports = About;
