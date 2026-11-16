import { ExternalLink } from './Primitives.jsx';
export default function Contact({ profile }) {
  return <div className="rounded-lg border border-teal/20 bg-linear-to-br from-teal/10 to-surface/30 p-6"><p>{profile.contact.message}</p><div className="mt-5 flex flex-wrap gap-5 text-teal">{profile.links?.map(link => <ExternalLink key={link.url} href={link.url}>{link.label}</ExternalLink>)}{profile.contact.email && <a className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal" href={'mailto:' + profile.contact.email}>Send an email ↗</a>}{!profile.links?.length && !profile.contact.email && <p>Contact details to add.</p>}</div></div>;
}
