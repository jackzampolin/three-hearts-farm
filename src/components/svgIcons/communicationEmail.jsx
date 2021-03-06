var React = require('react');
var mui = require('material-ui')
var SvgIcon = mui.SvgIcon;
var styles = require('../../utils/utl').styles.components.svgIcons.communicationEmail


var CommunicationEmail = React.createClass({

  render() {
    return (
      <SvgIcon className='CommunicationEmail' {...this.props}>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </SvgIcon>
    );
  }

});

module.exports = CommunicationEmail;
