/** Route where the shell mounts the wiki (workspace spec 099). */
export const WIKI_BASE = '/wiki';

/** Anchor id of a heading: lowercase, without accents, words joined by dashes. */
export const slugify = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const EXPLICIT_ID = /\s*\{#([A-Za-z0-9_-]+)\}\s*$/;

/**
 * A heading text and its anchor id. `## Parar al que viene {#parry}` keeps the id `parry` in every language, so links
 * to a part of a page survive the translation; without `{#…}` the id is the slug of the text.
 */
export const splitHeadingId = (text: string): { text: string; id: string } => {
  const match = EXPLICIT_ID.exec(text);
  const plain = match ? text.slice(0, match.index) : text;
  return { text: plain, id: match ? match[1] : slugify(plain) };
};

export type WikiHeading = { text: string; id: string };

/** Plain text of a Markdown heading line: without emphasis, code marks or links. */
const plainText = (markdown: string): string =>
  markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .trim();

/** The `##` headings of a page, outside code blocks, for its table of contents. */
export const extractHeadings = (markdown: string): WikiHeading[] => {
  const headings: WikiHeading[] = [];
  let fenced = false;
  for (const line of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) fenced = !fenced;
    const match = !fenced && /^##\s+(.+?)\s*#*\s*$/.exec(line);
    if (match) {
      const explicit = EXPLICIT_ID.exec(match[1]);
      const text = plainText(explicit ? match[1].slice(0, explicit.index) : match[1]);
      headings.push({ text, id: explicit ? explicit[1] : slugify(text) });
    }
  }
  return headings;
};

export type ResolvedLink = { kind: 'external' | 'anchor' | 'route'; to: string };

/**
 * Where a link of a page points: an external URL as is, an anchor of the same page, or a wiki route for a relative
 * path to another page (`../rules/x.md#part` → `/wiki/rules/x#part`). `section` is the folder of the current page.
 */
export const resolveLink = (href: string, section: string): ResolvedLink => {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) return { kind: 'external', to: href };
  if (href.startsWith('#')) return { kind: 'anchor', to: href };
  const [path, hash] = href.split('#');
  const segments = [section];
  for (const part of path.split('/')) {
    if (part === '..') segments.pop();
    else if (part && part !== '.') segments.push(part);
  }
  const route = `${WIKI_BASE}/${segments.join('/').replace(/\.md$/i, '')}`;
  return { kind: 'route', to: hash ? `${route}#${hash}` : route };
};

/**
 * URL of an image of a page. The Markdown references the files of `content/images` as `images/<path>`; `urls` maps
 * those paths to the bundled files. An image with text can have a version per language in `images/<language>/<path>`,
 * used first. Anything else (absolute or external) is left as is.
 */
export const resolveImage = (src: string, urls: Record<string, string>, language: string): string => {
  const path = src.replace(/^\.\//, '');
  const localized = path.startsWith('images/') ? `images/${language}/${path.slice('images/'.length)}` : undefined;
  return (localized && urls[localized]) ?? urls[path] ?? src;
};

/** The language to show a page in: the requested one when the page has it, else the reference one. */
export const pickLanguage = (requested: string | undefined, available: string[], reference: string): string => {
  const base = (requested ?? '').split('-')[0].toLowerCase();
  return available.includes(base) ? base : reference;
};
