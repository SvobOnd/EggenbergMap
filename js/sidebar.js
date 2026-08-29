// sidebar_v2.js

alert("sidebar loaded");
function getAllPersons(){
  const set = new Set();

  persons.forEach(record => {
    record.persons.forEach(person => set.add(person));
  });

  return Array.from(set).sort();
}

const personSelect = document.createElement("select");
personSelect.id = "personFilter";

const allOption = document.createElement("option");
allOption.value = "";
allOption.textContent = "Všechny osoby";
personSelect.appendChild(allOption);

getAllPersons().forEach(person => {
  const option = document.createElement("option");
  option.value = person;
  option.textContent = person;
  personSelect.appendChild(option);
});

const panel = document.getElementById("panel");

panel.insertAdjacentHTML(
  "beforeend",
  '<hr><div><b>Osoba</b></div>'
);

panel.appendChild(personSelect);

window.selectedPerson = "";

personSelect.addEventListener("change", () => {
  window.selectedPerson = personSelect.value;

  if(window.refreshMap){
    window.refreshMap();
  }
});

<script>
alert("index loaded");
</script>
