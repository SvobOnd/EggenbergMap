const eventsFromStays = stays.map(stay => ({
  year: stay.year,
  place: stay.place,
  play: "Působení souboru",
  stayId: stay.id,
  dateFrom: stay.dateFrom,
  dateTo: stay.dateTo
}));