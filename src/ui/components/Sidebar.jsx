import { ExternalLink, LinkedInIcon, focus } from './Primitives.jsx';
export default function Sidebar({ profile, sections, active, onNavigate }) {
  return <header className="flex flex-col items-start pb-12 pt-14 lg:sticky lg:top-0 lg:h-dvh lg:min-h-[730px] lg:pb-10 lg:pt-22">
    <p className="mb-6 flex items-center gap-3 font-mono text-teal"><span className="size-2 shrink-0 rounded-full bg-teal shadow-[0_0_18px_#69e2ce66]" aria-hidden="true" />{profile.disciplines.join(' / ')}</p>
    <h1 className="text-display font-bold leading-[1.12] tracking-[-2px] text-ink">{profile.name}</h1>
    <p className="mt-5 text-section font-medium leading-snug text-ink">{profile.role}{profile.company && <><br /><span className="text-teal">{profile.company}</span></>}</p>
    <p className="mt-6 max-w-sm">{profile.tagline}</p>
    {profile.location && <p className="mt-4">{profile.location}</p>}
    {profile.isDraft && <p className="mt-5 rounded-md border border-teal/20 bg-teal/5 px-3 py-2 text-teal">Draft profile · details pending</p>}
    <nav aria-label="Portfolio sections" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 lg:mt-11 lg:flex-col lg:gap-4">
      {sections.map(section => <a key={section.id} href={'#' + section.id} onClick={() => onNavigate(section.id)} aria-current={active === section.id ? 'location' : undefined} className={focus + ' group flex items-center gap-4 font-semibold transition-colors motion-reduce:transition-none ' + (active === section.id ? 'text-ink' : 'text-muted hover:text-ink')}><span aria-hidden="true" className={'hidden h-px bg-muted transition-all group-hover:w-14 group-hover:bg-teal motion-reduce:transition-none lg:block ' + (active === section.id ? 'w-14 bg-teal' : 'w-7')} />{section.label}</a>)}
    </nav>
    <div className="mt-8 pt-0 lg:mt-auto lg:pt-10"><div className="flex flex-wrap items-center gap-6 text-ink">{profile.links?.map(link => <ExternalLink key={link.url} href={link.url}>{link.label === 'LinkedIn' && <LinkedInIcon />}{link.label}</ExternalLink>)}<a href="#contact" className={focus + ' hover:text-teal'}>Get in touch <span aria-hidden="true">↗</span></a></div><p className="mt-4">{profile.signature}</p></div>
  </header>;
}
