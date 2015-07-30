var test = require('../../testConfig.js')
var assert = test.assert
var url = test.url + "/#/contact"

describe('Contact Page Test', function() {
  it('contains proper assets', function(done) {
    browser.url(url)
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
    browser.url(url)
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
