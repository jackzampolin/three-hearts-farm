var React = require('react');
var Content = require('../components/content')
var Header = require('./header')
var Footer = require('./footer')

module.exports = React.createClass({
  places: [
    {name:'Login',link:'/login',key:'1'},
    {name:'Logout',link:'/logout',key:'2'},
    {name:'Home',link:'/home',key:'3'},
  ],
  render () {
    return <div>
      <Header places={this.places}/>
      {this.content()}
      <Footer />
    </div>
  },
  content () {
    if(this.props.children) {
      return this.props.children
    } else {
      return <Content />
    }
  }
});