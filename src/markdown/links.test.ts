import { describe, expect, it } from 'vitest';
import { pickLanguage, resolveImage, resolveLink } from './links';

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
