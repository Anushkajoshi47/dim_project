# Experiment No. 08 – AI-Based Customer Persona Generation from Marketing Data

## Aim

To generate data-driven customer personas from marketing data using Python, by cleaning and scaling the data, segmenting customers with K-Means clustering, and proposing digital marketing strategies for each segment. The product studied is **ClimaSense AI**, a climate-tech website for heatwave monitoring, prediction and awareness.

## Results

Data note: ClimaSense AI is a frontend-only demo with no real customers, so a **synthetic** dataset of 818 visitors/subscribers was generated (`scripts/generate_dataset.py`, seed 42). Notebook: `notebooks/expt_08_persona_generation.ipynb`.

**Step 1 – Install Python and libraries.** Dependencies (pandas, numpy, scikit-learn, matplotlib, jupyter) were installed with `uv sync` into a local virtual environment. *Snapshot: notebook Step 1 cell (printed library versions).*

**Step 2 – Load the dataset.** `pd.read_csv` loaded 818 rows × 16 columns covering demographic, geographic, behavioral and psychographic data. *Snapshot: notebook Step 2 `head()` output.*

**Step 3 – Explore the data.** `info()`, `describe()`, missing-value and duplicate counts showed 18 duplicate rows, 92 missing values (age 20, income 20, spending score 20, order value 22, channel 10) and inconsistent labels (9 gender spellings, 11 city spellings). Relevant attributes: age, gender, income, spending score, purchase frequency, website visits and order value. *Snapshots: notebook Step 3 outputs and `figures/00_eda_distributions.png`.*

**Step 4 – Clean the data.** 18 duplicates were removed (818 → 800 rows), gender/city/channel spellings were standardised (9 → 3 gender labels, 11 → 5 cities) and all 92 missing values were filled (median for numbers, mode for channel). Missing values and duplicates are now 0. *Snapshot: notebook Step 4 before/after table.*

**Step 5 – Select features.** Six numeric features: age, annual income, spending score, purchase frequency, website visits per month, average order value. Text columns were kept only to describe the clusters. *Snapshot: notebook Step 5 output.*

**Step 6 – Normalise with `StandardScaler`.** Features went from very different ranges (e.g. income mean ≈ ₹8.99 lakh, purchase frequency mean ≈ 5.6) to mean 0 and standard deviation 1, so income no longer dominates distance calculations. *Snapshots: notebook Step 6 before/after tables and `figures/01_scaling_before_after.png`.*

**Step 7 – Apply K-Means.** k = 2–10 were tested (`random_state=42`, `n_init=10`). Inertia falls sharply until k = 4 (1803 → 931) and then flattens (860 at k = 5); the silhouette score peaks at k = 4 (0.554, against 0.456 at k = 3 and 0.448 at k = 5). Both methods agree, so **k = 4** was used. *Snapshots: `figures/02_elbow.png`, `figures/03_silhouette.png`.*

**Step 8 – Visualise clusters.** A scatter plot of age vs income with centroids, a PCA 2-D projection and per-cluster feature-mean bar charts show four well-separated groups. *Snapshots: `figures/04_clusters_scatter.png`, `figures/05_clusters_pca.png`, `figures/06_cluster_feature_means.png`.*

**Step 9 – Analyse clusters and create personas.** Cluster profile (from `outputs/cluster_profile.csv`):

| Persona | Size | Avg age | Avg income | Spending score | Orders/yr | Visits/month | Avg order (₹) | Top channels | Top interests |
|---|---|---|---|---|---|---|---|---|---|
| Outdoor Heat-Exposed Worker | 243 (30.4%) | 36.0 | ₹2.9 lakh | 38.4 | 4.8 | 8.7 | 657 | WhatsApp, Push Notification | Heat Safety Alerts, Work Hour Advisories |
| Health-Conscious Family Planner | 200 (25.0%) | 42.1 | ₹9.8 lakh | 72.1 | 11.9 | 13.8 | 2,424 | Email, Facebook | Health Advisories, Child and Elder Care |
| Young Climate-Tech Enthusiast | 198 (24.8%) | 24.4 | ₹5.5 lakh | 60.1 | 3.2 | 25.9 | 918 | Instagram, Reddit | Climate Data, AI Forecasting |
| Civic Heat-Policy Planner | 159 (19.9%) | 49.6 | ₹21.5 lakh | 27.8 | 1.9 | 11.8 | 5,144 | Webinar, LinkedIn | Early Warning Systems, Urban Heat Policy |

