"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = require("../../material-dashboard-react");

var cardIconStyle = {
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "3px",
      backgroundColor: "#999",
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left"
    }
  },
  warningCardHeader: _materialDashboardReact.warningCardHeader,
  successCardHeader: _materialDashboardReact.successCardHeader,
  dangerCardHeader: _materialDashboardReact.dangerCardHeader,
  infoCardHeader: _materialDashboardReact.infoCardHeader,
  primaryCardHeader: _materialDashboardReact.primaryCardHeader,
  roseCardHeader: _materialDashboardReact.roseCardHeader
};

exports.default = cardIconStyle;