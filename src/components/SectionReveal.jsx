export default function SectionReveal({ children, className = '' }) {
  return <div className={`animate-fade-up ${className}`}>{children}</div>;
}
