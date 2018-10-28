"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Quote = require("../../components/Typography/Quote");

var _Quote2 = _interopRequireDefault(_Quote);

var _Muted = require("../../components/Typography/Muted");

var _Muted2 = _interopRequireDefault(_Muted);

var _Primary = require("../../components/Typography/Primary");

var _Primary2 = _interopRequireDefault(_Primary);

var _Info = require("../../components/Typography/Info");

var _Info2 = _interopRequireDefault(_Info);

var _Success = require("../../components/Typography/Success");

var _Success2 = _interopRequireDefault(_Success);

var _Warning = require("../../components/Typography/Warning");

var _Warning2 = _interopRequireDefault(_Warning);

var _Danger = require("../../components/Typography/Danger");

var _Danger2 = _interopRequireDefault(_Danger);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components
var style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
// @material-ui/core components

function TypographyPage(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _CardHeader2.default,
      { color: "primary" },
      _react2.default.createElement(
        "h4",
        { className: classes.cardTitleWhite },
        "Material Dashboard Heading"
      ),
      _react2.default.createElement(
        "p",
        { className: classes.cardCategoryWhite },
        "Created using Roboto Font Family"
      )
    ),
    _react2.default.createElement(
      _CardBody2.default,
      null,
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Header 1"
        ),
        _react2.default.createElement(
          "h1",
          null,
          "The Life of Material Dashboard"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Header 2"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "The Life of Material Dashboard"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Header 3"
        ),
        _react2.default.createElement(
          "h3",
          null,
          "The Life of Material Dashboard"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Header 4"
        ),
        _react2.default.createElement(
          "h4",
          null,
          "The Life of Material Dashboard"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Header 5"
        ),
        _react2.default.createElement(
          "h5",
          null,
          "The Life of Material Dashboard"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Header 6"
        ),
        _react2.default.createElement(
          "h6",
          null,
          "The Life of Material Dashboard"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Paragraph"
        ),
        _react2.default.createElement(
          "p",
          null,
          "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Quote"
        ),
        _react2.default.createElement(_Quote2.default, {
          text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
          author: " Kanye West, Musician"
        })
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Muted Text"
        ),
        _react2.default.createElement(
          _Muted2.default,
          null,
          "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Primary Text"
        ),
        _react2.default.createElement(
          _Primary2.default,
          null,
          "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Info Text"
        ),
        _react2.default.createElement(
          _Info2.default,
          null,
          "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Success Text"
        ),
        _react2.default.createElement(
          _Success2.default,
          null,
          "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Warning Text"
        ),
        _react2.default.createElement(
          _Warning2.default,
          null,
          "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Danger Text"
        ),
        _react2.default.createElement(
          _Danger2.default,
          null,
          "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.typo },
        _react2.default.createElement(
          "div",
          { className: classes.note },
          "Small Tag"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "Header with small subtitle",
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "small",
            null,
            "Use \"Small\" tag for the headers"
          )
        )
      )
    )
  );
}

exports.default = (0, _withStyles2.default)(style)(TypographyPage);