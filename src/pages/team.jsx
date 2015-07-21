var React = require('react');
var Constants = require('../utils/constants');
var bios = require('../utils/teamBios');
var mui = require('material-ui');
var Paper = mui.Paper;
var CardTitle = mui.CardTitle;
var TeamCard = require('../components/teamCard')

var Team = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: Constants.themeManager
    };
  },
  render () {
    return <Paper style={{ width: '90%', margin: 'auto' }}>
      <CardTitle title="Team" subtitle="The ones gettin' the work done"/>
      <div className='row'>
        <div className='col span-6-t'>
          <TeamCard {...bios.betsyHicks}/>
        </div>
        <div className='col span-6-t'>
          <TeamCard {...bios.karenPage}/>
        </div>
      </div>
    </Paper>
  },
});

module.exports = Team;
