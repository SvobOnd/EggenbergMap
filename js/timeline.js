// timeline_v8
// Klikatelny itinerar osoby

const routeLayers = [];

routes.forEach(route => {
  const layer = L.polyline(route.points, {
    color: route.color,
    weight: 4,
    opacity: 0.8
  }).bindPopup(route.name);

  layer.routeYear = route.year;
  routeLayers.push(layer);
});

function updateRoutes(year) {
  routeLayers.forEach(layer => {
    if (map.hasLayer(layer)) map.removeLayer(layer);
    if (layer.routeYear === year) layer.addTo(map);
  });
}

function updateStats(year) {
  let filteredEvents = events.filter(ev => ev.year === year);

  if (window.selectedPlay) {
    filteredEvents = filteredEvents.filter(ev => ev.play === window.selectedPlay);
  }

  if (window.selectedPerson) {
    filteredEvents = filteredEvents.filter(ev => {
      return persons.some(p =>
        p.place === ev.place &&
        p.year === year &&
        p.persons.includes(window.selectedPerson)
      );
    });
  }

  const activePlaces = new Set(filteredEvents.map(ev => ev.place)).size;

  document.getElementById('activePlaces').textContent = activePlaces;
  document.getElementById('activeEvents').textContent = filteredEvents.length;
}

function getAllPersons() {
  const set = new Set();
  persons.forEach(record => record.persons.forEach(person => set.add(person)));
  return Array.from(set).sort();
}

function getAllPlays() {
  const set = new Set();
  plays.forEach(play => set.add(play.title));
  return Array.from(set).sort();
}

window.personOccurrences = [];


function jumpToOccurrence(index) {

  const record = window.personOccurrences[index];

  if (!record) return;

  const slider =
    document.getElementById(
      'yearSlider'
    );

  slider.value = record.year;

  window.currentYear =
    record.year;

  document.getElementById(
    'yearValue'
  ).textContent = record.year;

  updateRoutes(record.year);
  updateStats(record.year);

  if (window.refreshMap)
    window.refreshMap();

  // přesun mapy na lokalitu

  if (typeof markerData !== 'undefined') {

    const target =
      markerData.find(
        item =>
          item.place.name === record.place
      );

    if (target) {

      map.setView(
        [
          target.place.lat,
          target.place.lon
        ],
        8
      );

      target.marker.openPopup();
    }

  }

}


function updatePersonOccurrences() {
  const target = document.getElementById('personOccurrences');

  if (!window.selectedPerson) {
    target.innerHTML = '<i>Vyber osobu.</i>';
    return;
  }

  const records = [];

  persons.forEach(p => {
    if (p.persons.includes(window.selectedPerson)) {
      records.push({ year: p.year, place: p.place });
    }
  });

  records.sort((a, b) => a.year - b.year);
  window.personOccurrences = records;

  let html = '<ul>';

  records.forEach((r, index) => {
    html += `<li><a href="#" onclick="jumpToOccurrence(${index}); return false;">${r.year} – ${r.place}</a></li>`;
  });

  html += '</ul>';
  target.innerHTML = html;
}

const panel = document.createElement('div');
panel.id = 'panel';

panel.innerHTML = `
<h3>Eggenberští knížecí komedianti</h3>
<div>Rok: <span id="yearValue">1695</span></div>
<input id="yearSlider" type="range" min="1675" max="1698" value="1695">
<hr>
<div>Aktivní lokality: <span id="activePlaces">0</span></div>
<div>Události: <span id="activeEvents">0</span></div>
<hr>
<div><b>Osoba</b></div>
<select id="personFilter"><option value="">Všechny osoby</option></select>
<hr>
<div><b>Inscenace</b></div>
<select id="playFilter"><option value="">Všechny inscenace</option></select>
<hr>
<div><b>Výskyty osoby</b></div>
<div id="personOccurrences" style="max-height:180px;overflow-y:auto;font-size:12px;"></div>
`;

document.body.appendChild(panel);

const personFilter = document.getElementById('personFilter');
getAllPersons().forEach(person => {
  const option = document.createElement('option');
  option.value = person;
  option.textContent = person;
  personFilter.appendChild(option);
});

window.selectedPerson = '';
personFilter.addEventListener('change', () => {
  window.selectedPerson = personFilter.value;
  updateStats(window.currentYear || 1695);
  updatePersonOccurrences();
  if (window.refreshMap) window.refreshMap();
});

const playFilter = document.getElementById('playFilter');
getAllPlays().forEach(play => {
  const option = document.createElement('option');
  option.value = play;
  option.textContent = play;
  playFilter.appendChild(option);
});

window.selectedPlay = '';
playFilter.addEventListener('change', () => {
  window.selectedPlay = playFilter.value;
  updateStats(window.currentYear || 1695);
  if (window.refreshMap) window.refreshMap();
});

const yearValue = document.getElementById('yearValue');
const slider = document.getElementById('yearSlider');

window.currentYear = 1695;
updateRoutes(1695);
updateStats(1695);
updatePersonOccurrences();

slider.addEventListener('input', () => {
  const year = parseInt(slider.value);
  yearValue.textContent = year;
  window.currentYear = year;
  updateRoutes(year);
  updateStats(year);
  if (window.refreshMap) window.refreshMap();
});
