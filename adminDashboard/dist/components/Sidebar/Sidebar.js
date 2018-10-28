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

var _reactRouterDom = require("react-router-dom");

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Drawer = require("@material-ui/core/Drawer");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _ListItem = require("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require("@material-ui/core/ListItemIcon");

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require("@material-ui/core/ListItemText");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _HeaderLinks = require("../Header/HeaderLinks");

var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);

var _sidebarStyle = require("../../assets/jss/material-dashboard-react/components/sidebarStyle");

var _sidebarStyle2 = _interopRequireDefault(_sidebarStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// core components


var Sidebar = function Sidebar(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  var classes = props.classes,
      color = props.color,
      logo = props.logo,
      image = props.image,
      logoText = props.logoText,
      routes = props.routes;

  var links = _react2.default.createElement(
    _List2.default,
    { className: classes.list },
    routes.map(function (prop, key) {
      if (prop.redirect) return null;
      var activePro = " ";
      var listItemClasses;
      if (prop.path === "/upgrade-to-pro") {
        activePro = classes.activePro + " ";
        listItemClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], true));
      } else {
        listItemClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], activeRoute(prop.path)));
      }
      var whiteFontClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes.whiteFont, activeRoute(prop.path)));
      return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          to: prop.path,
          className: activePro + classes.item,
          activeClassName: "active",
          key: key
        },
        _react2.default.createElement(
          _ListItem2.default,
          { button: true, className: classes.itemLink + listItemClasses },
          _react2.default.createElement(
            _ListItemIcon2.default,
            { className: classes.itemIcon + whiteFontClasses },
            typeof prop.icon === "string" ? _react2.default.createElement(
              _Icon2.default,
              null,
              prop.icon
            ) : _react2.default.createElement(prop.icon, null)
          ),
          _react2.default.createElement(_ListItemText2.default, {
            primary: prop.sidebarName,
            className: classes.itemText + whiteFontClasses,
            disableTypography: true
          })
        )
      );
    })
  );
  var brand = _react2.default.createElement(
    "div",
    { className: classes.logo },
    _react2.default.createElement(
      "a",
      { href: "https://www.creative-tim.com", className: classes.logoLink },
      _react2.default.createElement(
        "div",
        { className: classes.logoImage },
        _react2.default.createElement("img", { src: logo, alt: "logo", className: classes.img })
      ),
      _react2.default.createElement("br", null),
      logoText
    )
  );
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _Hidden2.default,
      { mdUp: true, implementation: "css" },
      _react2.default.createElement(
        _Drawer2.default,
        {
          variant: "temporary",
          anchor: "right",
          open: props.open,
          classes: {
            paper: classes.drawerPaper
          },
          onClose: props.handleDrawerToggle,
          ModalProps: {
            keepMounted: true // Better open performance on mobile.
          }
        },
        brand,
        _react2.default.createElement(
          "div",
          { className: classes.sidebarWrapper },
          _react2.default.createElement(_HeaderLinks2.default, null),
          links
        ),
        image !== undefined ? _react2.default.createElement("div", {
          className: classes.background,
          style: { backgroundImage: "url(" + image + ")" }
        }) : null
      )
    ),
    _react2.default.createElement(
      _Hidden2.default,
      { smDown: true, implementation: "css" },
      _react2.default.createElement(
        _Drawer2.default,
        {
          anchor: "left",
          variant: "permanent",
          open: true,
          classes: {
            paper: classes.drawerPaper
          }
        },
        brand,
        _react2.default.createElement(
          "div",
          { className: classes.sidebarWrapper },
          links
        ),
        image !== undefined ? _react2.default.createElement("div", {
          className: classes.background,
          style: { backgroundImage: "url(" + image + ")" }
        }) : null
      )
    )
  );
};

Sidebar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_sidebarStyle2.default)(Sidebar);