"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Snackbar = require("@material-ui/core/Snackbar");

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _snackbarContentStyle = require("../../assets/jss/material-dashboard-react/components/snackbarContentStyle");

var _snackbarContentStyle2 = _interopRequireDefault(_snackbarContentStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// @material-ui/icons

// core components


function Snackbar(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      message = props.message,
      color = props.color,
      close = props.close,
      icon = props.icon,
      place = props.place,
      open = props.open;

  var action = [];
  var messageClasses = (0, _classnames2.default)(_defineProperty({}, classes.iconMessage, icon !== undefined));
  if (close !== undefined) {
    action = [_react2.default.createElement(
      _IconButton2.default,
      {
        className: classes.iconButton,
        key: "close",
        "aria-label": "Close",
        color: "inherit",
        onClick: function onClick() {
          return props.closeNotification();
        }
      },
      _react2.default.createElement(_Close2.default, { className: classes.close })
    )];
  }
  return _react2.default.createElement(_Snackbar2.default, {
    anchorOrigin: {
      vertical: place.indexOf("t") === -1 ? "bottom" : "top",
      horizontal: place.indexOf("l") !== -1 ? "left" : place.indexOf("c") !== -1 ? "center" : "right"
    },
    open: open,
    message: _react2.default.createElement(
      "div",
      null,
      icon !== undefined ? _react2.default.createElement(props.icon, { className: classes.icon }) : null,
      _react2.default.createElement(
        "span",
        { className: messageClasses },
        message
      )
    ),
    action: action,
    ContentProps: {
      classes: {
        root: classes.root + " " + classes[color],
        message: classes.message
      }
    }
  });
}

Snackbar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  message: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: _propTypes2.default.bool,
  icon: _propTypes2.default.func,
  place: _propTypes2.default.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
  open: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_snackbarContentStyle2.default)(Snackbar);