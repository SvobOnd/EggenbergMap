# data_check_v1.py
# Kontrola základní integrity modelu

import re
import json

def load_js_array(path, variable_name):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    text = text.replace(f"const {variable_name} =", "")
    text = text.strip()

    if text.endswith(";"):
        text = text[:-1]

    return json.loads(text)

# načtení dat

stays = load_js_array(
    "data/stays_master_v2_draft.js",
    "stays"
)

performances = load_js_array(
    "data/performances_master_v1.js",
    "performances"
)

persons = load_js_array(
    "data/persons_master_v1_draft.js",
    "personsMaster"
)

print()
print("=== KONTROLA MODELU ===")
print()

print("Počet pobytů:", len(stays))
print("Počet představení:", len(performances))
print("Počet osobních vazeb:", len(persons))
print()

stay_ids = {s["id"] for s in stays}

missing_perf = [
    p for p in performances
    if p["stayId"] not in stay_ids
]

missing_persons = [
    p for p in persons
    if p["stayId"] not in stay_ids
]

print(
    "Představení bez stayId:",
    len(missing_perf)
)

print(
    "Osoby bez stayId:",
    len(missing_persons)
)

print()

stays_without_performances = [
    stay for stay in stays
    if not any(
        p["stayId"] == stay["id"]
        for p in performances
    )
]

stays_without_persons = [
    stay for stay in stays
    if not any(
        p["stayId"] == stay["id"]
        for p in persons
    )
]

print(
    "Pobyty bez představení:",
    len(stays_without_performances)
)

print(
    "Pobyty bez osob:",
    len(stays_without_persons)
)

print()
print("=== KONEC KONTROLY ===")