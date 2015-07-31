// Node Modules
var React = require('react');
var Router = require('react-router')
var mui = require('material-ui');
// Local Files
var utl = require('../utils/utl');
// Elements
var styles = utl.styles.components.articleLink;
var Card = mui.Card;
var Link = Router.Link;
var CardMedia = mui.CardMedia;
var CardTitle = mui.CardTitle;
var CardText = mui.CardText;
var Paper = mui.Paper;
var Paper = mui.Paper;

var ArticleLink = React.createClass({
  mixins: [ Router.Navigation ],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    return <Card onClick={this._handleClick} style={styles.card}>
      <CardMedia overlay={<CardTitle title={this.props.title} subtitle={this.props.author}/>}>
        <img src={utl.imagePath + this.props.articlePicture}/>
      </CardMedia>
      <CardText style={{ paddingTop: '2em' }}>
        { this.props.articleContent[0] }
      </CardText>
    </Card>
  },
  _handleClick () {
    this.transitionTo('/blog/' + this.props.id)
  },
});

module.exports = ArticleLink;
