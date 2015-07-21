var React = require('react');
var Router = require('react-router')
var Navigation = Router.Navigation;
var Link = Router.Link;
var mui = require('material-ui')
var FlatButton = mui.FlatButton

var Footer = React.createClass({
  mixins: [ Navigation ],
  render () {
    return (
      <div style={{ margin: 'auto', textAlign: 'center', paddingTop: '2em'}}>
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
