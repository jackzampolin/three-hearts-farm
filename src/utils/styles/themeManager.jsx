// This is the mui themeManager and my changes to the default color palette
// Docs here: http://callemall.github.io/material-ui/#/customization/themes
var mui = require('material-ui')

var themeManager = new mui.Styles.ThemeManager();

var Colors = mui.Styles.Colors;

themeManager.setPalette({
    primary1Color: Colors.greenA700,
    primary2Color: Colors.green400,
    primary3Color: Colors.green200,
    accent1Color: Colors.yellow500,
    accent2Color: Colors.yellow400,
    accent3Color: Colors.yellow200,
    textColor: Colors.grey900,
    canvasColor: Colors.brown50,
    borderColor: Colors.greenA700,
    disabledColor: Colors.greenA700
})

module.exports = themeManager
