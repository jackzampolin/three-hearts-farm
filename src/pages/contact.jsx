var React = require('react');
var Constants = require('../utils/constants');
var mui = require('material-ui');
var React = require('react');
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
      muiTheme: Constants.themeManager
    };
  },
  render () {
    return <Paper style={{ width: '90%', margin: 'auto'}}>
      <div style={{ width: '100%', height: '15em', margin: 'auto'}}>
        <iframe
          style={{width:'100%', height:'100%', frameborder:'0', border: '0'}}
          src="https://www.google.com/maps/embed/v1/place?q=Three+Hearts+Farm,+2111+Love+Ln,+Bozeman,+MT+59718,+United+States&key=AIzaSyCpz9iKFUss5-9MmjGh8YBaU7D50gzxeKk"
          allowFullScreen
        />
      </div>
      <CardTitle title="Three Hearts Farms" subtitle="Contact Info"/>
      <CardText style={{ fontSize: '1.2em'}}>
        <List>
          <ListItem
            primaryText={Constants.email}
            secondaryText='Email'
            leftIcon={
              <FontIcon className='material-icons'>email</FontIcon>
            } />
          <ListItem
            primaryText={Constants.phone}
            secondaryText='Phone'
            leftIcon={
              <FontIcon className='material-icons'>phone</FontIcon>
            } />
        </List>
      </CardText>
    </Paper>
  }
});

module.exports = Contact
