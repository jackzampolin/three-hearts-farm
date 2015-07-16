var React = require('react');
var mui = require('material-ui')
var Paper = mui.Paper;

module.exports = React.createClass({

  render: function() {
    return (
      <Paper
        zDepth={1}
        style={{
          backgroundImage: 'url(assets/images/hoophouse.jpg)',
          height: '100%',
        }}
      >
      </Paper>
    );
  }

});

;