// Markdown pages load as their source text (webpack asset/source).
declare module '*.md' {
  const content: string;
  export default content;
}

// The folder of content images, bundled by webpack (src/markdown/images.ts).
interface ImportMeta {
  webpackContext(
    request: string,
    options: { recursive?: boolean; regExp?: RegExp }
  ): {
    keys(): string[];
    (id: string): unknown;
  };
}
