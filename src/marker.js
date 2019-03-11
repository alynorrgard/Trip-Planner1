const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

function createMarker(type, coordinates) {
    const marker = document.createElement('div');
    marker.style.width = "32px";
    marker.style.height = "39px";

    if (type === 'activity') {
        marker.style.backgroundImage = `url(${iconURLs.activities})`;
    } else if (type === 'hotel') {
        marker.style.backgroundImage = `url(${iconURLs.hotels})`;
    } else {
        marker.style.backgroundImage = `url(${iconURLs.restaurants})`;
    }

    return new mapboxgl.Marker(marker).setLngLat(coordinates);
}

module.exports = createMarker;