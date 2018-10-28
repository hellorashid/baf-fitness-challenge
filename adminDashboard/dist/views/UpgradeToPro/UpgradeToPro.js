"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _CustomInput = require("../../components/CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Danger = require("../../components/Typography/Danger");

var _Danger2 = _interopRequireDefault(_Danger);

var _Success = require("../../components/Typography/Success");

var _Success2 = _interopRequireDefault(_Success);

var _Button = require("../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../components/Card/CardFooter");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components

// @material-ui/icons
var styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
  }
};
// @material-ui/core components


function UpgradeToPro(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    _GridContainer2.default,
    { justify: "center" },
    _react2.default.createElement(
      _GridItem2.default,
      { xs: 12, sm: 12, md: 8 },
      _react2.default.createElement(
        _Card2.default,
        null,
        _react2.default.createElement(
          _CardHeader2.default,
          { color: "info" },
          _react2.default.createElement(
            "h4",
            { className: classes.cardTitleWhite },
            "Add User Attempt"
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          _react2.default.createElement(
            _GridContainer2.default,
            null,
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(_CustomInput2.default, {
                labelText: "Email address",
                id: "email-address",
                formControlProps: {
                  fullWidth: true
                }
              })
            )
          ),
          _react2.default.createElement(
            _GridContainer2.default,
            null,
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(_CustomInput2.default, {
                labelText: "Event Name",
                id: "first-name",
                formControlProps: {
                  fullWidth: true
                }
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(_CustomInput2.default, {
                labelText: "Event Score",
                id: "last-name",
                formControlProps: {
                  fullWidth: true
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          _CardFooter2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { color: "primary" },
            "Submit Score"
          )
        )
      )
    )
  );
}

exports.default = (0, _withStyles2.default)(styles)(UpgradeToPro);