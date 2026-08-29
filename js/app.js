// app_v6c
// Aktivní lokality jsou zvýrazněny zelenou ikonou


const map = L.map("map");

L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }
).addTo(map);

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const defaultIcon = new L.Icon.Default();

const markers = [];
const markerData = [];
let personRouteLayer = null;
let personStartMarker = null;
let personEndMarker = null;

window.currentYear = window.currentYear || 1695;

const activeEvents = eventsFromStays || events;

function buildPopup(place) {

  const placeEvents = activePerformances.filter(
  ev =>
    ev.place === place.name &&
    ev.year === window.currentYear
  );

  const placePersons = persons.filter(
    p => p.place === place.name && p.year === window.currentYear
  );

  let html = `<h3>${place.name}</h3><p><b>Rok:</b> ${window.currentYear}</p>`;

  if (placeEvents.length > 0) {

    html += '<p style="color:red;"><b>Aktivní lokalita</b></p>';
    html += '<h4>Události</h4><ul>';

    placeEvents.forEach(ev => {
      let title = ev.play;

      if (window.selectedPlay && ev.play === window.selectedPlay) {
        title = '⭐ ' + title;
      }

      html += `<li>${title}</li>`;
    });

    html += '</ul>';
  }

  if (placePersons.length > 0) {
    html += '<h4>Osoby</h4><ul>';

    placePersons[0].persons.forEach(person => {
      html += `<li>${person}</li>`;
    });

    html += '</ul>';
  }

  return html;
}


function updateMarkerStyles() {

  markerData.forEach(item => {

    const placeName = item.place.name;

    const yearActive = activeEvents.some(
      ev =>
        ev.place === placeName &&
        ev.year === window.currentYear
    );

    if (!yearActive) {

      item.marker.setIcon(defaultIcon);
      return;

    }

    let active = true;

    if (window.selectedPlay) {

      active = active && activeEvents.some(
        ev =>
          ev.place === placeName &&
          ev.year === window.currentYear &&
          ev.play === window.selectedPlay
      );

    }

    if (window.selectedPerson) {

      active = active && persons.some(
        p =>
          p.place === placeName &&
          p.year === window.currentYear &&
          p.persons.includes(window.selectedPerson)
      );

    }

    item.marker.setIcon(
      active ? greenIcon : defaultIcon
    );

  });

}


geos.forEach(place => {

  const marker = L.marker([
    place.lat,
    place.lon
  ]).addTo(map);

  marker.bindPopup(buildPopup(place));

  markers.push(marker);
  markerData.push({ marker, place });
});

function updatePersonRoute() {

  if (personRouteLayer) {
    map.removeLayer(personRouteLayer);
    personRouteLayer = null;
  }

  if (personStartMarker) {
    map.removeLayer(personStartMarker);
    personStartMarker = null;
  }

  if (personEndMarker) {
    map.removeLayer(personEndMarker);
    personEndMarker = null;
  }

  if (!window.selectedPerson) {
    return;
  }

  const records = [];

  persons.forEach(p => {

    if (
      p.persons.includes(
        window.selectedPerson
      )
    ) {

      const geo = geos.find(
        g => g.name === p.place
      );

      if (geo) {

        records.push({
          year: p.year,
          lat: geo.lat,
          lon: geo.lon
        });

      }
    }

  });

  records.sort(
    (a, b) => a.year - b.year
  );

  if (records.length < 2) {
    return;
  }

  const points = records.map(
    r => [r.lat, r.lon]
  );

  personRouteLayer =
    L.polyline(
      points,
      {
        color: "purple",
        weight: 5,
        opacity: 0.8,
        dashArray: "10,8"
      }
    )
    .bindPopup(
      "Trasa osoby: " +
      window.selectedPerson
    )
    .addTo(map);

const first = records[0];
const last =
  records[records.length - 1];

personStartMarker =
  L.circleMarker(
    [first.lat, first.lon],
    {
      radius: 8,
      color: "green",
      fillColor: "green",
      fillOpacity: 1
    }
  )
  .bindPopup(
    "První doložený výskyt<br>" +
    first.year
  )
  .addTo(map);

personEndMarker =
  L.circleMarker(
    [last.lat, last.lon],
    {
      radius: 8,
      color: "red",
      fillColor: "red",
      fillOpacity: 1
    }
  )
  .bindPopup(
    "Poslední doložený výskyt<br>" +
    last.year
  )
  .addTo(map);

map.fitBounds(
  personRouteLayer.getBounds(),
  {
    padding: [50, 50]
  }
);

}


window.refreshMap = function() {

  markerData.forEach(item => {
    item.marker.setPopupContent(
      buildPopup(item.place)
    );
  });

  updateMarkerStyles();
  updatePersonRoute();
};

updateMarkerStyles();

const group = L.featureGroup(markers);
map.fitBounds(group.getBounds(), {
  padding: [30, 30]
});
