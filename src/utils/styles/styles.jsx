// SvgIcons
var actionAccountCircle = require('./components/svgIcons/actionAccountCircle');
var communicationEmail = require('./components/svgIcons/communicationEmail');
var communicationPhone = require('./components/svgIcons/communicationPhone');
var communicationVpnKey = require('./components/svgIcons/communicationVpnKey');
var navigationArrowBack = require('./components/svgIcons/navigationArrowBack');
var navigationMenu = require('./components/svgIcons/navigationMenu');
// Components
var articleLink = require('./components/articleLink');
var blogPost = require('./components/blogPost');
var footer = require('./components/footer');
var leftNavBar = require('./components/leftNavBar');
var loading = require('./components/loading');
var teamCard = require('./components/teamCard');
// StaticPages
var about = require('./pages/static/about');
var defaultPage = require('./pages/static/default');
var contact = require('./pages/static/contact');
var team = require('./pages/static/team');
// Pages
var blog = require('./pages/blog');
var staticPages = require('./pages/staticPages');
var storefront = require('./pages/storefront');
var userPage = require('./pages/userPage');
// Tiny Responsive Grid
var trg = require('./trg');

var styles = {
  components: {
    svgIcons: {
      actionAccountCircle,
      communicationEmail,
      communicationPhone,
      communicationVpnKey,
      navigationArrowBack,
      navigationMenu,
    },
    articleLink,
    blogPost,
    footer,
    leftNavBar,
    loading,
    teamCard,
  },
  pages: {
    staticP: {
      about,
      defaultPage,
      contact,
      team,
    },
    blog,
    staticPages,
    storefront,
    userPage,
  },
  trg,
}
module.exports = styles
