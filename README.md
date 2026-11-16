# Engineer portfolio

A standalone React + Vite + Tailwind project. Both portfolio folders contain matching setup and UI code. Each project owns its components and dependencies; neither depends on the other folder or a shared package.

## Run from this folder

Requires Node.js 22.12+ and npm.

```powershell
npm.cmd install
npm.cmd run check
npm.cmd run dev
```

Vite prints the local URL. Run the other project in a second terminal; Vite selects the next free port when necessary. To choose a port explicitly: npm.cmd run dev -- --port 5174

## Build

```powershell
npm.cmd run build
npm.cmd run preview
```

The production files are written to dist/. Source index.html needs Vite; opening it directly does not run React.

## Edit and extend

- src/data/profile.js: person-specific content, links, and section order.
- src/ui/Portfolio.jsx: section registry and page layout.
- src/ui/components/: sidebar, About, Experience, Projects, Achievements, Education, Contact, and reusable primitives.
- src/ui/hooks/useActiveSection.js: active-section tracking and observer cleanup.
- src/theme.css: Tailwind import, source discovery, colors, and typography tokens. No global CSS selector rules.

Use only text-body (16px), text-section (24px), and text-display (48px). The default font-size scale is disabled. The same navy-and-teal theme and responsive layout are used in both projects.

To add a section, create a component under src/, add an entry to profile.sections, and pass the component through Portfolio's sectionComponents prop. Tailwind scans src/ for complete utility class names. To update both designs, apply the same component change to both independent folders.

Experience dates use month and year, and education dates use years, matching Shivam's résumé.
