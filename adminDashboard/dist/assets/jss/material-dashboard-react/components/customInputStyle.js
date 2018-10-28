"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react");

var customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: _materialDashboardReact.primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: _materialDashboardReact.dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: _materialDashboardReact.successColor
    }
  },
  labelRoot: _extends({}, _materialDashboardReact.defaultFont, {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857"
  }),
  labelRootError: {
    color: _materialDashboardReact.dangerColor
  },
  labelRootSuccess: {
    color: _materialDashboardReact.successColor
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  marginTop: {
    marginTop: "16px"
  },
  formControl: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative"
  }
};

exports.default = customInputStyle;