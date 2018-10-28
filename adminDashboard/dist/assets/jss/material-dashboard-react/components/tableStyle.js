"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react");

var tableStyle = function tableStyle(theme) {
  return {
    warningTableHeader: {
      color: _materialDashboardReact.warningColor
    },
    primaryTableHeader: {
      color: _materialDashboardReact.primaryColor
    },
    dangerTableHeader: {
      color: _materialDashboardReact.dangerColor
    },
    successTableHeader: {
      color: _materialDashboardReact.successColor
    },
    infoTableHeader: {
      color: _materialDashboardReact.infoColor
    },
    roseTableHeader: {
      color: _materialDashboardReact.roseColor
    },
    grayTableHeader: {
      color: _materialDashboardReact.grayColor
    },
    table: {
      marginBottom: "0",
      width: "100%",
      maxWidth: "100%",
      backgroundColor: "transparent",
      borderSpacing: "0",
      borderCollapse: "collapse"
    },
    tableHeadCell: _extends({
      color: "inherit"
    }, _materialDashboardReact.defaultFont, {
      fontSize: "1em"
    }),
    tableCell: _extends({}, _materialDashboardReact.defaultFont, {
      lineHeight: "1.42857143",
      padding: "12px 8px",
      verticalAlign: "middle"
    }),
    tableResponsive: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    }
  };
};

exports.default = tableStyle;