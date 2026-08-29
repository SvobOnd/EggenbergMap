# build_master_data_v1.py
# Eggenberští knížecí komedianti
# Generování:
#   stays_master.js
#   performances_master.js
#   persons_master.js

import csv
import json
import re

SOURCE_FILE = "imports/Bouda-event-RC-2026-07-17.txt"

# --------------------------------------------------
# pomocné funkce
# --------------------------------------------------

def normalize_date(value):

    if not value:
        return None

    if "ZZZZ" in value:
        return None

    value = value.strip()

    if value.startswith(">"):
        value = value[1:]

    value = value.replace("*", "")
    value = value.replace("X", "")

    if not value:
        return None

    if len(value) >= 8:
        return (
            value[0:4]
            + "-"
            + value[4:6]
            + "-"
            + value[6:8]
        )

    if len(value) >= 4:
        return value[0:4]

    return value


def extract_year(date_from, date_to):

    source = date_from or date_to

    if not source:
        return None

    m = re.search(r"(\d{4})", source)

    if m:
        return int(m.group(1))

    return None


# --------------------------------------------------
# načtení souboru
# --------------------------------------------------

stays = {}
performances = []
persons = []

current_akc = None

with open(
    SOURCE_FILE,
    encoding="utf-8"
) as f:

    reader = csv.reader(f)

    next(reader)

    for row in reader:

        if len(row) < 10:
            continue

        typ = row[0]
        akc_id = row[2]

        # ----------------------------------
        # AKC = pobyt
        # ----------------------------------

        if typ == "AKC":

            date_from = normalize_date(row[6])
            date_to = normalize_date(row[8])

            stays[akc_id] = {
                "id": int(akc_id),
                "place": row[4].strip(),
                "dateFrom": date_from,
                "dateTo": date_to,
                "year": extract_year(
                    date_from,
                    date_to
                )
            }

            current_akc = akc_id

        # ----------------------------------
        # JED = osoba
        # ----------------------------------

        elif typ == "JED":

            if akc_id in stays:

                persons.append({
                    "stayId": int(akc_id),
                    "year": stays[akc_id]["year"],
                    "place": stays[akc_id]["place"],
                    "person": row[4].strip()
                })

        # ----------------------------------
        # UDA = představení
        # ----------------------------------

        elif typ == "UDA":

            if akc_id in stays:

                performances.append({
                    "stayId": int(akc_id),
                    "year": stays[akc_id]["year"],
                    "place": stays[akc_id]["place"],
                    "play": row[4].strip()
                })

# --------------------------------------------------
# deduplikace
# --------------------------------------------------

clean_stays = {}
for stay in stays.values():

    key = (
        stay["id"],
        stay["place"],
        stay["dateFrom"],
        stay["dateTo"]
    )

    clean_stays[key] = stay

stays_list = list(clean_stays.values())


seen = set()
clean_performances = []

for p in performances:

    key = (
        p["stayId"],
        p["play"]
    )

    if key not in seen:

        seen.add(key)
        clean_performances.append(p)


seen = set()
clean_persons = []

for p in persons:

    key = (
        p["stayId"],
        p["person"]
    )

    if key not in seen:

        seen.add(key)
        clean_persons.append(p)

# --------------------------------------------------
# export
# --------------------------------------------------

with open(
    "data/stays_master.js",
    "w",
    encoding="utf-8"
) as f:

    f.write(
        "const stays = "
    )

    json.dump(
        stays_list,
        f,
        ensure_ascii=False,
        indent=2
    )

    f.write(";")

with open(
    "data/performances_master.js",
    "w",
    encoding="utf-8"
) as f:

    f.write(
        "const performances = "
    )

    json.dump(
        clean_performances,
        f,
        ensure_ascii=False,
        indent=2
    )

    f.write(";")

with open(
    "data/persons_master.js",
    "w",
    encoding="utf-8"
) as f:

    f.write(
        "const personsMaster = "
    )

    json.dump(
        clean_persons,
        f,
        ensure_ascii=False,
        indent=2
    )

    f.write(";")

print()
print("==============")
print("GENEROVÁNO")
print("==============")
print()

print(
    "Pobyty:",
    len(stays_list)
)

print(
    "Představení:",
    len(clean_performances)
)

print(
    "Osobní vazby:",
    len(clean_persons)
)

print()
print("Hotovo.")