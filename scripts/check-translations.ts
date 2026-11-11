/**
 * Checks the translations of the wiki (workspace spec 099). Each page in content/<language>/ other than the reference
 * language records in its header the page it was translated from (`source: es@<hash>`). The check fails when that
 * page changed since (outdated), when it does not exist (orphan) or when the header has no source.
 *
 * Run with `make check-translations` (Node 22.6+ runs this TypeScript file directly). It also prints the current hash
 * of every reference page, to copy into a translation once it is brought up to date.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { contentHash, parseFrontMatter } from '../src/content/front-matter.ts';

const REFERENCE_LANGUAGE = 'es';
const CONTENT = join(import.meta.dirname, '..', 'content');

const markdownFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.name.endsWith('.md') ? [path] : [];
  });

const languages = readdirSync(CONTENT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^[a-z]{2}$/.test(entry.name))
  .map((entry) => entry.name);

const referenceHashes = new Map<string, string>();
for (const file of markdownFiles(join(CONTENT, REFERENCE_LANGUAGE))) {
  referenceHashes.set(relative(join(CONTENT, REFERENCE_LANGUAGE), file), contentHash(readFileSync(file, 'utf8')));
}

console.log(`Reference pages (${REFERENCE_LANGUAGE}):`);
for (const [page, hash] of referenceHashes) console.log(`  ${page}  source: ${REFERENCE_LANGUAGE}@${hash}`);

const problems: string[] = [];
for (const language of languages.filter((language) => language !== REFERENCE_LANGUAGE)) {
  for (const file of markdownFiles(join(CONTENT, language))) {
    const page = relative(join(CONTENT, language), file);
    const name = `${language}/${page}`;
    const expected = referenceHashes.get(page);
    const { source } = parseFrontMatter(readFileSync(file, 'utf8')).meta;
    if (!expected) problems.push(`${name}: orphan, there is no ${REFERENCE_LANGUAGE}/${page}`);
    else if (!source) problems.push(`${name}: no "source" in the header (expected ${REFERENCE_LANGUAGE}@${expected})`);
    else if (source !== `${REFERENCE_LANGUAGE}@${expected}`)
      problems.push(`${name}: outdated, translated from ${source}, the page is now ${REFERENCE_LANGUAGE}@${expected}`);
  }
}

if (problems.length) {
  console.error(`\n${problems.length} translation problem(s):`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log('\nEvery translation is up to date.');
