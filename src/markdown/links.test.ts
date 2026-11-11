import { describe, expect, it } from 'vitest';
import { extractHeadings, pickLanguage, resolveImage, resolveLink, slugify, splitHeadingId } from './links';

describe('slugify', () => {
  it('drops accents, symbols and spaces', () => {
    expect(slugify('1. El asalto en 30 segundos')).toBe('1-el-asalto-en-30-segundos');
    expect(slugify("Ejemplo: ¿correr o ir con calma? (50')")).toBe('ejemplo-correr-o-ir-con-calma-50');
    expect(slugify('Parar al que viene')).toBe('parar-al-que-viene');
  });
});

describe('splitHeadingId', () => {
  it('takes the explicit id at the end of a heading, else the slug', () => {
    expect(splitHeadingId('Parar al que viene {#parry-incoming}')).toEqual({
      text: 'Parar al que viene',
      id: 'parry-incoming',
    });
    expect(splitHeadingId('Parar al que viene')).toEqual({ text: 'Parar al que viene', id: 'parar-al-que-viene' });
  });
});

describe('extractHeadings', () => {
  it('lists the second level headings outside code blocks, as plain text', () => {
    const markdown = [
      '# Title',
      '## 1. **Uno**',
      '### Sub',
      '```',
      '## not a heading',
      '```',
      '## Dos con [enlace](x.md)',
      '## Tres {#three}',
    ].join('\n');
    expect(extractHeadings(markdown)).toEqual([
      { text: '1. Uno', id: '1-uno' },
      { text: 'Dos con enlace', id: 'dos-con-enlace' },
      { text: 'Tres', id: 'three' },
    ]);
  });
});

describe('resolveLink', () => {
  it('keeps external links and anchors', () => {
    expect(resolveLink('https://example.com/a', 'combat')).toEqual({ kind: 'external', to: 'https://example.com/a' });
    expect(resolveLink('mailto:a@b.c', 'combat').kind).toBe('external');
    expect(resolveLink('#parar', 'combat')).toEqual({ kind: 'anchor', to: '#parar' });
  });

  it('turns relative Markdown paths into wiki routes', () => {
    expect(resolveLink('other.md', 'combat')).toEqual({ kind: 'route', to: '/wiki/combat/other' });
    expect(resolveLink('./other.md#part', 'combat')).toEqual({ kind: 'route', to: '/wiki/combat/other#part' });
    expect(resolveLink('../magic/spells.md', 'combat')).toEqual({ kind: 'route', to: '/wiki/magic/spells' });
  });
});

describe('resolveImage', () => {
  const urls = {
    'images/combat/charge.svg': '/mfe/wiki/images/charge.0123.svg',
    'images/en/combat/charge.svg': '/mfe/wiki/images/charge.4567.svg',
  };

  it('maps the content images to their bundled files', () => {
    expect(resolveImage('images/combat/charge.svg', urls, 'es')).toBe('/mfe/wiki/images/charge.0123.svg');
    expect(resolveImage('./images/combat/charge.svg', urls, 'es')).toBe('/mfe/wiki/images/charge.0123.svg');
  });

  it('prefers the version of the image in the language of the page', () => {
    expect(resolveImage('images/combat/charge.svg', urls, 'en')).toBe('/mfe/wiki/images/charge.4567.svg');
    expect(resolveImage('images/combat/charge.svg', urls, 'fr')).toBe('/mfe/wiki/images/charge.0123.svg');
  });

  it('leaves unknown and external images as they are', () => {
    expect(resolveImage('images/combat/missing.svg', urls, 'es')).toBe('images/combat/missing.svg');
    expect(resolveImage('https://example.com/x.png', urls, 'en')).toBe('https://example.com/x.png');
  });
});

describe('pickLanguage', () => {
  it('uses the active language when the page has it, else the reference one', () => {
    expect(pickLanguage('en-GB', ['es', 'en'], 'es')).toBe('en');
    expect(pickLanguage('en', ['es'], 'es')).toBe('es');
    expect(pickLanguage(undefined, ['es'], 'es')).toBe('es');
  });
});
