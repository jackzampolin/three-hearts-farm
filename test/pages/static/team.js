var test = require('../../testConfig.js')
var assert = test.assert
var url = test.url + "/#/team"

describe('Team Page Test', function() {
  it('contains proper assets', function(done) {
    browser.url(url)
      .getText(".cardTitle")
      .then(function(value){
        assert(value.indexOf('Team') !== -1)
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
});