Each persona has an age group, income level, spending behavior, shopping preferences, interests, goals, pain points, preferred channels and a marketing strategy (full text in `outputs/personas.csv`). *Snapshots: notebook Step 9 persona cards, `figures/07_cluster_profile_bars.png`.*

**Step 10 – Summary and strategies.**

| Persona | Recommended digital marketing strategy |
|---|---|
| Outdoor Heat-Exposed Worker | Push notifications and WhatsApp/SMS alerts before peak hours; short vernacular safety videos; free alerts first, then cheap safety kits via retargeting ads; SEO for outdoor-worker heat safety. |
| Health-Conscious Family Planner | Weekly email heat-risk digest; Facebook/Instagram content on child and elder care; retargeting simulator users with premium family plans; referral rewards. |
| Young Climate-Tech Enthusiast | Interactive prediction-simulator campaigns; Instagram/YouTube short videos; Reddit explainers of the model; social sharing hooks; SEO around "AI heatwave prediction". |
| Civic Heat-Policy Planner | LinkedIn thought leadership and paid ads to municipal/NGO roles; webinars and whitepapers; email nurture ending in a demo request; case studies. |

*Snapshots: notebook Step 10 table, `outputs/personas.csv`, `figures/08_persona_sizes.png`.*

## Questions

**Explain impact of AI on social media.**

Artificial intelligence now sits behind almost everything users see on social media. The most visible effect is **content recommendation**: machine-learning models rank feeds, suggest videos and surface accounts based on past behavior, which keeps users engaged but can also create filter bubbles. The same behavioral data powers **personalisation and targeted advertising**. Platforms group users by age, interests and activity and show each group different ads, which is essentially the segmentation and persona idea used in this experiment, applied at very large scale and in real time.

**Generative AI** lets brands and individuals create captions, images, video and translations quickly, lowering the cost of content marketing while raising concerns about authenticity and low-quality content. **Chatbots** handle routine customer service and lead enquiries around the clock, freeing human teams for complex cases. **Social listening and sentiment analysis** use natural-language processing to track what people say about a brand, detect emerging issues and measure campaign reception. In **influencer marketing**, AI tools help find creators whose audiences match a target persona and analyse engagement and audience quality.

AI is also central to **moderation**: automated systems flag spam, hate speech and misinformation at a scale humans cannot review, but they make errors, and generative AI has made **deepfakes** and synthetic misinformation easier to produce. Other concerns include **algorithmic bias**, where models trained on skewed data treat groups unfairly, and **privacy**, since personalisation depends on collecting large amounts of personal data, which is why data-protection laws and transparency matter.

Looking ahead, we can expect more AI-generated and AI-assisted content, conversational and voice-based interfaces, stronger labelling of synthetic media and closer regulation of data use. For marketers, the lesson from this experiment is that AI is most useful when it turns data into clear audience segments and personas, and when it is used responsibly: for example, ClimaSense AI could reach outdoor workers with timely alerts and civic planners with credible data, rather than sending everyone the same message.

## Outcomes

- A synthetic ClimaSense AI audience dataset (818 rows) was loaded, explored and cleaned: 18 duplicates removed, 92 missing values imputed and inconsistent labels standardised.
- Six features were selected and normalised with `StandardScaler` (mean 0, standard deviation 1).
- The number of clusters was chosen with justification: k = 4, at the elbow and the silhouette peak (0.554).
- Four customer personas were generated, each with the full set of persona attributes, and saved to `outputs/personas.csv`.
- Tailored digital marketing strategies (email, social media, SEO, paid ads, retargeting, push notifications, webinars) were proposed for each persona and tied to the ClimaSense AI website.
- Nine figures were saved as snapshots in `outputs/figures/`.

## Conclusion

The aim of generating customer personas from marketing data was achieved. Cleaning and scaling made the data suitable for K-Means, and the elbow and silhouette methods justified four segments that are clearly different in age, income, spending, interests and channels. Turning those clusters into personas gave concrete, number-backed guidance on whom to target, where to reach them and what to say. The data was synthetic, so the personas illustrate the method rather than describe real ClimaSense AI users; with real analytics and CRM data the same pipeline could be reused directly.
