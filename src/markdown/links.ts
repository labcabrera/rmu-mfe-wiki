import type { MarkdownLink } from '@labcabrera-rmu/rmu-react-shared-lib';

/** Route where the shell mounts the wiki (workspace spec 099). */
export const WIKI_BASE = '/wiki';

/**
 * Where a link of a page points: an external URL as is, an anchor of the same page, or a wiki route for a relative
 * path to another page (`../rules/x.md#part` → `/wiki/rules/x#part`). `section` is the folder of the current page.
 */
export const resolveLink = (href: string, section: string): MarkdownLink => {
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
