import { DateRange } from './Primitives.jsx';
export default function Education({ profile }) {
  return <div className="divide-y divide-line">{profile.education.map(item => <article key={item.id} className="py-6 first:pt-0"><h3 className="mb-2 text-section font-semibold leading-snug tracking-tight text-ink">{item.school}</h3><p>{item.qualification}</p><DateRange start={item.start} end={item.end} /></article>)}</div>;
}
