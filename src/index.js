const mapboxgl = require("mapbox-gl");
const createMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiYWx5bm9ycmdhcmQiLCJhIjoiY2p0NGo0a3gxMmlidTQ5cXhiMW5yN3Y1ZiJ9.PwsW-Y0_9sIES2OyepOzIA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const marker = document.createElement('div');
// marker.style.width = "32px";
// marker.style.height = "39px";
// marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);


const marker = createMarker('hotel', [-74.009, 40.705]);
marker.addTo(map);
