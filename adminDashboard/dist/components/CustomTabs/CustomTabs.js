"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Tabs = require("@material-ui/core/Tabs");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require("@material-ui/core/Tab");

var _Tab2 = _interopRequireDefault(_Tab);

var _Card = require("../Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require("../Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = require("../Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _customTabsStyle = require("../../assets/jss/material-dashboard-react/components/customTabsStyle");

var _customTabsStyle2 = _interopRequireDefault(_customTabsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components


// material-ui components

// core components


var CustomTabs = function (_React$Component) {
  _inherits(CustomTabs, _React$Component);

  function CustomTabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomTabs.__proto__ || Object.getPrototypeOf(CustomTabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 0
    }, _this.handleChange = function (event, value) {
      _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomTabs, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          headerColor = _props.headerColor,
          plainTabs = _props.plainTabs,
          tabs = _props.tabs,
          title = _props.title,
          rtlActive = _props.rtlActive;

      var cardTitle = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
      return _react2.default.createElement(
        _Card2.default,
        { plain: plainTabs },
        _react2.default.createElement(
          _CardHeader2.default,
          { color: headerColor, plain: plainTabs },
          title !== undefined ? _react2.default.createElement(
            "div",
            { className: cardTitle },
            title
          ) : null,
          _react2.default.createElement(
            _Tabs2.default,
            {
              value: this.state.value,
              onChange: this.handleChange,
              classes: {
                root: classes.tabsRoot,
                indicator: classes.displayNone,
                scrollButtons: classes.displayNone
              },
              scrollable: true,
              scrollButtons: "auto"
            },
            tabs.map(function (prop, key) {
              var icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon: _react2.default.createElement(prop.tabIcon, null)
                };
              }
              return _react2.default.createElement(_Tab2.default, _extends({
                classes: {
                  root: classes.tabRootButton,
                  labelContainer: classes.tabLabelContainer,
                  label: classes.tabLabel,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper
                },
                key: key,
                label: prop.tabName
              }, icon));
            })
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          tabs.map(function (prop, key) {
            if (key === _this2.state.value) {
              return _react2.default.createElement(
                "div",
                { key: key },
                prop.tabContent
              );
            }
            return null;
          })
        )
      );
    }
  }]);

  return CustomTabs;
}(_react2.default.Component);

CustomTabs.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  headerColor: _propTypes2.default.oneOf(["warning", "success", "danger", "info", "primary"]),
  title: _propTypes2.default.string,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    tabName: _propTypes2.default.string.isRequired,
    tabIcon: _propTypes2.default.func,
    tabContent: _propTypes2.default.node.isRequired
  })),
  rtlActive: _propTypes2.default.bool,
  plainTabs: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_customTabsStyle2.default)(CustomTabs);