// Node Modules
var Reflux = require('reflux');
var Firebase = require('firebase');
var _ = require('lodash');

// Local Files
var utl = require('../utils/utl');
var Actions = require('../actions');

var ItemsStore = Reflux.createStore({

  listenables: [Actions],

  _itemsRef: new Firebase(utl.firebaseUrl + '/items'),
  getItems () {
    this._itemsRef.on('value', function(items){
      var payload = this._handleSnapshot(items.val())
      this._setItems(payload);
    }.bind(this));
  },
  _setItems (items) {
    var items = _.map(items, function(itemsDetail, category){
      return _.map(itemsDetail, function(item, itemName){
        if ( itemName !== 'categoryInformation' ){
          return _.map(item, function(subItemInfo, subItemName){
            itemInfo = subItemInfo
            itemInfo.category = category
            itemInfo.itemName = itemName
            itemInfo.subItemName = subItemName
            return itemInfo
          })
        }
      })
    })
    this._items = _.compact(_.flatten(items, true));
    this.trigger('change',this._items);
  },
  _handleSnapshot (items) {
    return items
  },
});

module.exports = ItemsStore

  // pushItems () {
  //   _.map(utl.seedItems, function(payload, category){
  //     this._itemsRef.child(category).set(payload)
  //   }.bind(this))
  // },
