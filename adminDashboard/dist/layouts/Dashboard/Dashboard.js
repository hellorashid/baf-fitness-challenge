"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require("react-router-dom");

var _perfectScrollbar = require("perfect-scrollbar");

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

require("perfect-scrollbar/css/perfect-scrollbar.css");

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Header = require("../../components/Header/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require("../../components/Footer/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _Sidebar = require("../../components/Sidebar/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _dashboard = require("../../routes/dashboard");

var _dashboard2 = _interopRequireDefault(_dashboard);

var _dashboardStyle = require("../../assets/jss/material-dashboard-react/layouts/dashboardStyle");

var _dashboardStyle2 = _interopRequireDefault(_dashboardStyle);

var _purple_background = require("../../assets/img/purple_background.png");

var _purple_background2 = _interopRequireDefault(_purple_background);

var _iconLogo = require("../../assets/img/iconLogo.png");

var _iconLogo2 = _interopRequireDefault(_iconLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

// creates a beautiful scrollbar

// @material-ui/core components

// core components


// import image from "assets/img/sidebar-2.jpg";


var switchRoutes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _dashboard2.default.map(function (prop, key) {
    if (prop.redirect) return _react2.default.createElement(_reactRouterDom.Redirect, { from: prop.path, to: prop.to, key: key });
    return _react2.default.createElement(_reactRouterDom.Route, { path: prop.path, component: prop.component, key: key });
  })
);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleDrawerToggle = function () {
      _this.setState({ mobileOpen: !_this.state.mobileOpen });
    };

    _this.state = {
      mobileOpen: false
    };
    _this.resizeFunction = _this.resizeFunction.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "getRoute",
    value: function getRoute() {
      return this.props.location.pathname !== "/maps";
    }
  }, {
    key: "resizeFunction",
    value: function resizeFunction() {
      if (window.innerWidth >= 960) {
        this.setState({ mobileOpen: false });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator.platform.indexOf("Win") > -1) {
        var ps = new _perfectScrollbar2.default(this.refs.mainPanel);
      }
      window.addEventListener("resize", this.resizeFunction);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(e) {
      if (e.history.location.pathname !== e.location.pathname) {
        this.refs.mainPanel.scrollTop = 0;
        if (this.state.mobileOpen) {
          this.setState({ mobileOpen: false });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeFunction);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return _react2.default.createElement(
        "div",
        { className: classes.wrapper },
        _react2.default.createElement(_Sidebar2.default, _extends({
          routes: _dashboard2.default,
          logoText: "Fitness Challenge",
          logo: _iconLogo2.default,
          image: _purple_background2.default,
          handleDrawerToggle: this.handleDrawerToggle,
          open: this.state.mobileOpen,
          color: "purple"
        }, rest)),
        _react2.default.createElement(
          "div",
          { className: classes.mainPanel, ref: "mainPanel" },
          _react2.default.createElement(_Header2.default, _extends({
            routes: _dashboard2.default,
            handleDrawerToggle: this.handleDrawerToggle
          }, rest)),
          this.getRoute() ? _react2.default.createElement(
            "div",
            { className: classes.content },
            _react2.default.createElement(
              "div",
              { className: classes.container },
              switchRoutes
            )
          ) : _react2.default.createElement(
            "div",
            { className: classes.map },
            switchRoutes
          ),
          this.getRoute() ? _react2.default.createElement(_Footer2.default, null) : null
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_dashboardStyle2.default)(App);