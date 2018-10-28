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

var _ListItem = require("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _footerStyle = require("../../assets/jss/material-dashboard-react/components/footerStyle");

var _footerStyle2 = _interopRequireDefault(_footerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// core components


function Footer(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes;

  return _react2.default.createElement(
    "footer",
    { className: classes.footer },
    _react2.default.createElement(
      "div",
      { className: classes.container },
      _react2.default.createElement("div", { className: classes.left }),
      _react2.default.createElement(
        "p",
        { className: classes.right },
        _react2.default.createElement(
          "span",
          null,
          "\xA9 ",
          1900 + new Date().getYear(),
          " ",
          "NYU - Brooklyn Athletic Facility |",
          _react2.default.createElement(
            "a",
            { href: "https://rashidaziz.com", className: classes.a },
            "@helloRashid"
          )
        )
      )
    )
  );
}

Footer.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_footerStyle2.default)(Footer);