import { Tags } from './Primitives.jsx';
export default function Achievements({ profile }) {
  return <><div className="space-y-6">{profile.achievements.map(item => <article key={item.id} className="border-l-2 border-teal/40 pl-5"><h3 className="mb-2 text-section font-semibold leading-snug text-ink">{item.title}</h3><p>{item.description}</p></article>)}</div>{!!profile.certifications?.length && <div className="mt-8"><h3 className="text-section font-semibold text-ink">Certifications</h3><Tags items={profile.certifications} /></div>}</>;
}
