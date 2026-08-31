import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO.jsx';
import SocialShare from '../components/SocialShare.jsx';
import { awarenessArticles } from '../data/climateData.js';

export default function Awareness() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <SEO
        title="Heatwave Awareness & Resources | ClimaSense AI"
        description="Read practical heatwave awareness resources about heat index, heat health, urban heat, climate change and home preparedness."
        keywords="heatwave awareness, heat index, extreme heat warning, climate monitoring, climate change heatwaves"
        path="/awareness"
      />

      <section className="bg-white">
        <div className="page-shell section-pad">
          <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-end">
            <div>
              <span className="eyebrow">Resources</span>
              <h1 className="mt-5 text-4xl font-black sm:text-5xl">Heatwave Awareness & Resources</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Simple information to help people understand extreme heat, heatwave prediction concepts, and
                responsible preparedness without presenting this site as an official emergency authority.
              </p>
            </div>
            <SocialShare title="Heatwave Awareness Resources" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="page-shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {awarenessArticles.map((article) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.title}
                  className="flex min-h-[300px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-black uppercase text-orange-700">{article.category}</p>
                  <h2 className="mt-2 text-xl font-black">{article.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.description}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="focus-ring mt-5 inline-flex items-center gap-2 self-start rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Read More
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-orange-950">Responsible Awareness Note</h2>
            <p className="mt-3 leading-7 text-orange-900">
              ClimaSense AI is an academic digital marketing frontend concept. Educational content is general in
              nature and should be paired with official weather alerts, public health information, and emergency
              instructions from local authorities.
            </p>
          </div>
        </div>
      </section>

      {selectedArticle && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <article className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-orange-700">{selectedArticle.category}</p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">{selectedArticle.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200"
                aria-label="Close article"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 leading-8 text-slate-700">{selectedArticle.body}</p>
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="focus-ring mt-7 rounded-full bg-orange-500 px-5 py-2.5 font-bold text-white transition hover:bg-orange-600"
            >
              Close
            </button>
          </article>
        </div>
      )}
    </>
  );
}
