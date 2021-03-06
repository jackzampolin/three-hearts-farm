// Node Modules
var React = require('react');
var mui = require('material-ui');
// Local Files
var utl = require('../../utils/utl');
// Elements
var styles = utl.styles.pages.staticP.defaultPage
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

module.exports = Default;
