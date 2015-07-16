var React = require('react');
var mui = require('material-ui')
var CircularProgress = mui.CircularProgress;

module.exports = React.createClass({

  render: function() {
    return (
      <CircularProgress
        size={3}
        style={{
          paddingLeft: '40%',
          paddingTop: '12em',
        }}
        mode="indeterminate"
      />
    );
  }

});