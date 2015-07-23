// Node Modules
var React = require('react');
var mui = require('material-ui');

// Local Files
var utl = require('../utils/utl');
var CommunicationEmail = require('../svgIcons/communicationEmail');

// Elements
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
      muiTheme: utl.themeManager
    };
  },
  render () {
    return <Card style={{ margin: '2%'}}>
      <CardMedia>
        <img src={this.props.faceShot}/>
      </CardMedia>
      <CardHeader
        className='teamInfo'
        title={this.props.name}
        subtitle={this.props.position}
        avatar={<CommunicationEmail style={{ width:'2em', height: '2em'}}/>}
      />
      <CardText style={{ marginTop: '-1em' }}>{this.props.text}</CardText>
    </Card>
  },
});

module.exports = teamCard;
