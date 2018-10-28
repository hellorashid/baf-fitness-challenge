"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _AddAlert = require("@material-ui/icons/AddAlert");

var _AddAlert2 = _interopRequireDefault(_AddAlert);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Button = require("../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _SnackbarContent = require("../../components/Snackbar/SnackbarContent");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _Snackbar = require("../../components/Snackbar/Snackbar");

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

// @material-ui/core components

// @material-ui/icons

// core components


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
  }
};

var Notifications = function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications(props) {
    _classCallCheck(this, Notifications);

    var _this = _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call(this, props));

    _this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false
    };
    _this.lertTimeout = null;
    return _this;
  }

  _createClass(Notifications, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearAlertTimeout();
    }
  }, {
    key: "clearAlertTimeout",
    value: function clearAlertTimeout() {
      if (this.alertTimeout !== null) {
        clearTimeout(this.alertTimeout);
      }
    }
  }, {
    key: "showNotification",
    value: function showNotification(place) {
      var x = [];
      x[place] = true;
      this.setState(x);
      this.clearAlertTimeout();
      this.alertTimeout = setTimeout(function () {
        x[place] = false;
        this.setState(x);
      }.bind(this), 6000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        _Card2.default,
        null,
        _react2.default.createElement(
          _CardHeader2.default,
          { color: "primary" },
          _react2.default.createElement(
            "h4",
            { className: classes.cardTitleWhite },
            "Notifications"
          ),
          _react2.default.createElement(
            "p",
            { className: classes.cardCategoryWhite },
            "Handcrafted by our friends from",
            " ",
            _react2.default.createElement(
              "a",
              { target: "_blank", href: "https://material-ui-next.com/" },
              "Material UI"
            ),
            " ",
            "and styled by",
            " ",
            _react2.default.createElement(
              "a",
              { target: "_blank", href: "https://www.creative-tim.com/" },
              "Creative Tim"
            ),
            ". Please checkout the",
            " ",
            _react2.default.createElement(
              "a",
              { href: "#pablo", target: "_blank" },
              "full documentation"
            ),
            "."
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
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                "h5",
                null,
                "Notifications Style"
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(_SnackbarContent2.default, { message: "This is a plain notification" }),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: "This is a notification with close button.",
                close: true
              }),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: "This is a notification with close button and icon.",
                close: true,
                icon: _AddAlert2.default
              }),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
                close: true,
                icon: _AddAlert2.default
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                "h5",
                null,
                "Notifications States"
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: 'INFO - This is a regular notification made with color="info"',
                close: true,
                color: "info"
              }),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: 'SUCCESS - This is a regular notification made with color="success"',
                close: true,
                color: "success"
              }),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: 'WARNING - This is a regular notification made with color="warning"',
                close: true,
                color: "warning"
              }),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: 'DANGER - This is a regular notification made with color="danger"',
                close: true,
                color: "danger"
              }),
              _react2.default.createElement(_SnackbarContent2.default, {
                message: 'PRIMARY - This is a regular notification made with color="primary"',
                close: true,
                color: "primary"
              })
            )
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            _GridContainer2.default,
            { justify: "center" },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6, style: { textAlign: "center" } },
              _react2.default.createElement(
                "h5",
                null,
                "Notifications Places",
                _react2.default.createElement(
                  "small",
                  null,
                  "Click to view notifications"
                )
              )
            )
          ),
          _react2.default.createElement(
            _GridContainer2.default,
            { justify: "center" },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 10, lg: 8 },
              _react2.default.createElement(
                _GridContainer2.default,
                null,
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 4 },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      fullWidth: true,
                      color: "primary",
                      onClick: function onClick() {
                        return _this2.showNotification("tl");
                      }
                    },
                    "Top Left"
                  ),
                  _react2.default.createElement(_Snackbar2.default, {
                    place: "tl",
                    color: "info",
                    icon: _AddAlert2.default,
                    message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                    open: this.state.tl,
                    closeNotification: function closeNotification() {
                      return _this2.setState({ tl: false });
                    },
                    close: true
                  })
                ),
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 4 },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      fullWidth: true,
                      color: "primary",
                      onClick: function onClick() {
                        return _this2.showNotification("tc");
                      }
                    },
                    "Top Center"
                  ),
                  _react2.default.createElement(_Snackbar2.default, {
                    place: "tc",
                    color: "info",
                    icon: _AddAlert2.default,
                    message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                    open: this.state.tc,
                    closeNotification: function closeNotification() {
                      return _this2.setState({ tc: false });
                    },
                    close: true
                  })
                ),
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 4 },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      fullWidth: true,
                      color: "primary",
                      onClick: function onClick() {
                        return _this2.showNotification("tr");
                      }
                    },
                    "Top Right"
                  ),
                  _react2.default.createElement(_Snackbar2.default, {
                    place: "tr",
                    color: "info",
                    icon: _AddAlert2.default,
                    message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                    open: this.state.tr,
                    closeNotification: function closeNotification() {
                      return _this2.setState({ tr: false });
                    },
                    close: true
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            _GridContainer2.default,
            { justify: "center" },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 10, lg: 8 },
              _react2.default.createElement(
                _GridContainer2.default,
                null,
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 4 },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      fullWidth: true,
                      color: "primary",
                      onClick: function onClick() {
                        return _this2.showNotification("bl");
                      }
                    },
                    "Bottom Left"
                  ),
                  _react2.default.createElement(_Snackbar2.default, {
                    place: "bl",
                    color: "info",
                    icon: _AddAlert2.default,
                    message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                    open: this.state.bl,
                    closeNotification: function closeNotification() {
                      return _this2.setState({ bl: false });
                    },
                    close: true
                  })
                ),
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 4 },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      fullWidth: true,
                      color: "primary",
                      onClick: function onClick() {
                        return _this2.showNotification("bc");
                      }
                    },
                    "Bottom Center"
                  ),
                  _react2.default.createElement(_Snackbar2.default, {
                    place: "bc",
                    color: "info",
                    icon: _AddAlert2.default,
                    message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                    open: this.state.bc,
                    closeNotification: function closeNotification() {
                      return _this2.setState({ bc: false });
                    },
                    close: true
                  })
                ),
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 4 },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      fullWidth: true,
                      color: "primary",
                      onClick: function onClick() {
                        return _this2.showNotification("br");
                      }
                    },
                    "Bottom Right"
                  ),
                  _react2.default.createElement(_Snackbar2.default, {
                    place: "br",
                    color: "info",
                    icon: _AddAlert2.default,
                    message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                    open: this.state.br,
                    closeNotification: function closeNotification() {
                      return _this2.setState({ br: false });
                    },
                    close: true
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Notifications;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(styles)(Notifications);