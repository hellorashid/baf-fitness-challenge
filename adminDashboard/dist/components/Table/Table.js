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

var _Table = require("@material-ui/core/Table");

var _Table2 = _interopRequireDefault(_Table);

var _TableHead = require("@material-ui/core/TableHead");

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = require("@material-ui/core/TableRow");

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableBody = require("@material-ui/core/TableBody");

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require("@material-ui/core/TableCell");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _tableStyle = require("../../assets/jss/material-dashboard-react/components/tableStyle");

var _tableStyle2 = _interopRequireDefault(_tableStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// core components


function CustomTable(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      tableHead = props.tableHead,
      tableData = props.tableData,
      tableHeaderColor = props.tableHeaderColor;

  return _react2.default.createElement(
    "div",
    { className: classes.tableResponsive },
    _react2.default.createElement(
      _Table2.default,
      { className: classes.table },
      tableHead !== undefined ? _react2.default.createElement(
        _TableHead2.default,
        { className: classes[tableHeaderColor + "TableHeader"] },
        _react2.default.createElement(
          _TableRow2.default,
          null,
          tableHead.map(function (prop, key) {
            return _react2.default.createElement(
              _TableCell2.default,
              {
                className: classes.tableCell + " " + classes.tableHeadCell,
                key: key
              },
              prop
            );
          })
        )
      ) : null,
      _react2.default.createElement(
        _TableBody2.default,
        null,
        tableData.map(function (prop, key) {
          return _react2.default.createElement(
            _TableRow2.default,
            { key: key },
            prop.map(function (prop, key) {
              return _react2.default.createElement(
                _TableCell2.default,
                { className: classes.tableCell, key: key },
                prop
              );
            })
          );
        })
      )
    )
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  tableHeaderColor: _propTypes2.default.oneOf(["warning", "primary", "danger", "success", "info", "rose", "gray"]),
  tableHead: _propTypes2.default.arrayOf(_propTypes2.default.string),
  tableData: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string))
};

exports.default = (0, _withStyles2.default)(_tableStyle2.default)(CustomTable);