// Node Modules
var React = require('react');
var mui = require('material-ui');
var Router = require('react-router')
// Local Files
var utl = require('../utils/utl');
var NavigationArrowBack = require('./svgIcons/navigationArrowBack');
// Elements
var styles = utl.styles.components.blogPost;
var Card = mui.Card;
var CardMedia = mui.CardMedia;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var Paper = mui.Paper;
var IconButton = mui.IconButton;

var BlogPost = React.createClass({
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
    return <Card>
      <CardMedia overlay={ this._cardTitle() }>
        <img src={ utl.imagePath + this.props.articlePicture }/>
      </CardMedia>
      <CardText style={ styles.textPadding }>
        { this._renderArticleContent() }
      </CardText>
    </Card>
  },
  _renderArticleContent (paragraphs) {
    var paragraphs = this.props.articleContent.map(function(paragraph){
      return <span style={styles.paragraph}>
        { paragraph }
      </span>
    })
    return paragraphs
  },
  _cardTitle () {
    return <CardHeader
      style={styles.title}
      title={this.props.title}
      subtitle={this.props.author}
      avatar={this._avatar()}
    />
  },
  _avatar () {
    return <IconButton onClick={this._handleBackClick} tooltip="Back">
      <NavigationArrowBack color='white'/>
    </IconButton>
  },
  _handleBackClick () {
    this.transitionTo('/blog')
  },
});

module.exports = BlogPost;
