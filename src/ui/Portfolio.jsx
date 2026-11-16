import { useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import { Section, focus } from './components/Primitives.jsx';
import useActiveSection from './hooks/useActiveSection.js';
const renderers = { about: About, experience: Experience, projects: Projects, achievements: Achievements, education: Education, contact: Contact };
export default function Portfolio({ profile, sectionComponents = {} }) {
  const components = { ...renderers, ...sectionComponents };
  const sections = profile.sections.filter(section => components[section.type]);
  const [active, setActive] = useActiveSection(sections.map(section => section.id));
  useEffect(() => {
    document.title = profile.name + ' — ' + profile.role;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', profile.description);
  }, [profile]);
  return <div className="relative min-h-dvh bg-navy font-sans text-body leading-7 text-muted antialiased selection:bg-teal selection:text-navy">
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_8%_12%,#183b5138,transparent_55%)]" />
    <a href="#content" className={focus + ' fixed left-3 top-3 z-50 -translate-y-24 rounded bg-teal px-5 py-2 text-navy focus:translate-y-0'}>Skip to content</a>
    <div className="relative mx-auto grid max-w-[1230px] gap-x-14 px-6 md:px-10 lg:grid-cols-[1fr_1.18fr] lg:gap-x-20 lg:px-16">
      <Sidebar profile={profile} sections={sections.filter(section => section.type !== 'contact')} active={active} onNavigate={setActive} />
      <main id="content" className="min-w-0 pb-8 lg:pt-22">{sections.map(section => { const Component = components[section.type]; return <Section key={section.id} id={section.id} title={section.label}><Component profile={profile} section={section} /></Section>; })}
      <footer className="border-t border-line py-6"><p>{profile.name} · {profile.role}</p></footer></main>
    </div>
  </div>;
}
