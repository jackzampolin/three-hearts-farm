// Node Modules
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');
// Local Files
var Actions = require('../actions');
var utl = require('../utils/utl');
var UserStore = require('../stores/users-store');
var ActionAccountCircle = require('../components/svgIcons/actionAccountCircle');
var Footer = require('../components/footer');
// Elements
var styles = utl.styles.pages.userPage;
var trg = utl.styles.trg
var Paper = mui.Paper;
var Card = mui.Card;
var CardMedia = mui.CardMedia;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var RaisedButton = mui.RaisedButton;
var TextField = mui.TextField;
var Avatar = mui.Avatar;

var UserPage = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  mixins : [
    React.addons.LinkedStateMixin,
    Reflux.listenTo(UserStore, '_onChange'),
  ],
  getInitialState () {
    return {
      user: null,
    }
  },
  componentWillMount () {
    Actions.getCurrentUser()
  },
  render () {
    var user = this.state.user
    return <Paper style={styles.container}>
      <Card>
        <CardMedia>
          <img src={utl.imagePath + 'seedlings.jpg'}/>
        </CardMedia>
        { user ? this._profile() : this._login() }
      </Card>
      <Footer />
    </Paper>
  },
  _login () {
    return <div style={styles.warningText}>
      Please login
    </div>
  },
  _handleNameChange (event) {
    var name = utl.validator.Name(event.target.value)
    if (typeof name === 'string') {
      this._userRef.update({ name })
    } else {
      this.refs.Name.setErrorText(name.error)
    }
  },
  _handleEmailChange (event) {
    var email = utl.validator.Email(event.target.value)
    if (typeof email === 'string') {
      this._userRef.update({ email })
    } else {
      this.refs.Email.setErrorText(email.error)
    }
  },
  _handleOfficePhoneChange (event) {
    var officePhone = utl.validator.Phone(event.target.value)
    if (typeof officePhone === 'string') {
      this._userRef.update({ officePhone })
    } else {
      this.refs.officePhone.setErrorText(officePhone.error)
    }
  },
  _handlePersonalPhoneChange (event) {
    var personalPhone = utl.validator.Phone(event.target.value)
    if (typeof personalPhone === 'string') {
      this._userRef.update({ personalPhone })
    } else {
      this.refs.personalPhone.setErrorText(personalPhone.error)
    }
  },
  _handleBusinessNameChange (event) {
    var businessName = utl.validator.BusinessName(event.target.value)
    if (typeof businessName === 'string') {
      this._userRef.update({ businessName })
    } else {
      this.refs.businessName.setErrorText(businessName.error)
    }
  },
  _handleDeliveryInstructionsChange (event) {
    var deliveryInstructions = utl.validator.DeliveryInstructions(event.target.value)
    if (typeof deliveryInstructions === 'string') {
      this._userRef.update({ deliveryInstructions })
    } else {
      this.refs.deliveryInstructions.setErrorText(deliveryInstructions.error)
    }
  },
  _handleAddressChange (event) {
    var address = utl.validator.Address(event.target.value)
    if (typeof address === 'string') {
      this._userRef.update({ address })
    } else {
      this.refs.address.setErrorText(address.error)
    }
  },
  _profile () {
    var user = this.state.user
    this._userRef = new Firebase(utl.firebaseUrl + 'users/' + user.uid)
    return <div style={styles.bottomPadding} className={trg.row}>
      <CardHeader
        avatar={<Avatar src={user.profileImageURL}/>}
        title={user.name}
        subtitle={ user.businessName ? user.businessName : 'Business Name'} />
      <div style={styles.inputCols} className={trg.halfSpan}>
        <TextField
          ref="Name"
          hintText="Name"
          fullWidth={true}
          defaultValue={user.name}
          floatingLabelText="Name (required)"
          onChange={this._handleNameChange} />
        <TextField
          ref="Email"
          hintText="Email"
          fullWidth={true}
          defaultValue={user.email}
          floatingLabelText="Email (required)"
          onChange={this._handleEmailChange} />
        <TextField
          ref='officePhone'
          hintText="Office Phone"
          fullWidth={true}
          defaultValue={user.officePhone}
          floatingLabelText="Office Phone (required)"
          onChange={this._handleOfficePhoneChange} />
        <TextField
          ref="personalPhone"
          hintText="Personal Phone"
          fullWidth={true}
          defaultValue={user.personalPhone}
          floatingLabelText="Personal Phone"
          onChange={this._handlePersonalPhoneChange} />
      </div>
      <div style={styles.inputCols} className={trg.halfSpan}>
        <TextField
          ref="businessName"
          hintText="Business Name"
          fullWidth={true}
          defaultValue={user.businessName}
          floatingLabelText="Business Name (required)"
          onChange={this._handleBusinessNameChange} />
        <TextField
          ref='address'
          hintText="Delivery Address"
          fullWidth={true}
          defaultValue={user.address}
          multiLine={true}
          floatingLabelText="Delivery Address (required)"
          onChange={this._handleAddressChange} />
        <TextField
          hintText="Delivery Instructions"
          fullWidth={true}
          multiLine={true}
          defaultValue={user.deliveryInstructions}
          floatingLabelText="Delivery Instructions (optional)"
          onChange={this._handleDeliveryInstructionsChange} />
      </div>
    </div>
  },
  _onChange (event, user) {
    this.setState({ user })
  },
});

module.exports = UserPage;
