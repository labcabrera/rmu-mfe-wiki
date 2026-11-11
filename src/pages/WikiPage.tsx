import { FC, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Alert, Box, Link, Stack, Typography } from '@mui/material';
import { extractHeadings, MarkdownContent, NotFound, RmuBreadcrumbs } from '@labcabrera-rmu/rmu-react-shared-lib';
import { findPage, REFERENCE_LANGUAGE, translationStatus } from '../content/build-catalog';
import { WIKI_CATALOG } from '../content/catalog';
import { IMAGE_URLS } from '../markdown/images';
import { pickLanguage, resolveImage, resolveLink, WIKI_BASE } from '../markdown/links';

/**
 * One page of the wiki (workspace spec 099): its Markdown in the active language, or in Spanish with a notice, and
 * the table of contents of its sections beside it on wide screens. `?lang=es` shows a given version (the original
 * of an outdated translation).
 */
const WikiPage: FC = () => {
  const { t, i18n } = useTranslation();
  const { sectionId, pageSlug } = useParams();
  const { pathname, hash } = useLocation();
  const [searchParams] = useSearchParams();
  const page = findPage(WIKI_CATALOG, sectionId, pageSlug);
  const forced = searchParams.get('lang') ?? undefined;
  const language = page
    ? pickLanguage(forced ?? i18n.language, Object.keys(page.versions), REFERENCE_LANGUAGE)
    : REFERENCE_LANGUAGE;
  const version = page?.versions[language];
  const headings = useMemo(() => (version ? extractHeadings(version.markdown) : []), [version]);
  const section = page?.section ?? '';
  // Relative links to other pages become wiki routes, and images the bundled files, in the page language if there.
  const linkOf = useCallback((href: string) => resolveLink(href, section), [section]);
  const imageOf = useCallback((src: string) => resolveImage(src, IMAGE_URLS, language), [language]);

  // A link with an anchor (#part) scrolls to it once the page is there.
  useEffect(() => {
    if (version && hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [version, hash]);

  if (!page || !version) return <NotFound />;
  const missingTranslation = !forced && !i18n.language?.startsWith(language);
  const outdated = translationStatus(page, language) === 'outdated';

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <RmuBreadcrumbs
        items={[
          { name: t('wiki'), link: WIKI_BASE },
          { name: t(`wiki-section-${page.section}`), link: WIKI_BASE },
          { name: version.meta.title },
        ]}
      />
      <Stack direction="row" spacing={4} sx={{ alignItems: 'flex-start' }}>
        <Box component="article" lang={language} sx={{ flex: 1, minWidth: 0, maxWidth: 880 }}>
          {missingTranslation && (
            <Alert severity="info" variant="outlined" sx={{ mb: 2 }}>
              {t('wiki-only-in-spanish')}
            </Alert>
          )}
          {outdated && (
            <Alert severity="warning" variant="outlined" sx={{ mb: 2 }}>
              {t('wiki-outdated-translation')}{' '}
              <Link component={RouterLink} to={`${pathname}?lang=${REFERENCE_LANGUAGE}`}>
                {t('wiki-read-original')}
              </Link>
            </Alert>
          )}
          <MarkdownContent markdown={version.markdown} resolveLink={linkOf} resolveImage={imageOf} fullWidthImages />
        </Box>
        {headings.length > 1 && (
          <Box
            component="nav"
            aria-label={t('wiki-contents')}
            sx={{ display: { xs: 'none', lg: 'block' }, width: 260, flexShrink: 0, position: 'sticky', top: 88 }}
          >
            <Typography variant="overline" color="text.secondary">
              {t('wiki-contents')}
            </Typography>
            <Stack component="ul" spacing={1} sx={{ listStyle: 'none', p: 0, m: 0, mt: 1 }}>
              {headings.map((heading) => (
                <li key={heading.id}>
                  <Link href={`#${heading.id}`} variant="body2" underline="hover" color="text.secondary">
                    {heading.text}
                  </Link>
                </li>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default WikiPage;
