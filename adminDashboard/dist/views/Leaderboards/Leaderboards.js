"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Table = require("../../components/Table/Table");

var _Table2 = _interopRequireDefault(_Table);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _Button = require("../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _fire = require("../../fire.js");

var _fire2 = _interopRequireDefault(_fire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components

// core components


var styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
// function TableList(props) {

var TableList = function (_React$Component) {
  _inherits(TableList, _React$Component);

  function TableList(props) {
    _classCallCheck(this, TableList);

    var _this = _possibleConstructorReturn(this, (TableList.__proto__ || Object.getPrototypeOf(TableList)).call(this, props));

    _this.state = {
      allUsers: {},
      burpeesFemale: [],
      burpeesMale: [],
      test: 'hi'
    }; // <- set up react state
    return _this;
  }

  _createClass(TableList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var leaderRef = _fire2.default.database().ref('leaderboard/burpees/female');
      leaderRef.orderByValue().on('value', function (snapshot) {

        var topFemales = Object.entries(snapshot.val()); // Convert to array 

        var burpeesFemale = topFemales.map(function (user) {

          var currentRef = _fire2.default.database().ref('users/' + user[0]);
          var userInfo = {};

          currentRef.once('value', function (snapshot) {
            userInfo.first_name = snapshot.val().first_name;
            userInfo.last_name = snapshot.val().last_name;
            userInfo.overall = snapshot.val().overall;

            // console.log('maybe', snapshot.val().first_name)
          });

          return [user[0], user[1], userInfo];
        });

        console.log('burpees: ', burpeesFemale);
        _this2.setState({ burpeesFemale: burpeesFemale });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          burpeesFemale = _state.burpeesFemale,
          test = _state.test;

      return _react2.default.createElement(
        _GridContainer2.default,
        null,
        _react2.default.createElement(
          _GridItem2.default,
          { xs: 12, sm: 12, md: 12 },
          _react2.default.createElement(
            _Card2.default,
            null,
            _react2.default.createElement(
              _CardHeader2.default,
              { color: "primary" },
              _react2.default.createElement(
                "h4",
                { className: classes.cardTitleWhite },
                "Burpees"
              )
            ),
            _react2.default.createElement(
              _CardBody2.default,
              null,
              _react2.default.createElement(
                "h4",
                null,
                " Female "
              ),
              _react2.default.createElement(_Table2.default, {
                tableHeaderColor: "primary",
                tableHead: ["First Name", "Last Name", "Score", "Overall"],
                tableData: [["Amanda", 'Benoitt', '11', '56'], ["Helen", 'Velez', '7', '87'], ["Maria", 'Mercado', '6', '79']]
              })
            )
          )
        )
      );
    }
  }]);

  return TableList;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(styles)(TableList);