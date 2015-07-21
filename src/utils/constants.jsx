// Contains various constants used in the program
// ThemeManager stored here to facilitate custom
// themes.
var React = require('react')
var mui = require('material-ui');
var MenuItem = mui.MenuItem;
var FontIcon = mui.FontIcon;
var ThemeManager = new mui.Styles.ThemeManager();

var defaultPage = {
  image: '../assets/images/chard.jpg',
  text: 'Three Hearts Farm is a Certifed Organic, diversified vegetable farm located on the western edge of Bozeman. Our mission at Three Hearts Farm is to contribute to a healthy food system in the Gallatin Valley. We’re here to provide individuals, families, restaurants and businesses with local, safe, organically grown, fresh food options. In addition to producing food for you, we’re here to provide education about the importance of local foods at all levels ranging from healthy nutrition to sound environmental practices.',
};
var aboutPage = {
    image: '../assets/images/inside-hoophouse.jpg',
    text: 'Three Hearts Farm is a Certified Organic, diversified vegetable farm between Bozeman and Belgrade.  The farm is certified by the USDA as organic, and it follows more stringent, sustainable, organic growing practices in every aspect of its operations. Three Hearts in fact has sustainability as its overarching goal: it uses permaculture practices, grows its own manure, grows diversified crops, rotates crop, uses poultry for manure and pest control, sells all of produce within 150 miles of the farm.  Nothing but water is sprayed on the crops.'

};
var errorMessages = {
    LOGIN_REQUIRED: 'You have to login to do that.',
    INVALID_EMAIL: 'Invalid email address.',
    INVALID_PASSWORD: 'Invalid password.',
    INVALID_USER: 'User doesn\'t exist.',
    NO_USERNAME: 'You have to enter a username.',
    EMAIL_TAKEN: 'That email is taken.',
    USERNAME_TAKEN: 'That username is taken.',
    default: 'Something went wrong.'
};
var partners = [
  {
    name: "Huckleberry's",
    address: '3255 Technology Blvd',
    url: 'http://huckleberrysnaturalmarket.com/pages/locBoze.htm'
  },
  {
    name: 'Red Tractor Pizza',
    address: '1007 W Main St.',
    url: 'http://www.redtractorpizza.com/'
  },
  {
    name: 'Feed Café ',
    address: '1530 W Main St.',
    url: 'http://feedcafebozeman.com/'
  },
  {
    name: 'Damasco’s ',
    address: '90 W Madison Ave., Belgrade',
    url: 'http://damascos.net/'
  },
  {
    name: '14 North ',
    address: '14 N Church Ave.',
    url: 'http://www.14northrestaurant.com/'
  },
  {
    name: 'Open Range',
    address: '241 E Main St.',
    url: 'http://openrangemt.com/'
  },
  {
    name: 'Blackbird Kitchen',
    address: '140 E Main St.',
    url: 'http://blackbirdkitchen.com/'
  },
  {
    name: 'Sola Café',
    address: '290 W Kagy',
    url: 'http://www.solacafe.com/'
  }
];
var partnerLinks = partners.map(function(partner){
  return {
    type: MenuItem.Types.LINK,
    payload: partner.url,
    text: partner.name
  }
});
var leftMenuItems = [
    { route: '/', text: 'Home', iconClassName: 'material-icons', onTouchTap: this.handleMenuClick },
    { route: 'blog', text: 'Blog', onTouchTap: this.handleMenuClick },
    { route: 'about', text: 'About', onTouchTap: this.handleMenuClick },
    { route: 'contact', text: 'Contact', onTouchTap: this.handleMenuClick },
    { route: 'team', text: 'Team', onTouchTap: this.handleMenuClick },
    { type: MenuItem.Types.SUBHEADER, text: 'Partners' }
  ].concat(partnerLinks)
var Constants = {
    email: 'threeheartsfarmmt@gmail.com',
    phone: '406-600-8874',
    errorMessages: errorMessages,
    firebaseUrl: 'https://brewdoctor-react.firebaseio.com/',
    themeManager: ThemeManager,
    default: defaultPage,
    about: aboutPage,
    imagePath: './assets/images/',
    leftMenuItems: leftMenuItems,
};
module.exports = Constants;