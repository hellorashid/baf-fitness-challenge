"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _FormControl = require("@material-ui/core/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Input = require("@material-ui/core/Input");

var _Input2 = _interopRequireDefault(_Input);

var _Clear = require("@material-ui/icons/Clear");

var _Clear2 = _interopRequireDefault(_Clear);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _customInputStyle = require("../../assets/jss/material-dashboard-react/components/customInputStyle");

var _customInputStyle2 = _interopRequireDefault(_customInputStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// @material-ui/icons

// core components


function CustomInput(_ref) {
  var _classNames, _classNames2;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      success = props.success;


  var labelClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _classNames2));
  var marginTop = (0, _classnames2.default)(_defineProperty({}, classes.marginTop, labelText === undefined));
  return _react2.default.createElement(
    _FormControl2.default,
    _extends({}, formControlProps, {
      className: formControlProps.className + " " + classes.formControl
    }),
    labelText !== undefined ? _react2.default.createElement(
      _InputLabel2.default,
      _extends({
        className: classes.labelRoot + labelClasses,
        htmlFor: id
      }, labelProps),
      labelText
    ) : null,
    _react2.default.createElement(_Input2.default, _extends({
      classes: {
        root: marginTop,
        disabled: classes.disabled,
        underline: underlineClasses
      },
      id: id
    }, inputProps)),
    error ? _react2.default.createElement(_Clear2.default, { className: classes.feedback + " " + classes.labelRootError }) : success ? _react2.default.createElement(_Check2.default, { className: classes.feedback + " " + classes.labelRootSuccess }) : null
  );
}

CustomInput.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  labelText: _propTypes2.default.node,
  labelProps: _propTypes2.default.object,
  id: _propTypes2.default.string,
  inputProps: _propTypes2.default.object,
  formControlProps: _propTypes2.default.object,
  error: _propTypes2.default.bool,
  success: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_customInputStyle2.default)(CustomInput);