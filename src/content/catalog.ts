import { buildCatalog } from './build-catalog';

/**
 * Every page of content/, bundled as source text (webpack asset/source) and indexed by its header: adding a page or a
 * translation is adding its file. The whole content is one chunk, loaded with the first wiki page.
 */
const context = import.meta.webpackContext('../../content', { recursive: true, regExp: /\.md$/i });

export const WIKI_CATALOG = buildCatalog(
  Object.fromEntries(context.keys().map((key) => [key, context(key) as string]))
);
