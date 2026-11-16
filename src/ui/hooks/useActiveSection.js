import { useEffect, useState } from 'react';
export default function useActiveSection(ids) {
  const key = ids.join('|');
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const ordered = key.split('|');
    const visible = new Set();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      const first = ordered.find(id => visible.has(id));
      if (first) setActive(first);
    }, { rootMargin: '-10% 0px -55% 0px' });
    ordered.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [key]);
  return [active, setActive];
}
