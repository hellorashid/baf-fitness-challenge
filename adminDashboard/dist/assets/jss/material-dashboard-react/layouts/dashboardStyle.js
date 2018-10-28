"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appStyle = function appStyle(theme) {
  var _extends2;

  return {
    wrapper: {
      position: "relative",
      top: "0",
      height: "100vh"
    },
    mainPanel: _extends((_extends2 = {}, _defineProperty(_extends2, theme.breakpoints.up("md"), {
      width: "calc(100% - " + _materialDashboardReact.drawerWidth + "px)"
    }), _defineProperty(_extends2, "overflow", "auto"), _defineProperty(_extends2, "position", "relative"), _defineProperty(_extends2, "float", "right"), _extends2), _materialDashboardReact.transition, {
      maxHeight: "100%",
      width: "100%",
      overflowScrolling: "touch"
    }),
    content: {
      marginTop: "70px",
      padding: "30px 15px",
      minHeight: "calc(100vh - 123px)"
    },
    container: _materialDashboardReact.container,
    map: {
      marginTop: "70px"
    }
  };
};

exports.default = appStyle;