console.log("=== KONTROLA MODELU ===");

console.log(
  "Počet pobytů:",
  stays.length
);

console.log(
  "Počet představení:",
  performances.length
);

console.log(
  "Počet osobních vazeb:",
  personsMaster.length
);

const stayIds =
  new Set(
    stays.map(s => s.id)
  );

const missingPerformanceRefs =
  performances.filter(
    p => !stayIds.has(p.stayId)
  );

const missingPersonRefs =
  personsMaster.filter(
    p => !stayIds.has(p.stayId)
  );

console.log(
  "Představení bez stayId:",
  missingPerformanceRefs.length
);

console.log(
  "Osoby bez stayId:",
  missingPersonRefs.length
);

const staysWithoutPerformances =
  stays.filter(stay =>
    !performances.some(
      p => p.stayId === stay.id
    )
  );

console.log(
  "Pobyty bez představení:",
  staysWithoutPerformances.length
);

const staysWithoutPersons =
  stays.filter(stay =>
    !personsMaster.some(
      p => p.stayId === stay.id
    )
  );

console.log(
  "Pobyty bez osob:",
  staysWithoutPersons.length
);