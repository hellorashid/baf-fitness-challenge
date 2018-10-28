'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _secret = require('./secret.js');

var _secret2 = _interopRequireDefault(_secret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: _secret2.default.FIREBASE_KEY,
  authDomain: "fitnesschallenge-26de6.firebaseapp.com",
  databaseURL: "https://fitnesschallenge-26de6.firebaseio.com",
  projectId: "fitnesschallenge-26de6",
  storageBucket: "fitnesschallenge-26de6.appspot.com",
  messagingSenderId: "706151436086"
};

var fire = _firebase2.default.initializeApp(config);
exports.default = fire;