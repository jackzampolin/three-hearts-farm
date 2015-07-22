// Node Modules
var React = require('react');
var Router = require('react-router')
var Reflux = require('reflux');
var mui = require('material-ui');

// Local files
var utl = require('../utils/utl');
var Actions = require('../actions');
var ArticlesStore = require('../stores/articles-store');
var Loading = require('../components/loading');
var DisplayArticleCard = require('../components/displayArticleCard');

// Elements
var styles = utl.styles;
var Paper = mui.Paper;
var List = mui.List;
var ListItem = mui.ListItem;
var Link = Router.Link;


var Blog = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  mixins : [
    Reflux.listenTo(ArticlesStore, '_onChange'),
  ],
  getInitialState () {
    return {
      articles: [],
      selectedArticle: null,
    }
  },
  componentWillMount () {
    Actions.getArticles();
  },
  render () {
    return <Paper style={styles.paperContainer}>
      <div className={styles.row}>
        <div className={styles.quarterSpan}>
          { !!this.state.articles ? this._renderTitleLinks() : null }
        </div>
        <div className={styles.threeQuarterSpan}>
          { this.state.selectedArticle ? this._renderPost() : this._renderPosts() }
        </div>
      </div>
    </Paper>
  },
  _onChange (event, articles) {
    if (articles) {
      this.setState({ articles })
    } else {
      this.setState({ articles: null })
    }
  },
  _renderTitleLinks () {
    var titleLinks = this.state.articles.map(function(article){
      return <Link key={Math.random()} to={'/blog/' + article.id}>
        <ListItem
          primaryText={article.title}
          secondaryText={article.author}
        />
      </Link>
    })
    return <List>
      { titleLinks }
    </List>
  },
  _renderPosts () {
    var articles = this.state.articles
    return articles.map(function (article) {
      return <DisplayArticleCard {...article}/>
    });
  },
});

module.exports = Blog;
