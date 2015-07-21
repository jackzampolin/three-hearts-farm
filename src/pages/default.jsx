var React = require('react');
var Constants = require('../utils/constants');
var mui = require('material-ui');
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
    return <Paper style={{ width: '90%', margin: 'auto'}}>
      <CardMedia>
        <img src={Constants.default.image} />
      </CardMedia>
      <CardTitle title="Three Hearts Farms" subtitle="Welcome!"/>
      <CardText style={{ fontSize: '1.2em'}}>{Constants.default.text}</CardText>
    </Paper>

  },
});

module.exports = Default;
