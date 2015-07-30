// Node Modules
var React = require('react');
var mui = require('material-ui')
// Local Files
var utl = require('../utils/utl')
// Elements
var CircularProgress = mui.CircularProgress;
var styles = utl.styles.loading

var Loading = React.createClass({

  render () {
    return (
      <CircularProgress
        size={3}
        style={styles.position}
        mode="indeterminate"
      />
    );
  }

});

module.exports = Loading