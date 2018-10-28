"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dashboard = require("@material-ui/icons/Dashboard");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Dashboard3 = require("../views/Dashboard/Dashboard");

var _Dashboard4 = _interopRequireDefault(_Dashboard3);

var _Leaderboards = require("../views/Leaderboards/Leaderboards");

var _Leaderboards2 = _interopRequireDefault(_Leaderboards);

var _TableList = require("../views/TableList/TableList");

var _TableList2 = _interopRequireDefault(_TableList);

var _UpgradeToPro = require("../views/UpgradeToPro/UpgradeToPro");

var _UpgradeToPro2 = _interopRequireDefault(_UpgradeToPro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";

// import UserProfile from "views/UserProfile/UserProfile.jsx";

// import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
var dashboardRoutes = [{
  path: "/dashboard",
  sidebarName: "Dashboard",
  navbarName: "Material Dashboard",
  icon: _Dashboard2.default,
  component: _Dashboard4.default
}, {
  path: "/leaderboards",
  sidebarName: "Leaderboards",
  navbarName: "Leaderboards",
  icon: 'assessment',
  component: _Leaderboards2.default
}, {
  path: "/table",
  sidebarName: "Users",
  navbarName: "Users",
  icon: "person",
  component: _TableList2.default
}, {
  path: "/typography",
  sidebarName: "Add Attempt",
  navbarName: "Add Attempt",
  icon: 'add_circle',
  component: _UpgradeToPro2.default
},
// {
//   path: "/icons",
//   sidebarName: "Icons",
//   navbarName: "Icons",
//   icon: BubbleChart,
//   component: Icons
// },
// {
//   path: "/maps",
//   sidebarName: "Maps",
//   navbarName: "Map",
//   icon: LocationOn,
//   component: Maps
// },
// {
//   path: "/notifications",
//   sidebarName: "Notifications",
//   navbarName: "Notifications",
//   icon: Notifications,
//   component: NotificationsPage
// },
// {
//   path: "/upgrade-to-pro",
//   sidebarName: "Add Attempt",
//   navbarName: "Add Attempt",
//   icon: Unarchive,
//   component: UpgradeToPro
// },
{ redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }]; // @material-ui/icons
exports.default = dashboardRoutes;