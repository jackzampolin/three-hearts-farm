var React = require('react');
var mui = require('material-ui')
var SvgIcon = mui.SvgIcon;

var NavigationMenu = React.createClass({

  render() {
    return (
      <SvgIcon className='NavigationMenu' {...this.props}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </SvgIcon>
    );
  }

});

module.exports = NavigationMenu;