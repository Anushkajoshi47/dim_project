import { Instagram, Linkedin, Twitter, Youtube, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter.jsx';

const socialLinks = [
  { label: 'Instagram', href: 'https://example.com/instagram', icon: Instagram },
  { label: 'LinkedIn', href: 'https://example.com/linkedin', icon: Linkedin },
  { label: 'X/Twitter', href: 'https://example.com/twitter', icon: Twitter },
  { label: 'YouTube', href: 'https://example.com/youtube', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="page-shell section-pad space-y-10">
        <Newsletter />

        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr,1fr]">
          <div>
            <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-orange-700">
                <Flame size={22} aria-hidden="true" />
              </span>
              <span className="text-lg font-black">ClimaSense AI</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              A frontend-only climate intelligence concept for heatwave monitoring, AI climate prediction,
              extreme heat warning awareness, and responsible preparedness education.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-slate-900">Platform</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <Link className="hover:text-orange-700" to="/monitor">
                Heatwave Monitor
              </Link>
              <Link className="hover:text-orange-700" to="/prediction">
                Heatwave Prediction
              </Link>
              <Link className="hover:text-orange-700" to="/awareness">
                Heatwave Awareness
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-slate-900">Social</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ClimaSense AI. Academic frontend demonstration.</p>
          <p>Demo data only. Follow official weather and emergency guidance.</p>
        </div>
      </div>
    </footer>
  );
}
