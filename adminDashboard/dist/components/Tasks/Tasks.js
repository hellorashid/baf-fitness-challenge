"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Checkbox = require("@material-ui/core/Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Tooltip = require("@material-ui/core/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Table = require("@material-ui/core/Table");

var _Table2 = _interopRequireDefault(_Table);

var _TableRow = require("@material-ui/core/TableRow");

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableBody = require("@material-ui/core/TableBody");

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require("@material-ui/core/TableCell");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Edit = require("@material-ui/icons/Edit");

var _Edit2 = _interopRequireDefault(_Edit);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _tasksStyle = require("../../assets/jss/material-dashboard-react/components/tasksStyle");

var _tasksStyle2 = _interopRequireDefault(_tasksStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components

// @material-ui/icons

// core components


var Tasks = function (_React$Component) {
  _inherits(Tasks, _React$Component);

  function Tasks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tasks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tasks.__proto__ || Object.getPrototypeOf(Tasks)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checked: _this.props.checkedIndexes
    }, _this.handleToggle = function (value) {
      return function () {
        var checked = _this.state.checked;

        var currentIndex = checked.indexOf(value);
        var newChecked = [].concat(_toConsumableArray(checked));

        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }

        _this.setState({
          checked: newChecked
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tasks, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          tasksIndexes = _props.tasksIndexes,
          tasks = _props.tasks;

      return _react2.default.createElement(
        _Table2.default,
        { className: classes.table },
        _react2.default.createElement(
          _TableBody2.default,
          null,
          tasksIndexes.map(function (value) {
            return _react2.default.createElement(
              _TableRow2.default,
              { key: value, className: classes.tableRow },
              _react2.default.createElement(
                _TableCell2.default,
                { className: classes.tableCell },
                _react2.default.createElement(_Checkbox2.default, {
                  checked: _this2.state.checked.indexOf(value) !== -1,
                  tabIndex: -1,
                  onClick: _this2.handleToggle(value),
                  checkedIcon: _react2.default.createElement(_Check2.default, { className: classes.checkedIcon }),
                  icon: _react2.default.createElement(_Check2.default, { className: classes.uncheckedIcon }),
                  classes: {
                    checked: classes.checked
                  }
                })
              ),
              _react2.default.createElement(
                _TableCell2.default,
                { className: classes.tableCell },
                tasks[value]
              ),
              _react2.default.createElement(
                _TableCell2.default,
                { className: classes.tableActions },
                _react2.default.createElement(
                  _Tooltip2.default,
                  {
                    id: "tooltip-top",
                    title: "Edit Task",
                    placement: "top",
                    classes: { tooltip: classes.tooltip }
                  },
                  _react2.default.createElement(
                    _IconButton2.default,
                    {
                      "aria-label": "Edit",
                      className: classes.tableActionButton
                    },
                    _react2.default.createElement(_Edit2.default, {
                      className: classes.tableActionButtonIcon + " " + classes.edit
                    })
                  )
                ),
                _react2.default.createElement(
                  _Tooltip2.default,
                  {
                    id: "tooltip-top-start",
                    title: "Remove",
                    placement: "top",
                    classes: { tooltip: classes.tooltip }
                  },
                  _react2.default.createElement(
                    _IconButton2.default,
                    {
                      "aria-label": "Close",
                      className: classes.tableActionButton
                    },
                    _react2.default.createElement(_Close2.default, {
                      className: classes.tableActionButtonIcon + " " + classes.close
                    })
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return Tasks;
}(_react2.default.Component);

Tasks.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  tasksIndexes: _propTypes2.default.arrayOf(_propTypes2.default.number),
  tasks: _propTypes2.default.arrayOf(_propTypes2.default.node)
};

exports.default = (0, _withStyles2.default)(_tasksStyle2.default)(Tasks);