/**
 * The header of a wiki page (workspace spec 099): a YAML block of `key: value` lines between `---` lines at the start of
 * the Markdown. Only flat strings and numbers, which is all a page needs. Self-contained (no imports), so that
 * scripts/check-translations.ts runs it with Node.
 */
export type PageMeta = {
  title: string;
  summary: string;
  /** Position of the page in its section; lower first. */
  order: number;
  /** Translations only: the page they come from, `<language>@<hash>` (contentHash of that file). */
  source?: string;
};

const FENCE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

/** The header and the body of a page. A page without a header gets an empty title. */
export const parseFrontMatter = (text: string): { meta: PageMeta; body: string } => {
  const match = FENCE.exec(text);
  const values: Record<string, string> = {};
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const pair = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line.trim());
      if (pair) values[pair[1]] = pair[2].replace(/^(['"])(.*)\1$/, '$2');
    }
  }
  const order = Number(values.order);
  return {
    meta: {
      title: values.title ?? '',
      summary: values.summary ?? '',
      order: Number.isFinite(order) ? order : 1000,
      ...(values.source ? { source: values.source } : {}),
    },
    body: match ? text.slice(match[0].length).replace(/^\s*\n/, '') : text,
  };
};

/**
 * Short hash of a page file (cyrb53, 14 hex characters), with its line endings normalized. A translation records the
 * one of the page it comes from: when that page changes, the translation is outdated.
 */
export const contentHash = (text: string): string => {
  const normalized = text.replace(/\r\n/g, '\n');
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < normalized.length; i++) {
    const code = normalized.charCodeAt(i);
    h1 = Math.imul(h1 ^ code, 2654435761);
    h2 = Math.imul(h2 ^ code, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(14, '0');
};
