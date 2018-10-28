"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _MenuItem = require("@material-ui/core/MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuList = require("@material-ui/core/MenuList");

var _MenuList2 = _interopRequireDefault(_MenuList);

var _Grow = require("@material-ui/core/Grow");

var _Grow2 = _interopRequireDefault(_Grow);

var _Paper = require("@material-ui/core/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _ClickAwayListener = require("@material-ui/core/ClickAwayListener");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Popper = require("@material-ui/core/Popper");

var _Popper2 = _interopRequireDefault(_Popper);

var _Person = require("@material-ui/icons/Person");

var _Person2 = _interopRequireDefault(_Person);

var _Notifications = require("@material-ui/icons/Notifications");

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Dashboard = require("@material-ui/icons/Dashboard");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Search = require("@material-ui/icons/Search");

var _Search2 = _interopRequireDefault(_Search);

var _CustomInput = require("../CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Button = require("../CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _headerLinksStyle = require("../../assets/jss/material-dashboard-react/components/headerLinksStyle");

var _headerLinksStyle2 = _interopRequireDefault(_headerLinksStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components

// @material-ui/icons

// core components


var HeaderLinks = function (_React$Component) {
  _inherits(HeaderLinks, _React$Component);

  function HeaderLinks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderLinks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderLinks.__proto__ || Object.getPrototypeOf(HeaderLinks)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleToggle = function () {
      _this.setState(function (state) {
        return { open: !state.open };
      });
    }, _this.handleClose = function (event) {
      if (_this.anchorEl.contains(event.target)) {
        return;
      }

      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderLinks, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var open = this.state.open;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: classes.searchWrapper },
          _react2.default.createElement(_CustomInput2.default, {
            formControlProps: {
              className: classes.margin + " " + classes.search
            },
            inputProps: {
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search"
              }
            }
          }),
          _react2.default.createElement(
            _Button2.default,
            { color: "white", "aria-label": "edit", justIcon: true, round: true },
            _react2.default.createElement(_Search2.default, null)
          )
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            color: window.innerWidth > 959 ? "transparent" : "white",
            justIcon: window.innerWidth > 959,
            simple: !(window.innerWidth > 959),
            "aria-label": "Dashboard",
            className: classes.buttonLink
          },
          _react2.default.createElement(_Dashboard2.default, { className: classes.icons }),
          _react2.default.createElement(
            _Hidden2.default,
            { mdUp: true, implementation: "css" },
            _react2.default.createElement(
              "p",
              { className: classes.linkText },
              "Dashboard"
            )
          )
        )
      );
    }
  }]);

  return HeaderLinks;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_headerLinksStyle2.default)(HeaderLinks);