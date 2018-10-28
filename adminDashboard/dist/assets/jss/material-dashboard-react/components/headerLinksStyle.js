"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react");

var _dropdownStyle = require("../dropdownStyle");

var _dropdownStyle2 = _interopRequireDefault(_dropdownStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headerLinksStyle = function headerLinksStyle(theme) {
  var _notifications, _manager, _searchWrapper;

  return _extends({}, (0, _dropdownStyle2.default)(theme), {
    search: _defineProperty({
      "& > div": {
        marginTop: "0"
      }
    }, theme.breakpoints.down("sm"), {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: "#FFFFFF"
      }
    }),
    linkText: _extends({
      zIndex: "4"
    }, _materialDashboardReact.defaultFont, {
      fontSize: "14px",
      margin: "0px"
    }),
    buttonLink: _defineProperty({}, theme.breakpoints.down("sm"), {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }),
    searchButton: _defineProperty({}, theme.breakpoints.down("sm"), {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }),
    margin: {
      zIndex: "4",
      margin: "0"
    },
    searchIcon: {
      width: "17px",
      zIndex: "4"
    },
    notifications: (_notifications = {
      zIndex: "4"
    }, _defineProperty(_notifications, theme.breakpoints.up("md"), {
      position: "absolute",
      top: "2px",
      border: "1px solid #FFF",
      right: "4px",
      fontSize: "9px",
      background: _materialDashboardReact.dangerColor,
      color: "#FFFFFF",
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    }), _defineProperty(_notifications, theme.breakpoints.down("sm"), _extends({}, _materialDashboardReact.defaultFont, {
      fontSize: "14px",
      marginRight: "8px"
    })), _notifications),
    manager: (_manager = {}, _defineProperty(_manager, theme.breakpoints.down("sm"), {
      width: "100%"
    }), _defineProperty(_manager, "display", "inline-block"), _manager),
    searchWrapper: (_searchWrapper = {}, _defineProperty(_searchWrapper, theme.breakpoints.down("sm"), {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    }), _defineProperty(_searchWrapper, "display", "inline-block"), _searchWrapper)
  });
};

exports.default = headerLinksStyle;