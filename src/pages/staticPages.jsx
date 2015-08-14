// Node Modules
var React = require('react');
var mui = require('material-ui');
// Local Files
var utl = require('../utils/utl')
var Footer = require('../components/footer')
var Default = require('./static/default')
// Elements
var styles = utl.styles.pages.staticPages
var CardMedia = mui.CardMedia;
var Card = mui.Card;

var staticPages = React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    return <div style={styles.appBarPadding} className="parallax">
      <div className="parallax__group">
        <div className="parallax__layer parallax__layer--back">
          <img style={styles.house} src={utl.staticPages.defaultPage.image} />
        </div>
        <div className="parallax__layer parallax__layer--base">
          <img style={styles.logo} src={utl.imagePath + '/logos/LOGO-straight.png'} />
          <p style={styles.text}>Three Hearts Farm is a Certifed Organic, diversified vegetable farm located on the western edge of Bozeman. Our mission at Three Hearts Farm is to contribute to a healthy food system in the Gallatin Valley. We’re here to provide individuals, families, restaurants and businesses with local, safe, organically grown, fresh food options. In addition to producing food for you, we’re here to provide education about the importance of local foods at all levels ranging from healthy nutrition to sound environmental practices.</p>
        </div>
      </div>
    </div>
    // return <Card>
    //   <CardMedia style={styles.appBarPadding}>
    //   </CardMedia>
    //     { this.props.children ? this.props.children : <Default /> }
    //   <Footer />
    // </Card>
  },
});

module.exports = staticPages;
