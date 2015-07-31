// Node Modules
var React = require('react');
var Router = require('react-router')
var mui = require('material-ui')

// Local Files
var utl = require('../utils/utl')

// Elements
var Link = Router.Link;
var styles = utl.styles.components.footer
var FlatButton = mui.FlatButton

var Footer = React.createClass({
  render () {
    return (
      <div style={styles.footerWrapper}>
        <Link to='/blog'>
          <FlatButton label='Blog' />
        </Link>
        <Link to='/about'>
          <FlatButton label='About' />
        </Link>
        <Link to='/contact'>
          <FlatButton label='Contact' />
        </Link>
        <Link to='/team'>
          <FlatButton label='Team' />
        </Link>
        <Link to='/'>
          <FlatButton label='Home' />
        </Link>
      </div>
    )
  },
});

module.exports = Footer
