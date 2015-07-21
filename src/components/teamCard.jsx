var React = require('react');
var Constants = require('../utils/constants');
var mui = require('material-ui');
var Paper = mui.Paper;
var CardTitle = mui.CardTitle;
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardMedia = mui.CardMedia;
var Avatar = mui.Avatar;
var FontIcon = mui.FontIcon;

var teamCard = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: Constants.themeManager
    };
  },
  render () {
    return <Card style={{ margin: '2%'}}>
      <CardMedia>
        <img src={this.props.faceShot}/>
      </CardMedia>
      <CardHeader
        title={this.props.name}
        subtitle={this.props.position}
        avatar={<Avatar icon={
            <FontIcon className="material-icons">{this.props.icon}</FontIcon>
          }
        /> }
      />
      <CardText>{this.props.text}</CardText>
    </Card>
  },
});

module.exports = teamCard;
