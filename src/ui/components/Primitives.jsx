export const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal';
export function ExternalLink({ href, children, className = '' }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={focus + ' inline-flex items-center gap-2 transition-colors hover:text-teal motion-reduce:transition-none ' + className}>{children}<span aria-hidden="true">↗</span></a>;
}
export function Tags({ items = [] }) {
  if (!items.length) return null;
  return <ul className="mt-5 flex list-none flex-wrap gap-2 p-0" aria-label="Skills and technologies">{items.map(item => <li key={item} className="rounded-full bg-teal/10 px-3 py-1 text-body leading-normal text-teal">{item}</li>)}</ul>;
}
export function Section({ id, title, children }) {
  return <section id={id} aria-labelledby={id + '-title'} className="mb-16 scroll-mt-8 lg:mb-20 lg:scroll-mt-16"><h2 id={id + '-title'} className="mb-6 flex items-center gap-5 text-section font-semibold tracking-tight text-ink after:h-px after:grow after:bg-line">{title}</h2>{children}</section>;
}
export function DateRange({ start, end }) {
  return <p className="mb-4 mt-2 font-mono text-body text-muted">{start} — {end}</p>;
}
export function LinkedInIcon() {
  return <svg className="size-5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52zM7.93 18.75H4.98V9.2h2.95v9.55zM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.54 2.8-1.54 3 0 3.57 1.98 3.57 4.55v5.24z" /></svg>;
}
