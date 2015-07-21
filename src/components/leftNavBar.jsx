var React = require('react');
var Constants = require('../utils/constants');
var mui = require('material-ui');



var leftNavBar = React.createClass({

  render() {
    return <div>
      <LeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        onChange={this.handleMenuClick}
      />
    </div>
  }

});

module.exports = leftNavBar;