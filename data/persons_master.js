const personsMaster = [
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Eggenberg Johann Christian"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Esteretter Johann"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Hoffmanová Anna Claudia Felicitas"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Hoffman Johann Christian"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Petzold Johann Valentin"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Sammenhammerová Marie Agnes"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Beck Friedrich Cornelius"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Blümelová Marie Ursula"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Böbe Friedrich"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Böbe Heinrich"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Eckstein Johann Dietrich"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Elenson Andreas"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Fridreich Johann Christian"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Gettner Johann Georg"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Gettnerová, Sibylla Juliana"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Gettnerová Anna Ernestina"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Manduk Johann Franz"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Manduková Anna Claudia Felicitas"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Pamberg David"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Perneggerová Anna Marie"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Pernegger Johann Christoph"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Schuemacher Johann"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Sammenhammer Johann Karl"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Schwarz Johann Friedrich"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Schwarzová Rebekka"
  },
  {
    "stayId": 1,
    "year": 1675,
    "place": "Český Krumlov",
    "person": "Wohlgehaben Johann"
  },
  {
    "stayId": 2,
    "year": 1678,
    "place": "Linec",
    "person": "Pernegger Johann Christoph"
  },
  {
    "stayId": 2,
    "year": 1678,
    "place": "Linec",
    "person": "Göttner Johann Georg"
  },
  {
    "stayId": 5,
    "year": 1687,
    "place": "Vídeň",
    "person": "Gettner Johann Georg"
  },
  {
    "stayId": 49,
    "year": 1694,
    "place": "Vídeň",
    "person": "Gettner Johann Georg"
  },
  {
    "stayId": 49,
    "year": 1694,
    "place": "Vídeň",
    "person": "Sammenhammer Johann Karl"
  },
  {
    "stayId": 49,
    "year": 1694,
    "place": "Vídeň",
    "person": "Elenson Andreas"
  },
  {
    "stayId": 49,
    "year": 1694,
    "place": "Vídeň",
    "person": "Gettnerová Anna Ernestina"
  },
  {
    "stayId": 49,
    "year": 1694,
    "place": "Vídeň",
    "person": "Sammenhammerová Marie Agnes"
  },
  {
    "stayId": 49,
    "year": 1694,
    "place": "Vídeň",
    "person": "Gettnerová, Sibylla Juliana"
  },
  {
    "stayId": 50,
    "year": 1693,
    "place": "Vídeň",
    "person": "Göttner Johann Georg"
  },
  {
    "stayId": 50,
    "year": 1693,
    "place": "Vídeň",
    "person": "Sammenhammer Johann Karl"
  },
  {
    "stayId": 56,
    "year": 1682,
    "place": "Linec",
    "person": "Petzold Johann Valentin"
  },
  {
    "stayId": 56,
    "year": 1682,
    "place": "Linec",
    "person": "Göttner Johann Georg"
  },
  {
    "stayId": 56,
    "year": 1682,
    "place": "Linec",
    "person": "Manduk Johann Franz"
  },
  {
    "stayId": 56,
    "year": 1682,
    "place": "Linec",
    "person": "Schwarz Johann Friedrich"
  },
  {
    "stayId": 56,
    "year": 1682,
    "place": "Linec",
    "person": "Sammenhammer Johann Karl"
  },
  {
    "stayId": 67,
    "year": 1679,
    "place": "Salcburk",
    "person": "Gettner Johann Georg"
  },
  {
    "stayId": 67,
    "year": 1679,
    "place": "Salcburk",
    "person": "Manduk Johann Franz"
  },
  {
    "stayId": 67,
    "year": 1679,
    "place": "Salcburk",
    "person": "Perneggerová Anna Marie"
  },
  {
    "stayId": 67,
    "year": 1679,
    "place": "Salcburk",
    "person": "Schuemacher Johann"
  }
];