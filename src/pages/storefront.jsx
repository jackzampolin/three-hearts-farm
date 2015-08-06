// Node Modules
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');
var _ = require('lodash');
// Local Files
var Actions = require('../actions');
var utl = require('../utils/utl');
var ItemsStore = require('../stores/items-store');
var Loading = require('../components/loading');
// Elements
var styles = utl.styles.pages.storefront;
var List = mui.List;
var ListItem = mui.ListItem
var ListDivider = mui.ListDivider
var Card = mui.Card;
var CardMedia = mui.CardMedia;
var CardHeader = mui.CardHeader;

var Storefront = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  mixins : [
    Reflux.listenTo(ItemsStore, '_onChange'),
  ],
  getInitialState () {
    return {
      items: null,
    }
  },
  componentWillMount () {
    return Actions.getItems()
  },
  render () {
    var items = this.state.items
    return <Card style={styles.container}>
      <CardMedia>
        <img src={ utl.imagePath + 'veggies_wallpaper_full.jpg'}/>
      </CardMedia>
      <CardHeader
        title={"Storefront - Our Availability Today"}
        subtitle={"Please Click Arrows to Display Inventory"} />
      <List style={styles.listPadding} subtitle={"store"}>
        { items ? this._renderStore() : <Loading /> }
      </List>
    </Card>
  },
  _onChange (event, items) {
    this.setState({ items })
  },
  _renderStore () {
    var items = this.state.items
    return items.map(function(item){
      return <ListItem primaryText={item.category + " " + item.itemName + " " + item.subItemName + " " + item.quantity + " " + item.units}/>
    })
  },

});

module.exports = Storefront;
