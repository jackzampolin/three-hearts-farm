// Node Modules
var React = require('react');
var Router = require('react-router')
var Reflux = require('reflux');
var mui = require('material-ui');
var _ = require('lodash')

// Local files
var utl = require('../utils/utl');
var Actions = require('../actions');
var ArticlesStore = require('../stores/articles-store');
var Loading = require('../components/loading');
var BlogPost = require('../components/blogPost');
var ArticleLink = require('../components/ArticleLink');
var Footer = require('../components/footer');

// Elements
var styles = utl.styles.pages.blog;
var Paper = mui.Paper;
var Tabs = mui.Tabs;
var Tab = mui.Tab;
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
      articles: null,
    }
  },
  componentWillMount () {
    Actions.getArticles();
  },
  render () {
    return <Paper style={styles.container}>
      { !!this.state.articles ? this._blogPage() : <Loading style={styles.loading} /> }
      <Footer />
    </Paper>
  },
  _onChange (event, articles) {
    if (articles) {
      this.setState({ articles })
    } else {
      this.setState({ articles: null })
    }
  },
  _blogPage () {
    if (this.props.params.id) {
      var article = _.filter(this.state.articles, function(article){
        return article.id === this.props.params.id
      }.bind(this))[0]
      return <BlogPost {...article} />
    } else {
      return this.state.articles.map(function(article){
        return <ArticleLink {...article} key={article.id} />
      });
    }
  },
});

module.exports = Blog;
