"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = require("../material-dashboard-react");

var checkboxAdnRadioStyle = {
  checked: {
    color: _materialDashboardReact.primaryColor + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  radio: {
    color: _materialDashboardReact.primaryColor + "!important"
  },
  radioChecked: {
    width: "20px",
    height: "20px",
    border: "1px solid " + _materialDashboardReact.primaryColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  }
};

exports.default = checkboxAdnRadioStyle;