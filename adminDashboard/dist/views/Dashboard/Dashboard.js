"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactChartist = require("react-chartist");

var _reactChartist2 = _interopRequireDefault(_reactChartist);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Store = require("@material-ui/icons/Store");

var _Store2 = _interopRequireDefault(_Store);

var _Warning = require("@material-ui/icons/Warning");

var _Warning2 = _interopRequireDefault(_Warning);

var _DateRange = require("@material-ui/icons/DateRange");

var _DateRange2 = _interopRequireDefault(_DateRange);

var _LocalOffer = require("@material-ui/icons/LocalOffer");

var _LocalOffer2 = _interopRequireDefault(_LocalOffer);

var _Update = require("@material-ui/icons/Update");

var _Update2 = _interopRequireDefault(_Update);

var _ArrowUpward = require("@material-ui/icons/ArrowUpward");

var _ArrowUpward2 = _interopRequireDefault(_ArrowUpward);

var _AccessTime = require("@material-ui/icons/AccessTime");

var _AccessTime2 = _interopRequireDefault(_AccessTime);

var _Accessibility = require("@material-ui/icons/Accessibility");

var _Accessibility2 = _interopRequireDefault(_Accessibility);

var _BugReport = require("@material-ui/icons/BugReport");

var _BugReport2 = _interopRequireDefault(_BugReport);

var _Code = require("@material-ui/icons/Code");

var _Code2 = _interopRequireDefault(_Code);

var _Cloud = require("@material-ui/icons/Cloud");

var _Cloud2 = _interopRequireDefault(_Cloud);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Table = require("../../components/Table/Table");

var _Table2 = _interopRequireDefault(_Table);

var _Tasks = require("../../components/Tasks/Tasks");

var _Tasks2 = _interopRequireDefault(_Tasks);

var _CustomTabs = require("../../components/CustomTabs/CustomTabs");

var _CustomTabs2 = _interopRequireDefault(_CustomTabs);

var _Danger = require("../../components/Typography/Danger");

var _Danger2 = _interopRequireDefault(_Danger);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardIcon = require("../../components/Card/CardIcon");

var _CardIcon2 = _interopRequireDefault(_CardIcon);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../components/Card/CardFooter");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _general = require("../../variables/general");

var _fire = require("../../fire.js");

var _fire2 = _interopRequireDefault(_fire);

var _charts = require("../../variables/charts");

var _dashboardStyle = require("../../assets/jss/material-dashboard-react/views/dashboardStyle");

