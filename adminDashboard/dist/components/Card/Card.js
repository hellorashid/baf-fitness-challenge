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

var _cardStyle = require("../../assets/jss/material-dashboard-react/components/cardStyle");

var _cardStyle2 = _interopRequireDefault(_cardStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


function Card(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      plain = props.plain,
      profile = props.profile,
      chart = props.chart,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "plain", "profile", "chart"]);

  var cardClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.card, true), _defineProperty(_classNames, classes.cardPlain, plain), _defineProperty(_classNames, classes.cardProfile, profile), _defineProperty(_classNames, classes.cardChart, chart), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardClasses }, rest),
    children
  );
}

Card.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  plain: _propTypes2.default.bool,
  profile: _propTypes2.default.bool,
  chart: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_cardStyle2.default)(Card);