var React = require('react');
var Constants = require('../utils/constants');
var mui = require('material-ui');
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
      muiTheme: Constants.themeManager
    };
  },
  render () {
    return <Paper style={{ width: '90%', margin: 'auto'}}>
      <CardMedia>
        <img src={Constants.about.image} />
      </CardMedia>
      <CardTitle title="Three Hearts Farms" subtitle="About"/>
      <CardText style={{ fontSize: '1.2em'}}>{Constants.about.text}</CardText>
    </Paper>
  },
});

module.exports = About;
