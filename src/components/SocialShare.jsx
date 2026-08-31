import { Linkedin, Send, Twitter } from 'lucide-react';

export default function SocialShare({ title = 'ClimaSense AI', text = 'Explore heatwave awareness and climate intelligence.' }) {
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text);

  const links = [
    { label: 'Share on X', icon: Twitter, href: `https://twitter.com/intent/tweet?text=${encodedText}` },
    {
      label: 'Share on LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    },
    { label: 'Share by Email', icon: Send, href: `mailto:?subject=${encodedTitle}&body=${encodedText}` },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700"
        >
          <Icon size={17} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
}
