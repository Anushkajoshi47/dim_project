# ClimaSense AI

ClimaSense AI is a modern frontend-only climate intelligence website for the academic project **KJS-CES-01 - Climate Intelligence for Heatwave Monitoring, Prediction, and Early Warning**.

The website presents a fictional climate-tech platform with heatwave monitoring, simulated prediction, awareness content, SEO structure, social sharing, and a newsletter UI. It does not use a backend, database, authentication, or live weather APIs.

## Features

- Responsive SaaS-style landing page for **Monitor. Predict. Prepare.**
- Heatwave monitoring dashboard with demo current conditions
- Recharts 7-day temperature visualization
- Regional heat-risk table with simulated values
- Frontend-only heatwave prediction simulator
- Animated risk gauge and progress indicators
- Heatwave awareness resource cards with expandable articles
- Newsletter form with local thank-you state
- Social sharing buttons and marketing footer links
- Page-specific SEO metadata and Open Graph metadata
- Google Analytics placeholder configuration
- Vercel and Netlify deployment helpers

## Technology Used

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React icons
- Recharts

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in:

```text
dist
```

## Vercel Deployment

Use these settings:

```text
Build Command: npm run build
Output Directory: dist
```

The included `vercel.json` rewrites all routes to `index.html`, so `/monitor`, `/prediction`, and `/awareness` work as direct links.

## Netlify Deployment

Use the standard Vite settings:

```text
Build Command: npm run build
Publish Directory: dist
```

The included `public/_redirects` file supports single-page app routing on Netlify.

## GitHub Pages Notes

The project can be deployed as a static Vite build. For direct route refreshes on GitHub Pages, the included `public/404.html` provides a simple fallback redirect for the single-page app.

## How to Modify Demo Data

Most simulated values are stored in:

```text
src/data/climateData.js
```

Edit this file to update:

- Statistics
- Current conditions
- Temperature chart data
- Regional city risk values
- Risk-level explanations
- Awareness article content
- Conceptual prediction flow labels

The prediction simulator formula is in:

```text
src/pages/Prediction.jsx
```

## How to Add Google Analytics

Open:

```text
src/config/analytics.js
```

Add your Google Analytics measurement ID:

```js
export const analyticsConfig = {
  googleAnalyticsMeasurementId: 'G-XXXXXXXXXX',
};
```

If the value is blank, analytics is skipped and the website still works normally.

## Digital Marketing Requirements Covered

ClimaSense AI is structured as a professional climate-technology marketing website, with a clear brand name, tagline, calls-to-action, SEO metadata, social sharing, newsletter capture UI, educational awareness content, and conversion paths toward the dashboard and simulator.

It naturally incorporates keywords such as heatwave monitoring, heatwave prediction, climate intelligence, AI climate prediction, extreme heat warning, heatwave awareness, climate monitoring, heat risk, climate technology, and weather intelligence.

All prediction and dashboard values are clearly presented as demo or simulated data, which keeps the project responsible while still looking like a convincing SaaS product.

## Suggested Screenshots for College Submission

- Homepage hero with dashboard preview
- Statistics and how-it-works sections
- Heatwave Monitoring Dashboard current conditions
- Temperature chart and regional risk table
- Prediction simulator before and after clicking Analyze Risk
- Awareness resource cards and article modal
- Mobile navigation menu
- Footer newsletter subscription success message

## Short Viva Explanation

ClimaSense AI is a frontend-only digital marketing website for a fictional climate intelligence platform. It demonstrates how heatwave monitoring, AI-style prediction, and public awareness resources could be presented to communities through a professional SaaS-style interface. The dashboard and prediction values are simulated for academic demonstration, so the project focuses on user experience, SEO, branding, responsiveness, and marketing communication rather than building a real climate prediction backend.
