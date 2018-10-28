"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react");

var typographyStyle = {
  defaultFontStyle: _extends({}, _materialDashboardReact.defaultFont, {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: _materialDashboardReact.primaryColor
  },
  infoText: {
    color: _materialDashboardReact.infoColor
  },
  successText: {
    color: _materialDashboardReact.successColor
  },
  warningText: {
    color: _materialDashboardReact.warningColor
  },
  dangerText: {
    color: _materialDashboardReact.dangerColor
  }
};

exports.default = typographyStyle;