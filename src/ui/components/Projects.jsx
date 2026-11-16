import { ExternalLink, Tags } from './Primitives.jsx';
function Pipeline({ steps, caption }) {
  return <div className="my-6 rounded-lg border border-teal/20 bg-linear-to-br from-teal/10 to-surface p-4"><ol className="flex list-none flex-wrap items-center gap-2 p-0 text-ink">{steps.map((step, index) => <li key={step} className="flex items-center gap-2">{index > 0 && <span aria-hidden="true" className="text-teal">→</span>}<span className="rounded border border-teal/25 px-2 py-1">{step}</span></li>)}</ol>{caption && <p className="mt-3">{caption}</p>}</div>;
}
export default function Projects({ profile }) {
  return <div className="space-y-4">{profile.projects.map((item,index) => <article key={item.id} className="rounded-lg border border-transparent py-5 transition-colors hover:border-line hover:bg-surface/50 motion-reduce:transition-none lg:-mx-5 lg:p-5"><p className="mb-2 font-mono text-teal">{String(index+1).padStart(2,'0')} / {item.category}</p><h3 className="mb-3 text-section font-semibold leading-snug tracking-tight text-ink">{item.url ? <ExternalLink href={item.url}>{item.title}</ExternalLink> : item.title}</h3><p>{item.description}</p>{item.pipeline && <Pipeline {...item.pipeline} />}{item.outcome && <p className="mt-4 text-ink">{item.outcome}</p>}<Tags items={item.skills} /></article>)}</div>;
}
