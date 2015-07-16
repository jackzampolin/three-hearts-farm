var React = require('react');
var mui = require('material-ui')
var Paper = mui.Paper;
var CardMedia = mui.CardMedia;

module.exports = React.createClass({

  render: function() {
    return <Paper style={{
      margin: 'auto',
      width: '90%',
      height: '100%',
      padding: '10px',
    }}>
      <CardMedia><img src='./assets/images/winter_sunset.jpg' /></CardMedia>
    </Paper>
  }

});

;