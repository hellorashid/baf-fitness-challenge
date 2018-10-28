"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

require("assets/css/material-dashboard-react.css?v=1.4.1");

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hist = (0, _history.createBrowserHistory)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.Router,
  { history: hist },
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _index2.default.map(function (prop, key) {
      return _react2.default.createElement(_reactRouterDom.Route, { path: prop.path, component: prop.component, key: key });
    })
  )
), document.getElementById("root"));