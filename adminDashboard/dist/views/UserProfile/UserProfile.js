"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _CustomInput = require("../../components/CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Button = require("../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardAvatar = require("../../components/Card/CardAvatar");

var _CardAvatar2 = _interopRequireDefault(_CardAvatar);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../components/Card/CardFooter");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _marc = require("../../assets/img/faces/marc.jpg");

var _marc2 = _interopRequireDefault(_marc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components

// @material-ui/core components
var styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _GridContainer2.default,
      null,
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 8 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "primary" },
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitleWhite },
              "Edit Profile"
            ),
            _react2.default.createElement("p", { className: classes.cardCategoryWhite })
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
                  labelText: "First Name",
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
                  labelText: "Last Name",
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
              "Update Profile"
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 4 },
        _react2.default.createElement(
          _Card2.default,
          { profile: true },
          _react2.default.createElement(
            _CardAvatar2.default,
            { profile: true },
            _react2.default.createElement(
              "a",
              { href: "#pablo", onClick: function onClick(e) {
                  return e.preventDefault();
                } },
              _react2.default.createElement("img", { src: _marc2.default, alt: "..." })
            )
          ),
          _react2.default.createElement(
            _CardBody2.default,
            { profile: true },
            _react2.default.createElement(
              "h6",
              { className: classes.cardCategory },
              "Ron Weasley"
            ),
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "ron@nyu.edu"
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: "primary", round: true },
              "26"
            )
          )
        )
      )
    )
  );
}

exports.default = (0, _withStyles2.default)(styles)(UserProfile);