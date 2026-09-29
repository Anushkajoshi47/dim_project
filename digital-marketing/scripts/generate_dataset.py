"""Generate a synthetic ClimaSense AI audience dataset (website visitors / subscribers).

No real customer data exists for this academic project, so the audience is simulated.
Four hidden groups are built in so k-means has real structure to find, then noise,
duplicates, missing values and inconsistent spellings are added for the cleaning step.
"""
from pathlib import Path

import numpy as np
import pandas as pd

rng = np.random.default_rng(42)
OUTPUT_PATH = Path(__file__).resolve().parent.parent / "data" / "customers.csv"

# Cities used in the ClimaSense AI dashboard (src/data/climateData.js) with their states.
CITY_STATE = {
    "Mumbai": "Maharashtra", "Delhi": "Delhi", "Pune": "Maharashtra",
    "Ahmedabad": "Gujarat", "Bengaluru": "Karnataka",
}
CITIES = list(CITY_STATE)

# Each hidden group: share of audience, numeric (mean, std) pairs and categorical choices.
GROUPS = {
    "outdoor_worker": dict(
        share=0.30, age=(36, 7), income=(280_000, 60_000), spending=(38, 8),
        frequency=(5, 1.5), visits=(9, 2.5), order_value=(650, 150),
        occupation=["Delivery Partner", "Construction Worker", "Driver", "Street Vendor"],
        education=["High School", "Diploma"],
        channel=["WhatsApp", "Push Notification", "SMS"],
        interests=["Heat Safety Alerts", "Hydration Tips", "Work Hour Advisories"],
        lifestyle=["Long outdoor hours", "Budget conscious"],
        city_weights=[0.30, 0.30, 0.10, 0.20, 0.10],
    ),
    "health_parent": dict(
        share=0.25, age=(42, 6), income=(1_000_000, 200_000), spending=(72, 8),
        frequency=(12, 2.5), visits=(14, 3), order_value=(2400, 450),
        occupation=["Teacher", "Homemaker", "Business Owner", "Doctor"],
        education=["Graduate", "Postgraduate"],
        channel=["Email", "Facebook", "Instagram"],
        interests=["Child and Elder Care", "Cooling Products", "Health Advisories"],
        lifestyle=["Family first", "Health conscious"],
        city_weights=[0.25, 0.20, 0.20, 0.15, 0.20],
    ),
    "tech_enthusiast": dict(
        share=0.25, age=(24, 3.5), income=(550_000, 130_000), spending=(60, 12),
        frequency=(3, 1.2), visits=(26, 5), order_value=(900, 250),
        occupation=["Student", "Software Engineer", "Data Analyst", "Researcher"],
        education=["Graduate", "Postgraduate"],
        channel=["Instagram", "YouTube", "Reddit"],
        interests=["AI Forecasting", "Climate Data", "Open Data and APIs"],
        lifestyle=["Digital native", "Sustainability minded"],
        city_weights=[0.15, 0.15, 0.25, 0.10, 0.35],
    ),
    "civic_planner": dict(
        share=0.20, age=(50, 6), income=(2_200_000, 400_000), spending=(28, 8),
        frequency=(2, 0.8), visits=(12, 3), order_value=(5200, 900),
        occupation=["Municipal Officer", "Urban Planner", "NGO Manager", "Facility Manager"],
        education=["Postgraduate", "Doctorate"],
        channel=["LinkedIn", "Email", "Webinar"],
        interests=["Urban Heat Policy", "Early Warning Systems", "Disaster Preparedness"],
        lifestyle=["Policy driven", "Community focused"],
        city_weights=[0.25, 0.30, 0.10, 0.20, 0.15],
    ),
}


def make_group_rows(group: dict, count: int) -> pd.DataFrame:
    """Draw numeric features from normal distributions and pick categories at random."""
    def draw(mean_std):
        return rng.normal(mean_std[0], mean_std[1], count)

    def pick(options, weights=None):
        return rng.choice(options, count, p=weights)

    cities = pick(CITIES, group["city_weights"])
    return pd.DataFrame({
        "age": np.clip(draw(group["age"]), 18, 70).round(),
        "gender": pick(["Male", "Female", "Other"], [0.52, 0.45, 0.03]),
        "occupation": pick(group["occupation"]),
        "education": pick(group["education"]),
        "annual_income": np.clip(draw(group["income"]), 100_000, None).round(-3),
        "city": cities,
        "state": [CITY_STATE[city] for city in cities],
        "country": "India",
        "spending_score": np.clip(draw(group["spending"]), 1, 100).round(),
        "purchase_frequency": np.clip(draw(group["frequency"]), 0, None).round(),
        "website_visits_per_month": np.clip(draw(group["visits"]), 1, None).round(),
        "avg_order_value": np.clip(draw(group["order_value"]), 100, None).round(-1),
        "preferred_channel": pick(group["channel"]),
        "interests": pick(group["interests"]),
        "lifestyle": pick(group["lifestyle"]),
    })


def build_clean_dataset(total_rows: int = 800) -> pd.DataFrame:
    parts = [make_group_rows(g, round(total_rows * g["share"])) for g in GROUPS.values()]
    df = pd.concat(parts, ignore_index=True).sample(frac=1, random_state=42).reset_index(drop=True)
    df.insert(0, "customer_id", [f"CS{index:04d}" for index in range(1, len(df) + 1)])
    return df


def add_data_quality_problems(df: pd.DataFrame) -> pd.DataFrame:
    """Inject missing values, inconsistent spellings and duplicate rows."""
    df = df.copy()

    # Missing values in a few numeric columns (about 2-3 % each).
    for column in ["age", "annual_income", "spending_score", "avg_order_value"]:
        missing_rows = rng.choice(df.index, size=int(len(df) * 0.025), replace=False)
        df.loc[missing_rows, column] = np.nan
    df.loc[rng.choice(df.index, size=10, replace=False), "preferred_channel"] = np.nan

    # Inconsistent gender labels, city spellings and channel casing.
    gender_variants = {"Male": ["male", "M", "MALE"], "Female": ["female", "F", "FEMALE"]}
    for canonical, variants in gender_variants.items():
        rows = df.index[df["gender"] == canonical]
        messy = rng.choice(rows, size=int(len(rows) * 0.15), replace=False)
        df.loc[messy, "gender"] = rng.choice(variants, len(messy))
    city_variants = {"Bengaluru": ["Bangalore", "bengaluru"], "Mumbai": ["mumbai", "Bombay"], "Delhi": ["delhi", "New Delhi "]}
    for canonical, variants in city_variants.items():
        rows = df.index[df["city"] == canonical]
        messy = rng.choice(rows, size=int(len(rows) * 0.10), replace=False)
        df.loc[messy, "city"] = rng.choice(variants, len(messy))
    channel_rows = rng.choice(df.index[df["preferred_channel"] == "WhatsApp"], size=8, replace=False)
    df.loc[channel_rows, "preferred_channel"] = "whatsapp"

    # Exact duplicate rows (same customer submitted twice).
    duplicates = df.sample(n=18, random_state=42)
    return pd.concat([df, duplicates], ignore_index=True).sample(frac=1, random_state=7).reset_index(drop=True)


if __name__ == "__main__":
    dataset = add_data_quality_problems(build_clean_dataset())
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    dataset.to_csv(OUTPUT_PATH, index=False)
    print(f"Saved {len(dataset)} rows to {OUTPUT_PATH.name}")
