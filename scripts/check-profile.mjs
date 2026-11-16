import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import profile from '../src/data/profile.js';
const unique = (items, label) => assert.equal(new Set(items).size, items.length, label + ' must be unique');
for (const field of ['name','role','description']) assert.ok(profile[field]?.trim(), 'Missing ' + field);
unique(profile.sections.map(s => s.id), 'Section IDs');
for (const field of ['experience','projects','achievements','education']) {
  assert.ok(Array.isArray(profile[field]), field + ' must be an array');
  unique(profile[field].map(item => item.id), field + ' IDs');
}
for (const section of profile.sections) assert.match(section.id, /^[a-z][a-z0-9-]*$/);
const monthDate = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/;
for (const item of profile.experience) {
  assert.match(item.start, monthDate);
  if (item.end !== 'Present') {
    assert.match(item.end, monthDate);
    assert.ok(Date.parse('1 ' + item.start + ' UTC') <= Date.parse('1 ' + item.end + ' UTC'), item.id + ' ends before it starts');
  }
}
for (const item of profile.education) {
  assert.match(item.start, /^\d{4}$/);
  assert.match(item.end, /^\d{4}$/);
  assert.ok(Number(item.start) <= Number(item.end), item.id + ' ends before it starts');
}
for (const link of [...profile.links, ...profile.projects.filter(p => p.url).map(p => ({url:p.url}))]) assert.equal(new URL(link.url).protocol, 'https:');
const theme = await readFile(new URL('../src/theme.css', import.meta.url), 'utf8');
assert.ok(theme.includes('--text-*: initial;'));
assert.deepEqual([...theme.matchAll(/--text-([a-z]+):/g)].map(m => m[1]).sort(), ['body','display','section']);
console.log('PASS: ' + profile.name + ' — content, IDs, dates, links, and three font sizes');
