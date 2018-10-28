"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components


var style = {
  grid: {
    padding: "0 15px !important"
  }
};

function GridItem(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      children = props.children,
      rest = _objectWithoutProperties(props, ["classes", "children"]);

  return _react2.default.createElement(
    _Grid2.default,
    _extends({ item: true }, rest, { className: classes.grid }),
    children
  );
}

exports.default = (0, _withStyles2.default)(style)(GridItem);