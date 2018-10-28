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


function Quote(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      text = props.text,
      author = props.author;

  return _react2.default.createElement(
    "blockquote",
    { className: classes.defaultFontStyle + " " + classes.quote },
    _react2.default.createElement(
      "p",
      { className: classes.quoteText },
      text
    ),
    _react2.default.createElement(
      "small",
      { className: classes.quoteAuthor },
      author
    )
  );
}

Quote.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  text: _propTypes2.default.node,
  author: _propTypes2.default.node
};

exports.default = (0, _withStyles2.default)(_typographyStyle2.default)(Quote);