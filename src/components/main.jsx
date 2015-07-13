var React = require('react');


module.exports = React.createClass({
  render () {
    return <div>
      {this.content()}
    </div>
  },
  content () {
    if(this.props.children) {
      return this.props.children
    } else {
      return <div>Rendering</div>
    }
  }
});