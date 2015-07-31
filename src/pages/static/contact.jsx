// Node Modules
var React = require('react');
var mui = require('material-ui');

// Local Files
var utl = require('../../utils/utl');
var CommunicationEmail = require('../../components/svgIcons/communicationEmail');
var CommunicationPhone = require('../../components/svgIcons/communicationPhone');

// Elements
var styles = utl.styles.pages.staticP.contact;
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
    return <Paper style={ styles.container }>
      <div style={ styles.mapContainer }>
        <iframe style={ styles.iframe } src={ assets.mapPath } />
      </div>
      <CardTitle
        className='cardTitle'
        title={ assets.title }
        subtitle={ assets.subtitle } />
      <CardText
        className='cardText'
        style={ styles.text }>
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
