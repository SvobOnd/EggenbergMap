const stays = [
  {
    "id": 1,
    "place": "Český Krumlov",
    "dateFrom": "1675",
    "dateTo": "1676",
    "year": 1675
  },
  {
    "id": 2,
    "place": "Linec",
    "dateFrom": "1678-08-24",
    "dateTo": null,
    "year": 1678
  },
  {
    "id": 3,
    "place": "Praha",
    "dateFrom": "1687-11-06",
    "dateTo": null,
    "year": 1687
  },
  {
    "id": 4,
    "place": "Linec",
    "dateFrom": "1687-08-18",
    "dateTo": "1687-09-15",
    "year": 1687
  },
  {
    "id": 5,
    "place": "Vídeň",
    "dateFrom": "1687-04-07",
    "dateTo": null,
    "year": 1687
  },
  {
    "id": 6,
    "place": "Praha",
    "dateFrom": "1690-03-26",
    "dateTo": null,
    "year": 1690
  },
  {
    "id": 7,
    "place": "Roudnice nad Labem",
    "dateFrom": "1690-03-30",
    "dateTo": null,
    "year": 1690
  },
  {
    "id": 8,
    "place": "Praha",
    "dateFrom": "1690-12-22",
    "dateTo": null,
    "year": 1690
  },
  {
    "id": 9,
    "place": "Brno",
    "dateFrom": "1692-12-16",
    "dateTo": null,
    "year": 1692
  },
  {
    "id": 10,
    "place": "Brno",
    "dateFrom": "1693-04-16",
    "dateTo": null,
    "year": 1693
  },
  {
    "id": 12,
    "place": "Praha",
    "dateFrom": "1693-11-16",
    "dateTo": null,
    "year": 1693
  },
  {
    "id": 13,
    "place": "Vídeň",
    "dateFrom": "1694-04-30",
    "dateTo": "1694-06-24",
    "year": 1694
  },
  {
    "id": 14,
    "place": "Štýrský Hradec",
    "dateFrom": "1695-01-07",
    "dateTo": "1695-02-07",
    "year": 1695
  },
  {
    "id": 15,
    "place": "Salcburk",
    "dateFrom": "1695-04-10",
    "dateTo": "1695-05-08",
    "year": 1695
  },
  {
    "id": 16,
    "place": "Augsburg",
    "dateFrom": "1695-06-28",
    "dateTo": "1695-08-08",
    "year": 1695
  },
  {
    "id": 17,
    "place": "Lublaň",
    "dateFrom": "1695-02-20",
    "dateTo": "1695-03-13",
    "year": 1695
  },
  {
    "id": 18,
    "place": "Augsburg",
    "dateFrom": "1695-07-15",
    "dateTo": null,
    "year": 1695
  },
  {
    "id": 19,
    "place": "Nördlingen",
    "dateFrom": "1695-08-15",
    "dateTo": "1695-09-10",
    "year": 1695
  },
  {
    "id": 20,
    "place": "Augsburg",
    "dateFrom": "1695-09-17",
    "dateTo": null,
    "year": 1695
  },
  {
    "id": 21,
    "place": "Ulm",
    "dateFrom": "1695-10-12",
    "dateTo": null,
    "year": 1695
  },
  {
    "id": 22,
    "place": "Norimberk",
    "dateFrom": "1696-03-26",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 23,
    "place": "Augsburg",
    "dateFrom": "1696-04-26",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 24,
    "place": "Augsburg",
    "dateFrom": "1696-06-23",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 25,
    "place": "Augsburg",
    "dateFrom": "1696-07-12",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 26,
    "place": "Augsburg",
    "dateFrom": "1696-07-24",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 27,
    "place": "Memmingen",
    "dateFrom": "1696-08-10",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 28,
    "place": "Memmingen",
    "dateFrom": "1696-08-15",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 29,
    "place": "Lindau",
    "dateFrom": "1696-08-21",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 30,
    "place": "Lindau",
    "dateFrom": "1696-08-24",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 31,
    "place": "St. Gallen",
    "dateFrom": "1696-09-27",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 32,
    "place": "St. Gallen",
    "dateFrom": "1696-10-04",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 33,
    "place": "Basilej",
    "dateFrom": "1696-11-21",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 34,
    "place": "Basilej",
    "dateFrom": "1696-11-24",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 35,
    "place": "Solothurn",
    "dateFrom": "1696-12-10",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 36,
    "place": "Basilej",
    "dateFrom": "1696-12-12",
    "dateTo": null,
    "year": 1696
  },
  {
    "id": 37,
    "place": "Solothurn",
    "dateFrom": "1697-01-16",
    "dateTo": null,
    "year": 1697
  },
  {
    "id": 38,
    "place": "Bern",
    "dateFrom": "1697-01-26",
    "dateTo": null,
    "year": 1697
  },
  {
    "id": 39,
    "place": "Freiburg (CH)",
    "dateFrom": "1697-02-13",
    "dateTo": "1697-03-17",
    "year": 1697
  },
  {
    "id": 40,
    "place": "Lucern",
    "dateFrom": "1697-05-07",
    "dateTo": null,
    "year": 1697
  },
  {
    "id": 41,
    "place": "Aarau",
    "dateFrom": "1697-06-02",
    "dateTo": null,
    "year": 1697
  },
  {
    "id": 42,
    "place": "Baden (CH)",
    "dateFrom": "1697-07-17",
    "dateTo": null,
    "year": 1697
  },
  {
    "id": 43,
    "place": "Waldshut",
    "dateFrom": "1697-09-13",
    "dateTo": null,
    "year": 1697
  },
  {
    "id": 44,
    "place": "Štrasburk",
    "dateFrom": "1697-11-02",
    "dateTo": null,
    "year": 1697
  },
  {
    "id": 45,
    "place": "Stuttgart",
    "dateFrom": "1698-01-18",
    "dateTo": null,
    "year": 1698
  },
  {
    "id": 46,
    "place": "Vídeň",
    "dateFrom": "1692-03-01",
    "dateTo": null,
    "year": 1692
  },
  {
    "id": 47,
    "place": "Vídeň",
    "dateFrom": null,
    "dateTo": "1692-09-30",
    "year": 1692
  },
  {
    "id": 48,
    "place": "Vídeň",
    "dateFrom": "1692-10-10",
    "dateTo": null,
    "year": 1692
  },
  {
    "id": 49,
    "place": "Vídeň",
    "dateFrom": "1694-05-20",
    "dateTo": null,
    "year": 1694
  },
  {
    "id": 50,
    "place": "Vídeň",
    "dateFrom": "1693-08-16",
    "dateTo": null,
    "year": 1693
  },
  {
    "id": 51,
    "place": "Linec",
    "dateFrom": "1679-08-23",
    "dateTo": null,
    "year": 1679
  },
  {
    "id": 52,
    "place": "České Budějovice",
    "dateFrom": "1680-07-11",
    "dateTo": "1680-07-13",
    "year": 1680
  },
  {
    "id": 53,
    "place": "Linec",
    "dateFrom": "1680-07-20",
    "dateTo": "1680-07-31",
    "year": 1680
  },
  {
    "id": 54,
    "place": "Linec",
    "dateFrom": "1680-12-16",
    "dateTo": "1681-03-31",
    "year": 1680
  },
  {
    "id": 55,
    "place": "Adelholzen",
    "dateFrom": "1681-07-01",
    "dateTo": null,
    "year": 1681
  },
  {
    "id": 56,
    "place": "Linec",
    "dateFrom": "1682-08-23",
    "dateTo": null,
    "year": 1682
  },
  {
    "id": 57,
    "place": "Norimberk",
    "dateFrom": "1683-06-16",
    "dateTo": null,
    "year": 1683
  },
  {
    "id": 58,
    "place": "Ansbach",
    "dateFrom": "1683-06-25",
    "dateTo": null,
    "year": 1683
  },
  {
    "id": 59,
    "place": "Grein",
    "dateFrom": "1684-07-31",
    "dateTo": "1684-08-03",
    "year": 1684
  },
  {
    "id": 60,
    "place": "Linec",
    "dateFrom": "1684-08-23",
    "dateTo": null,
    "year": 1684
  },
  {
    "id": 61,
    "place": "Linec",
    "dateFrom": "1685-08-23",
    "dateTo": null,
    "year": 1685
  },
  {
    "id": 62,
    "place": "Linec",
    "dateFrom": "1686-08-10",
    "dateTo": "1686-09-15",
    "year": 1686
  },
  {
    "id": 63,
    "place": "Pasov",
    "dateFrom": "1691-01-07",
    "dateTo": null,
    "year": 1691
  },
  {
    "id": 64,
    "place": "Linec",
    "dateFrom": "1691-02-01",
    "dateTo": "1691-04-28",
    "year": 1691
  },
  {
    "id": 65,
    "place": "Salcburk",
    "dateFrom": "1691-08-01",
    "dateTo": null,
    "year": 1691
  },
  {
    "id": 66,
    "place": "Vratislav",
    "dateFrom": "1691",
    "dateTo": "1692",
    "year": 1691
  },
  {
    "id": 67,
    "place": "Salcburk",
    "dateFrom": "1679-02-06",
    "dateTo": null,
    "year": 1679
  }
];