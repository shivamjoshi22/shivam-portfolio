import { Tags } from './Primitives.jsx';
export default function About({ profile }) {
  return <><div className="space-y-5">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    {!!profile.metrics?.length && <><dl className="my-7 grid grid-cols-2 gap-5 border-y border-line py-6">{profile.metrics.map(metric => <div key={metric.label}><dt className="mb-1 text-section font-semibold text-teal">{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl>{profile.metricNote && <p>{profile.metricNote}</p>}</>}
    <Tags items={profile.skills} />
  </>;
}
