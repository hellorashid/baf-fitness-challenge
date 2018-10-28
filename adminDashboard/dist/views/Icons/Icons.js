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

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _iconsStyle = require("../../assets/jss/material-dashboard-react/views/iconsStyle");

var _iconsStyle2 = _interopRequireDefault(_iconsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components

// @material-ui/core components
function Icons(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    _GridContainer2.default,
    null,
    _react2.default.createElement(
      _GridItem2.default,
      { xs: 12, sm: 12, md: 12 },
      _react2.default.createElement(
        _Card2.default,
        { plain: true },
        _react2.default.createElement(
          _CardHeader2.default,
          { plain: true, color: "primary" },
          _react2.default.createElement(
            "h4",
            { className: classes.cardTitleWhite },
            "Material Design Icons"
          ),
          _react2.default.createElement(
            "p",
            { className: classes.cardCategoryWhite },
            "Handcrafted by our friends from",
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://design.google.com/icons/",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              "Google"
            )
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          _react2.default.createElement(
            _Hidden2.default,
            { only: ["sm", "xs"] },
            _react2.default.createElement(
              "iframe",
              {
                className: classes.iframe,
                src: "https://material.io/icons/",
                title: "Icons iframe"
              },
              _react2.default.createElement(
                "p",
                null,
                "Your browser does not support iframes."
              )
            )
          ),
          _react2.default.createElement(
            _Hidden2.default,
            { only: ["lg", "md"] },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                "h5",
                null,
                "The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the",
                _react2.default.createElement(
                  "a",
                  {
                    href: "https://design.google.com/icons/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  "Material Icons"
                )
              )
            )
          )
        )
      )
    )
  );
}

Icons.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_iconsStyle2.default)(Icons);