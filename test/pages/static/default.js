var assert = require('assert')
var config = require('../../config')
var path = ''

describe('Default Page Test', function () {
  it('contains proper assets', function(done) {
    browser.url(config.url + path)
      .getText(".cardTitle")
      .then(function(value){
        assert(value.indexOf('Three Hearts Farm') !== -1)
      })
      .getText(".cardText")
      .then(function(value){
        assert(value.indexOf('vegetable farm located on the western edge') !== -1)
      })
      .call(done)
  })
  it('has a working menu bar', function(done) {
    browser.url(config.url + path)
      .click('.hamburgerMenu')
      .isVisible('.navRef')
      .then(function(isVisible){
        assert.strictEqual(true, isVisible)
      })
      .call(done);
  });
});
