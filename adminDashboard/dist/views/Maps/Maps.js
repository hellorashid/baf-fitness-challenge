"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = require("react-google-maps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CustomSkinMap = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: 13,
      defaultCenter: { lat: 40.748817, lng: -73.985428 },
      defaultOptions: {
        scrollwheel: false,
        zoomControl: true,
        styles: [{
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }]
        }, {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [{ hue: "#ff0000" }, { saturation: -100 }, { lightness: 99 }]
        }, {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }]
        }, {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }]
        }, {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }]
        }, {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }]
        }, {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }]
        }, { featureType: "poi", stylers: [{ visibility: "off" }] }, {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
        }, { featureType: "poi.park", stylers: [{ visibility: "on" }] }, {
          featureType: "poi.sports_complex",
          stylers: [{ visibility: "on" }]
        }, { featureType: "poi.medical", stylers: [{ visibility: "on" }] }, {
          featureType: "poi.business",
          stylers: [{ visibility: "simplified" }]
        }]
      }
    },
    _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: 40.748817, lng: -73.985428 } })
  );
}));

function Maps(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(CustomSkinMap, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE",
    loadingElement: _react2.default.createElement("div", { style: { height: "100%" } }),
    containerElement: _react2.default.createElement("div", { style: { height: "100vh" } }),
    mapElement: _react2.default.createElement("div", { style: { height: "100%" } })
  });
}

exports.default = Maps;