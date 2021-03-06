var React = require('react');
var mui = require('material-ui')
var SvgIcon = mui.SvgIcon;
var styles = require('../../utils/utl').styles.components.svgIcons.communicationVpnKey


var CommunicationVpnKey = React.createClass({

  render() {
    return (
      <SvgIcon className='CommunicationVpnKey' {...this.props}>
        <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </SvgIcon>
    );
  }

});

module.exports = CommunicationVpnKey;
