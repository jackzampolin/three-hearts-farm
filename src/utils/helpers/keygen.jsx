var index = 0

var keygen = function (name) {
  return (name + '-' + index++).toString()
}

module.exports = keygen
