mapboxgl.accessToken =
'pk.eyJ1IjoiY2FybzY0NiIsImEiOiJjajZmZjNoeWkwZ251MzNvNjR0Z2I2N2ZoIn0.9fINM1ncez24bmNg7l_FNA'

// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [lon, lat] format
  center: [-77.034084, 38.909671],
  // initial zoom
  zoom: 14
});
