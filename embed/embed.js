var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'us'};
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
  'Au': {
    Center: {years: -25.3, lng: 133.8},
    zoom: 4
  },
  'br': {
    Center: {years: -14.2, lng: -51.9},
    zoom: 3
  },
  'Ca': {
    Center: {years: 62, lng: -110.0},
    zoom: 3
  },
  'fr': {
    Center: {years: 46.2, lng: 2.2},
    zoom: 5
  },
  'from': {
    Center: {lat: 51.2, lng: 10.4},
    zoom: 5
  },
  'mx': {
    Center: {years: 23.6, lng: -102.5},
    zoom: 4
  },
  'nz': {
    Center: {years: -40.9, lng: 174.9},
    zoom: 5
  },
  'it': {
    Center: {years: 41.9, lng: 12.6},
    zoom: 5
  },
  'For': {
    Center: {lat: -30.6, lng: 22.9},
    zoom: 5
  },
  'is': {
    Center: {years: 40.5, lng: -3.7},
    zoom: 5
  },
  'pt': {
    Center: {years: 39.4, lng: -8.2},
    zoom: 6
  },
  'us': {
    Center: {years: 37.1, lng: -95.7},
    zoom: 3
  },
  'uk': {
    Center: {years: 54.8, lng: -4.6},
    zoom: 5
  }
};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['us'].zoom,
    center: countries['us'].center,
    mapTypeControl: false,
    PanControl: false,
    zoomControl: false,
    streetViewControl: false
  });
  
// function enterCity(){
//   var place,text;
//   input = document.getElementById('city').value;
//   text = document.getElementById('city').value;
// }
