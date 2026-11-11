import { describe, expect, it } from 'vitest';
import { buildCatalog, findPage, translationStatus } from './build-catalog';
import { contentHash, parseFrontMatter } from './front-matter';

const page = (title: string, order: number, extra = '') =>
  `---\ntitle: ${title}\nsummary: About ${title}: short.\norder: ${order}\n${extra}---\n\n# ${title}\n\nBody.\n`;

describe('parseFrontMatter', () => {
  it('reads the header and leaves the body without it', () => {
    const { meta, body } = parseFrontMatter(page('Carga', 10, 'source: "es@abc"\n'));
    expect(meta).toEqual({ title: 'Carga', summary: 'About Carga: short.', order: 10, source: 'es@abc' });
    expect(body).toBe('# Carga\n\nBody.\n');
  });

  it('gives defaults to a page without a header', () => {
    expect(parseFrontMatter('# Solo cuerpo\n')).toEqual({
      meta: { title: '', summary: '', order: 1000 },
      body: '# Solo cuerpo\n',
    });
  });
});

describe('contentHash', () => {
  it('is stable, ignores line endings and changes with the text', () => {
    const text = page('Carga', 10);
    expect(contentHash(text)).toMatch(/^[0-9a-f]{14}$/);
    expect(contentHash(text)).toBe(contentHash(text.replace(/\n/g, '\r\n')));
    expect(contentHash(text)).not.toBe(contentHash(`${text} `));
  });
});

describe('buildCatalog', () => {
  const spanishB = page('B', 20);
  const files = {
    './es/combat/b.md': spanishB,
    './es/combat/a.md': page('A', 10),
    './es/magic/spells.md': page('Hechizos', 10),
    './en/combat/b.md': page('B en', 20, `source: es@${contentHash(spanishB)}\n`),
    './en/combat/a.md': page('A en', 10, 'source: es@0000\n'),
    './en/combat/only-english.md': page('Orphan', 1),
    './README.md': 'ignored',
  };
  const catalog = buildCatalog(files);

  it('orders sections and pages, and leaves out pages without a Spanish version', () => {
    expect(catalog.map((section) => section.id)).toEqual(['combat', 'magic']);
    expect(catalog[0].pages.map((entry) => entry.slug)).toEqual(['a', 'b']);
    expect(findPage(catalog, 'combat', 'only-english')).toBeUndefined();
  });

  it('keeps every language of a page, without its header', () => {
    const entry = findPage(catalog, 'combat', 'b');
    expect(Object.keys(entry?.versions ?? {}).sort()).toEqual(['en', 'es']);
    expect(entry?.versions.en.meta.title).toBe('B en');
    expect(entry?.versions.en.markdown.startsWith('# B en')).toBe(true);
  });

  it('tells current translations from outdated ones', () => {
    const b = findPage(catalog, 'combat', 'b')!;
    const a = findPage(catalog, 'combat', 'a')!;
    expect(translationStatus(b, 'es')).toBe('reference');
    expect(translationStatus(b, 'en')).toBe('current');
    expect(translationStatus(a, 'en')).toBe('outdated');
  });
});
