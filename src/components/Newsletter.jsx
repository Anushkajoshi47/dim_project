import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  }

  return (
    <section className="rounded-lg bg-navy p-6 text-white shadow-soft">
      <div className="grid gap-5 lg:grid-cols-[1fr,1.25fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-black">Stay Ahead of Extreme Heat</h2>
          <p className="mt-2 text-sm text-slate-300">Get climate awareness updates.</p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="focus-ring min-h-12 flex-1 rounded-full border border-white/20 bg-white px-4 text-slate-900 placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            <Send size={18} aria-hidden="true" />
            Subscribe
          </button>
        </form>
      </div>
      {subscribed && <p className="mt-4 text-sm font-semibold text-emerald-300">Thank you for subscribing!</p>}
    </section>
  );
}
