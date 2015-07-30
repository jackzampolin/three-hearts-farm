// Node Modules
var React = require('react');
var mui = require('material-ui');
// Local Files
var utl = require('../../utils/utl');
var TeamCard = require('../../components/teamCard')
// Elements
var styles = utl.styles.staticPages;
var trg = utl.styles.trg;
var Paper = mui.Paper;
var CardTitle = mui.CardTitle;

var Team = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    var assets = utl.staticPages.teamPage
    var bios = utl.teamBios
    debugger
    return <Paper style={styles.container}>
      <CardTitle
        className='cardTitle'
        title={assets.title}
        subtitle={assets.subtitle}/>
      <div className={trg.row}>
        <div className={trg.halfSpan}>
          <TeamCard {...bios.betsyHicks}/>
        </div>
        <div className={trg.halfSpan}>
          <TeamCard {...bios.karenPage}/>
        </div>
      </div>
    </Paper>
  },
});

module.exports = Team;
