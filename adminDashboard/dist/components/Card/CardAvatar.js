"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cardAvatarStyle = require("../../assets/jss/material-dashboard-react/components/cardAvatarStyle");

var _cardAvatarStyle2 = _interopRequireDefault(_cardAvatarStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons
// core components

function CardAvatar(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      children = props.children,
      className = props.className,
      plain = props.plain,
      profile = props.profile,
      rest = _objectWithoutProperties(props, ["classes", "children", "className", "plain", "profile"]);

  var cardAvatarClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardAvatar, true), _defineProperty(_classNames, classes.cardAvatarProfile, profile), _defineProperty(_classNames, classes.cardAvatarPlain, plain), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardAvatarClasses }, rest),
    children
  );
}

CardAvatar.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  profile: _propTypes2.default.bool,
  plain: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_cardAvatarStyle2.default)(CardAvatar);