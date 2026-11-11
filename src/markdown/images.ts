/**
 * The images of content/images, bundled by webpack (asset/resource), keyed as the Markdown references them:
 * `images/<section>/<file>`.
 */
const context = import.meta.webpackContext('../../content/images', {
  recursive: true,
  regExp: /\.(svg|png|jpe?g|gif|webp)$/i,
});

export const IMAGE_URLS: Record<string, string> = Object.fromEntries(
  context.keys().map((key) => [`images/${key.replace(/^\.\//, '')}`, context(key) as string])
);
