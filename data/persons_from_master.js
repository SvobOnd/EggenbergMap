const groupedPersons = {};

personsMaster.forEach(p => {

  const key = `${p.year}|${p.place}`;

  if (!groupedPersons[key]) {

    groupedPersons[key] = {
      year: p.year,
      place: p.place,
      persons: []
    };

  }

  groupedPersons[key].persons.push(
    p.person
  );

});

const personsFromMaster =
  Object.values(groupedPersons);