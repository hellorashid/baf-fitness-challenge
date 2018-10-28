"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _typographyStyle = require("../../assets/jss/material-dashboard-react/components/typographyStyle");

var _typographyStyle2 = _interopRequireDefault(_typographyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// core components


function Info(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      children = props.children;

  return _react2.default.createElement(
    "div",
    { className: classes.defaultFontStyle + " " + classes.infoText },
    children
  );
}

Info.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_typographyStyle2.default)(Info);