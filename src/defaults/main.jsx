var React = require('react');
var Content = require('../components/content')
var Header = require('./header')
var Footer = require('./footer')
var mui = require('material-ui')
var AppCanvas = mui.AppCanvas
var ThemeManager = new mui.Styles.ThemeManager()


module.exports = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render () {
    return <AppCanvas>
      <Header />
      {this.content()}
      <Footer />
    </AppCanvas>
  },
  content () {
    if(this.props.children) {
      return this.props.children
    } else {
      return <Content />
    }
  }
});