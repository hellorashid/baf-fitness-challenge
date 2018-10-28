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
      users: []
    }; // <- set up react state
    return _this;
  }

  _createClass(TableList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      /* Create reference to messages in Firebase Database */
      var messagesRef = _fire2.default.database().ref('users/');
      messagesRef.on('value', function (snapshot) {
        /* Update React state when message is added at Firebase Database */
        console.log(snapshot.val());
        var allUsers = Object.values(snapshot.val());

        var firstNames = allUsers.map(function (user) {

          var user_gender = 'Male';
          if (user.gender == 1) {
            user_gender = 'Female';
          }
          var userInfo = [user.first_name, user.last_name, user.overall, user_gender];
          return userInfo;
        });
        _this2.setState({ users: firstNames });
        // let message = { text: snapshot.val(), id: snapshot.key };
        // this.setState({ users: [message].concat(this.state.messages) });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;

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
                "Fitness Challenge Users"
              ),
              _react2.default.createElement(
                "p",
                { className: classes.cardCategoryWhite },
                "Total users for Fitness Challenge 2018"
              )
            ),
            _react2.default.createElement(
              _CardBody2.default,
              null,
              _react2.default.createElement(
                _Button2.default,
                { className: classes.button,
                  onClick: function onClick() {
                    console.log(Object.values(_this3.state.users));
                  }
                },
                "Default"
              ),
              _react2.default.createElement(_Table2.default, {
                tableHeaderColor: "primary",
                tableHead: ["First Name", "Last Name", "Overall", "Gender"],
                tableData: this.state.users
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