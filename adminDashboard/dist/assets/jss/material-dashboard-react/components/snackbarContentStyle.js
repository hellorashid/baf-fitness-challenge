"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react");

var snackbarContentStyle = {
  root: _extends({}, _materialDashboardReact.defaultFont, {
    flexWrap: "unset",
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "3px",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  top20: {
    top: "20px"
  },
  top40: {
    top: "40px"
  },
  info: _extends({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, _materialDashboardReact.infoBoxShadow),
  success: _extends({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, _materialDashboardReact.successBoxShadow),
  warning: _extends({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, _materialDashboardReact.warningBoxShadow),
  danger: _extends({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, _materialDashboardReact.dangerBoxShadow),
  primary: _extends({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, _materialDashboardReact.primaryBoxShadow),
  rose: _extends({
    backgroundColor: "#eb3573",
    color: "#ffffff"
  }, _materialDashboardReact.roseBoxShadow),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "11px",
    height: "11px"
  },
  iconButton: {
    width: "24px",
    height: "24px"
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px"
  },
  infoIcon: {
    color: "#00d3ee"
  },
  successIcon: {
    color: "#5cb860"
  },
  warningIcon: {
    color: "#ffa21a"
  },
  dangerIcon: {
    color: "#f55a4e"
  },
  primaryIcon: {
    color: "#af2cc5"
  },
  roseIcon: {
    color: "#eb3573"
  },
  iconMessage: {
    paddingLeft: "50px",
    display: "block"
  }
};

exports.default = snackbarContentStyle;