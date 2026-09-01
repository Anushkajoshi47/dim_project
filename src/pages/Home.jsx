import { ArrowRight, BookOpen, ChevronRight, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardPreview from '../components/DashboardPreview.jsx';
import SEO from '../components/SEO.jsx';
import SectionReveal from '../components/SectionReveal.jsx';
import StatCard from '../components/StatCard.jsx';
import heroImage from '../assets/climate-hero.png';
import { awarenessArticles, howItWorks, riskLevels, stats } from '../data/climateData.js';

export default function Home() {
  return (
    <>
      <SEO
        title="ClimaSense AI | Climate Intelligence & Heatwave Awareness"
        description="Explore climate intelligence, heatwave monitoring, prediction concepts and heat-safety awareness with ClimaSense AI."
        keywords="climate intelligence, heatwave monitoring, heatwave prediction, heatwave awareness, heat risk, weather intelligence"
        path="/"
      />

      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={heroImage}
          alt="Aerial city heatwave monitoring visualization with climate data overlays"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/25" />
        <div className="absolute inset-0 heat-grid opacity-50" />

        <div className="page-shell relative grid min-h-[calc(100vh-72px)] gap-10 py-16 md:grid-cols-[0.95fr,1.05fr] md:items-center lg:py-20">
          <SectionReveal>
            <span className="eyebrow border-orange-300/30 bg-white/10 text-orange-200">
              <Sparkles size={14} aria-hidden="true" />
              Monitor. Predict. Prepare.
            </span>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Stay Ahead of Extreme Heat
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Climate intelligence that helps communities monitor heat conditions, understand risk, and prepare
              before extreme temperatures arrive.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/monitor"
                title="Explore the heatwave risk monitoring dashboard"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Explore Heatwave Risk
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/awareness"
                title="Learn heatwave awareness and preparation tips"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal className="animate-float">
            <DashboardPreview />
          </SectionReveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Demo Intelligence</p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">Climate Monitoring Signals</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              These values are demonstration indicators for a frontend climate technology experience.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="page-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">From Climate Signals to Clear Action</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {howItWorks.map(({ step, title, copy, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-black text-orange-600">{step}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-orange-700">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr,1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">
                <ShieldAlert size={14} aria-hidden="true" />
                Heatwave Risk Preview
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">Understand Heat Risk at a Glance</h2>
              <p className="mt-4 leading-7 text-slate-600">
                ClimaSense AI organizes climate monitoring information into simple heat risk levels so users can
                interpret simulated conditions quickly.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {riskLevels.map((risk) => (
                <article key={risk.level} className={`rounded-lg border ${risk.border} bg-white p-5 shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <span className={`h-4 w-4 rounded-full ${risk.color}`} />
                    <h3 className="text-xl font-black">{risk.level}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{risk.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="page-shell">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">
                <BookOpen size={14} aria-hidden="true" />
                Awareness
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">Heatwave Awareness Resources</h2>
            </div>
            <Link
              to="/awareness"
              title="View all heatwave awareness resources"
              className="inline-flex items-center gap-2 font-bold text-orange-700"
            >
              View all resources
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {awarenessArticles.slice(0, 3).map(({ category, title, description, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-black uppercase text-orange-700">{category}</p>
                <h3 className="mt-2 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                <Link
                  to="/awareness"
                  title={`Read more about ${title}`}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-orange-700"
                >
                  Read More
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <div className="rounded-lg bg-gradient-to-r from-navy via-slate-900 to-orange-900 p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black sm:text-4xl">Understand the Heat Before It Peaks</h2>
                <p className="mt-3 max-w-2xl text-slate-200">
                  Explore a frontend dashboard concept built for climate monitoring, heatwave prediction education,
                  and digital marketing storytelling.
                </p>
              </div>
              <Link
                to="/monitor"
                title="Explore the climate monitoring dashboard"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                Explore Climate Dashboard
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
