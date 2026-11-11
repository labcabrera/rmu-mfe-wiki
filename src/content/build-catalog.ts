import { contentHash, PageMeta, parseFrontMatter } from './front-matter';

/** The language of the reference content: every page exists in it, and translations come from it. */
export const REFERENCE_LANGUAGE = 'es';

/** Sections in the order the wiki lists them; any other one goes after them, alphabetically. */
export const SECTION_ORDER = ['combat'];

export type PageVersion = { language: string; meta: PageMeta; markdown: string; hash: string };
export type WikiPageEntry = { section: string; slug: string; versions: Record<string, PageVersion> };
export type WikiSection = { id: string; pages: WikiPageEntry[] };

/**
 * The index of the wiki from its files (workspace spec 099), keyed `<language>/<section>/<slug>.md`: sections in
 * SECTION_ORDER, pages by the `order` of their reference version. A page without a reference version is left out.
 */
export const buildCatalog = (files: Record<string, string>): WikiSection[] => {
  const pages = new Map<string, WikiPageEntry>();
  for (const [path, text] of Object.entries(files)) {
    const match = /^([a-z]{2})\/([\w-]+)\/([\w-]+)\.md$/.exec(path.replace(/^\.\//, ''));
    if (!match) continue;
    const [, language, section, slug] = match;
    const key = `${section}/${slug}`;
    const entry = pages.get(key) ?? { section, slug, versions: {} };
    const { meta, body } = parseFrontMatter(text);
    entry.versions[language] = { language, meta, markdown: body, hash: contentHash(text) };
    pages.set(key, entry);
  }
  const bySection = new Map<string, WikiPageEntry[]>();
  for (const page of pages.values()) {
    if (!page.versions[REFERENCE_LANGUAGE]) continue;
    bySection.set(page.section, [...(bySection.get(page.section) ?? []), page]);
  }
  const rank = (id: string) => (SECTION_ORDER.includes(id) ? SECTION_ORDER.indexOf(id) : SECTION_ORDER.length);
  return [...bySection.entries()]
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
    .map(([id, list]) => ({
      id,
      pages: list.sort((a, b) => {
        const left = a.versions[REFERENCE_LANGUAGE].meta;
        const right = b.versions[REFERENCE_LANGUAGE].meta;
        return left.order - right.order || left.title.localeCompare(right.title);
      }),
    }));
};

export const findPage = (catalog: WikiSection[], sectionId?: string, slug?: string): WikiPageEntry | undefined =>
  catalog.find((section) => section.id === sectionId)?.pages.find((page) => page.slug === slug);

/**
 * Whether a translation follows its reference page: `current` when its `source` names the hash of that page as it is
 * now, `outdated` when the page changed since (or the translation does not say where it comes from).
 */
export const translationStatus = (page: WikiPageEntry, language: string): 'reference' | 'current' | 'outdated' => {
  if (language === REFERENCE_LANGUAGE) return 'reference';
  const reference = page.versions[REFERENCE_LANGUAGE];
  const source = page.versions[language]?.meta.source;
  return source === `${REFERENCE_LANGUAGE}@${reference.hash}` ? 'current' : 'outdated';
};
