"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react");

var headerStyle = function headerStyle(theme) {
  return {
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      position: "absolute",
      width: "100%",
      paddingTop: "10px",
      zIndex: "1029",
      color: "#555555",
      border: "0",
      borderRadius: "3px",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block"
    },
    container: _extends({}, _materialDashboardReact.container, {
      minHeight: "50px"
    }),
    flex: {
      flex: 1
    },
    title: _extends({}, _materialDashboardReact.defaultFont, {
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      margin: "0",
      "&:hover,&:focus": {
        background: "transparent"
      }
    }),
    appResponsive: {
      top: "8px"
    },
    primary: _extends({
      backgroundColor: _materialDashboardReact.primaryColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    info: _extends({
      backgroundColor: _materialDashboardReact.infoColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    success: _extends({
      backgroundColor: _materialDashboardReact.successColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    warning: _extends({
      backgroundColor: _materialDashboardReact.warningColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    danger: _extends({
      backgroundColor: _materialDashboardReact.dangerColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow)
  };
};

exports.default = headerStyle;