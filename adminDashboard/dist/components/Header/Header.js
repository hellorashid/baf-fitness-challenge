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

var _AppBar = require("@material-ui/core/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require("@material-ui/core/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Menu = require("@material-ui/icons/Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _HeaderLinks = require("./HeaderLinks");

var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);

var _Button = require("../CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _headerStyle = require("../../assets/jss/material-dashboard-react/components/headerStyle");

var _headerStyle2 = _interopRequireDefault(_headerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// @material-ui/icons

// core components


function Header(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  function makeBrand() {
    var name;
    props.routes.map(function (prop, key) {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  var classes = props.classes,
      color = props.color;

  var appBarClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], color));
  return _react2.default.createElement(
    _AppBar2.default,
    { className: classes.appBar + appBarClasses },
    _react2.default.createElement(
      _Toolbar2.default,
      { className: classes.container },
      _react2.default.createElement(
        "div",
        { className: classes.flex },
        _react2.default.createElement(
          "h3",
          { style: { fontWeight: 'bold' } },
          " ",
          makeBrand(),
          " "
        )
      ),
      _react2.default.createElement(
        _Hidden2.default,
        { smDown: true, implementation: "css" },
        _react2.default.createElement(_HeaderLinks2.default, null)
      ),
      _react2.default.createElement(
        _Hidden2.default,
        { mdUp: true, implementation: "css" },
        _react2.default.createElement(
          _IconButton2.default,
          {
            color: "inherit",
            "aria-label": "open drawer",
            onClick: props.handleDrawerToggle
          },
          _react2.default.createElement(_Menu2.default, null)
        )
      )
    )
  );
}

Header.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger"])
};

exports.default = (0, _withStyles2.default)(_headerStyle2.default)(Header);