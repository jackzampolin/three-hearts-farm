// Node Modules
var React = require('react');
var mui = require('material-ui');

// Local Files
var utl = require('../../utils/utl');
var CommunicationEmail = require('../../svgIcons/communicationEmail');
var CommunicationPhone = require('../../svgIcons/communicationPhone');

// Elements
var styles = utl.styles;
var Paper = mui.Paper;
var CardMedia = mui.CardMedia;
var CardText = mui.CardText;
var CardText = mui.CardText;
var CardTitle = mui.CardTitle;
var IconButton = mui.IconButton;
var List = mui.List;
var ListItem = mui.ListItem;
var FontIcon = mui.FontIcon;

var Contact = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    var assets = utl.staticPages.contactPage
    return <Paper style={ styles.splashContainer }>
      <div style={ styles.mapContainer }>
        <iframe style={ styles.iframe } src={ assets.mapPath } />
      </div>
      <CardTitle title={ assets.title } subtitle={ assets.subtitle } />
      <CardText style={ styles.splashText }>
        <List>
          <ListItem
            primaryText={ utl.email }
            secondaryText='Email'
            leftIcon={<CommunicationEmail />} />
          <ListItem
            primaryText={ utl.phone }
            secondaryText='Phone'
            leftIcon={<CommunicationPhone />} />
        </List>
      </CardText>
    </Paper>
  }
});

module.exports = Contact
