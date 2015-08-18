var validator = {
  Email (email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!re.test(email)) {
      return { error: 'Valid email required' }
    } else {
      return email
    }
  },
  Name (name) {
    if (name === '' || name.length < 4) {
      return { error: 'Name required' }
    } else if (name.split(' ').length < 2) {
      return { error: 'Full name required'}
    } else {
      return name
    }
  },
  Phone (phone) {
    var re = /^\(?(\d{3})\)?[- .]?(\d{3})[- .]?(\d{4})$/
    if (!re.test(phone)) {
      return { error: 'Valid US phone number required' }
    } else {
      return phone
    }
  },
  BusinessName (businessName) {
    if (businessName === '' || businessName.length < 4) {
      return { error: 'Business name required'}
    } else {
      return businessName
    }
  },
  DeliveryInstructions (deliveryInstructions) {
    return deliveryInstructions
  },
  Address (address) {
    if (address === '' || address.split(' ').length < 3 || !address.includes('\n') ) {
      return { error: 'Please enter a two line address with city and state in the second line'}
    } else {
      return address
    }
  }
}

module.exports = validator
