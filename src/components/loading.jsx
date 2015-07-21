var React = require('react');
var mui = require('material-ui')
var CircularProgress = mui.CircularProgress;

var Loading = React.createClass({

  render () {
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

module.exports = Loading