var assert = require('assert');
var utl = require('./testUtil')
var browser = require('gulp-webdriver/node_modules/webdriverio')
  .remote({
    desiredCapabilities: {
      browserName: 'chrome'
    }
  }).init()

describe('Title Page Test', function () {
  var url = utl.site
  it('contains proper assets', function(done) {
    browser.url(url)
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
    browser.url(url)
      .click('.hamburgerMenu')
      .isVisible('.navRef')
      .then(function(isVisible) {
        assert.strictEqual(true, isVisible)
      })
      .call(done);
  });
});

describe('About Page Test', function() {
  var url = utl.site + '/#/about'
  it('contains proper assets', function(done) {
    browser.url(url)
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
    browser.url(url)
      .click('.hamburgerMenu')
      .isVisible('.navRef')
      .then(function(isVisible) {
        assert.strictEqual(true, isVisible)
      })
      .call(done);
  });
});

describe('Team Page Test', function() {
  var url = utl.site + '/#/team'
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

describe('Contact Page Test', function() {
  var url = utl.site + '/#/contact'
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

