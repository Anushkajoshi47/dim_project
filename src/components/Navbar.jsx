import { Menu, X, Gauge } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Heatwave Monitor', path: '/monitor' },
  { label: 'Prediction', path: '/prediction' },
  { label: 'Awareness', path: '/awareness' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-orange-50 text-orange-700' : 'text-slate-700 hover:bg-slate-100'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="page-shell flex h-18 min-h-[72px] items-center justify-between gap-4">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-orange-400 shadow-soft">
            <Gauge size={22} aria-hidden="true" />
          </span>
          <span className="text-lg font-black">ClimaSense AI</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/monitor"
            className="focus-ring rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            View Risk Dashboard
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="page-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/monitor"
              className="focus-ring mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              View Risk Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