var _dashboardStyle2 = _interopRequireDefault(_dashboardStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// react plugin for creating charts

// @material-ui/core

// @material-ui/icons

// core components


var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 0,
      leadersMale: [],
      leadersFemale: [],
      male1: [],
      male2: [],
      male3: [],
      female1: [],
      female2: [],
      female3: []

    }, _this.handleChange = function (event, value) {
      _this.setState({ value: value });
    }, _this.handleChangeIndex = function (index) {
      _this.setState({ value: index });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dashboard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      /* Create reference to messages in Firebase Database */
      var messagesRef = _fire2.default.database().ref('users/');
      messagesRef.on('value', function (snapshot) {
        /* Update React state when message is added at Firebase Database */
        console.log(snapshot.val());
        var allUsers = Object.values(snapshot.val());

        var allMales = allUsers.filter(function (user) {
          return user.gender === 0;
        });
        var allFemales = allUsers.filter(function (user) {
          return user.gender === 1;
        });

        console.log("Males", allMales);
        console.log("Females", allFemales);

        allMales.sort(function (a, b) {
          return b.overall - a.overall;
        });

        allFemales.sort(function (a, b) {
          return b.overall - a.overall;
        });

        _this2.setState({ leadersMale: allMales });
        _this2.setState({ leadersFemale: allFemales });

        // this.state.leadersMale[0].first_name, 

        var male_one = ['1', allMales[0].first_name, allMales[0].last_name, allMales[0].overall.toString()];
        var male_two = ['1', allMales[1].first_name, allMales[1].last_name, allMales[1].overall.toString()];
        var male_three = ['1', allMales[2].first_name, allMales[2].last_name, allMales[2].overall.toString()];

        _this2.setState({ male1: male_one });
        _this2.setState({ male2: male_two });
        _this2.setState({ male3: male_three });

        //Females
        var female_one = ['1', allFemales[0].first_name, allFemales[0].last_name, allFemales[0].overall.toString()];
        var female_two = ['2', allFemales[1].first_name, allFemales[1].last_name, allFemales[1].overall.toString()];
        var female_three = ['3', allFemales[2].first_name, allFemales[2].last_name, allFemales[2].overall.toString()];

        _this2.setState({ female1: female_one });
        _this2.setState({ female2: female_two });
        _this2.setState({ female3: female_three });

        console.log("😎", _this2.state.male1);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      // let firstNames = allUsers.map(function (user) {
      //   let user_gender = 'Male'
      //   if (user.gender == 1) { 
      //     user_gender = 'Female'
      //   }

      //   let userInfo = [ 
      //     user.first_name, 
      //     user.last_name, 
      //     user.overall,
      //     user_gender,
      //   ]
      //   return userInfo
      // });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _GridContainer2.default,
          null,
          _react2.default.createElement(
            _GridItem2.default,
            { xs: 12, sm: 12, md: 4 },
            _react2.default.createElement(
              _Card2.default,
              { chart: true },
              _react2.default.createElement(
                _CardHeader2.default,
                { color: "success" },
                _react2.default.createElement(_reactChartist2.default, {
                  className: "ct-chart",
                  data: _charts.dailySalesChart.data,
                  type: "Line",
                  options: _charts.dailySalesChart.options,
                  listener: _charts.dailySalesChart.animation
                })
              ),
              _react2.default.createElement(
                _CardBody2.default,
                null,
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitle },
                  "Daily Attempts"
                ),
                _react2.default.createElement(
                  "p",
                  { className: classes.cardCategory },
                  _react2.default.createElement(
                    "span",
                    { className: classes.successText },
                    _react2.default.createElement(_ArrowUpward2.default, { className: classes.upArrowCardCategory }),
                    " 55%"
                  ),
                  " ",
                  "increase in attempts."
                )
              ),
              _react2.default.createElement(
                _CardFooter2.default,
                { chart: true },
                _react2.default.createElement(
                  "div",
                  { className: classes.stats },
                  _react2.default.createElement(_AccessTime2.default, null),
                  " updated 4 minutes ago"
                )
              )
            )
          ),
          _react2.default.createElement(
            _GridItem2.default,
            { xs: 12, sm: 12, md: 4 },
            _react2.default.createElement(
              _Card2.default,
              { chart: true },
              _react2.default.createElement(
                _CardHeader2.default,
                { color: "warning" },
                _react2.default.createElement(_reactChartist2.default, {
                  className: "ct-chart",
                  data: _charts.emailsSubscriptionChart.data,
                  type: "Bar",
                  options: _charts.emailsSubscriptionChart.options,
                  responsiveOptions: _charts.emailsSubscriptionChart.responsiveOptions,
                  listener: _charts.emailsSubscriptionChart.animation
                })
              ),
              _react2.default.createElement(
                _CardBody2.default,
                null,
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitle },
                  "Total Users"
                ),
                _react2.default.createElement(
                  "p",
                  { className: classes.cardCategory },
                  "Active users per day"
                )
              ),
              _react2.default.createElement(
                _CardFooter2.default,
                { chart: true },
                _react2.default.createElement(
                  "div",
                  { className: classes.stats },
                  _react2.default.createElement(_AccessTime2.default, null),
                  " last active users 22 minutes ago"
                )
              )
            )
          ),
          _react2.default.createElement(
            _GridItem2.default,
            { xs: 12, sm: 12, md: 4 },
            _react2.default.createElement(
              _Card2.default,
              { chart: true },
              _react2.default.createElement(
                _CardHeader2.default,
                { color: "danger" },
                _react2.default.createElement(_reactChartist2.default, {
                  className: "ct-chart",
                  data: _charts.completedTasksChart.data,
                  type: "Line",
                  options: _charts.completedTasksChart.options,
                  listener: _charts.completedTasksChart.animation
                })
              ),
              _react2.default.createElement(
                _CardBody2.default,
                null,
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitle },
                  "Attempts"
                ),
                _react2.default.createElement(
                  "p",
                  { className: classes.cardCategory },
                  "Active Attempts Times"
                )
              ),
              _react2.default.createElement(
                _CardFooter2.default,
                { chart: true },
                _react2.default.createElement(
                  "div",
                  { className: classes.stats },
                  _react2.default.createElement(_AccessTime2.default, null),
                  " last attempt 13 minutes ago"
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _GridContainer2.default,
          null,
          _react2.default.createElement(
            _GridItem2.default,
            { xs: 12, sm: 12, md: 6 },
            _react2.default.createElement(
              _Card2.default,
              null,
              _react2.default.createElement(
                _CardHeader2.default,
                { color: "primary" },
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitleWhite },
                  "Leaderboards"
                ),
                _react2.default.createElement(
                  "p",
                  { className: classes.cardCategoryWhite },
                  "Female"
                )
              ),
              _react2.default.createElement(
                _CardBody2.default,
                null,
                _react2.default.createElement(_Table2.default, {
                  tableHeaderColor: "warning",
                  tableHead: ["Rank", "Name", "email", "score"],
                  tableData: [this.state.female1, this.state.female2, this.state.female3]
                })
              )
            )
          ),
          _react2.default.createElement(
            _GridItem2.default,
            { xs: 12, sm: 12, md: 6 },
            _react2.default.createElement(
              _Card2.default,
              null,
              _react2.default.createElement(
                _CardHeader2.default,
                { color: "primary" },
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitleWhite },
                  "Male Leaderboards"
                ),
                _react2.default.createElement(
                  "p",
                  { className: classes.cardCategoryWhite },
                  "Overall"
                )
              ),
              _react2.default.createElement(
                _CardBody2.default,
                null,
                _react2.default.createElement(_Table2.default, {
                  tableHeaderColor: "warning",
                  tableHead: ["Rank", "Name", "email", "score"],
                  tableData: [this.state.male1, this.state.male2, this.state.male3]
                  // ['1', this.state.leadersMale[0].name, 'email', this.state.leadersMale[0].overall]
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

Dashboard.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_dashboardStyle2.default)(Dashboard);