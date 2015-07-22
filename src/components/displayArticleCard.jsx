// Node Modules
var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
// Local Files
var utl = require('../utils/utl');
// Elements
var styles = utl.styles;
var Card = mui.Card;
var CardTitle = mui.CardTitle;
var CardMedia = mui.CardMedia;
var CardText = mui.CardText;

var displayArticleCard = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    }
  },
  render () {
    return <Card>
      <CardMedia>
        <img src={ utl.imagePath + this.props.articlePicture } />
      </CardMedia>
      <CardTitle title={this.props.title} subtitle={this.props.author}/>
      <CardText>
        { this.props.articleContent[0] }
      </CardText>
    </Card>
  },
});

module.exports = displayArticleCard;
