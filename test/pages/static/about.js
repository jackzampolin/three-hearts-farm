var assert = require('assert')
var config = require('../../config')
var path = "/#/about"

describe('About Page Test', function() {
  it('contains proper assets', function(done) {
    browser.url(config.url + path)
      .getText(".cardTitle")
      .then(function(value){
        assert(value.indexOf('About') !== -1)
      })
      .getText(".cardText")
      .then(function(value){
        assert(value.indexOf('diversified vegetable farm between Bozeman') !== -1)
      })
      .call(done)
  })
  it('has a working menu bar', function(done) {
    browser.url(config.url + path)
      .click('.hamburgerMenu')
      .isVisible('.navRef')
      .then(function(isVisible) {
        assert.strictEqual(true, isVisible)
      })
      .call(done);
  });
});
