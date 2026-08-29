import csv
import json
import re

INPUT_FILE = "Bouda-event-RC-2026-07-17.txt"
OUTPUT_FILE = "persons_master.js"

persons_master = []

current_akc = None
current_year = None
current_place = None

akc_data = {}

with open(INPUT_FILE, encoding="utf-8") as f:
    reader = csv.reader(f)

    header = next(reader)

    for row in reader:

        if len(row) < 6:
            continue

        typ = row[0]

        if typ == "AKC":

            akc_id = row[2]

            location = row[4].strip()

            raw_date = row[6]

            m = re.search(r"(\\d{4})", raw_date)

            year = int(m.group(1)) if m else None

            akc_data[akc_id] = {
                "year": year,
                "place": location
            }

        elif typ == "JED":

            akc_id = row[2]

            person = row[4].strip()

            if akc_id not in akc_data:
                continue

            persons_master.append({
                "stayId": int(akc_id),
                "year": akc_data[akc_id]["year"],
                "place": akc_data[akc_id]["place"],
                "person": person
            })

seen = set()
clean = []

for p in persons_master:

    key = (
        p["stayId"],
        p["person"]
    )

    if key in seen:
        continue

    seen.add(key)
    clean.append(p)

with open(
    OUTPUT_FILE,
    "w",
    encoding="utf-8"
) as f:

    f.write(
        "const personsMaster = "
    )

    json.dump(
        clean,
        f,
        ensure_ascii=False,
        indent=2
    )

    f.write(";")

print(
    f"Hotovo: {len(clean)} vazeb osob."
)