var assert = require('assert')
var config = require('../../config')
var path = "/#/contact"

describe('Contact Page Test', function() {
  it('contains proper assets', function(done) {
    browser.url(config.url + path)
      .getText(".cardTitle")
      .then(function(value){
        assert(value.indexOf('Contact') !== -1)
      })
      .getText(".cardText")
      .then(function(value){
        assert(value.indexOf('threeheartsfarmmt@gmail.com') !== -1)
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
  after(function(done){
    browser.end(done)
  })
});
