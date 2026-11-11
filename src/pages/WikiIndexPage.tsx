import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Box, Card, CardActionArea, CardContent, Grid, Stack, Typography } from '@mui/material';
import { Panel, RmuBreadcrumbs } from '@labcabrera-rmu/rmu-react-shared-lib';
import { REFERENCE_LANGUAGE } from '../content/build-catalog';
import { WIKI_CATALOG } from '../content/catalog';
import { pickLanguage, WIKI_BASE } from '../markdown/links';

/**
 * The home of the wiki: its sections, each with its pages as cards (workspace spec 099). Titles and summaries come
 * from the header of each page, in the active language when the page has it.
 */
const WikiIndexPage: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 1200 }}>
      <RmuBreadcrumbs items={[{ name: t('wiki') }]} />
      <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
        {t('wiki-title')}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 760 }}>
        {t('wiki-intro')}
      </Typography>
      <Stack spacing={3}>
        {WIKI_CATALOG.map((section) => (
          <Panel key={section.id} title={t(`wiki-section-${section.id}`)}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {t(`wiki-section-${section.id}-description`)}
            </Typography>
            <Grid container spacing={2}>
              {section.pages.map((page) => {
                const language = pickLanguage(i18n.language, Object.keys(page.versions), REFERENCE_LANGUAGE);
                const { meta } = page.versions[language];
                return (
                  <Grid key={page.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardActionArea
                        component={RouterLink}
                        to={`${WIKI_BASE}/${section.id}/${page.slug}`}
                        sx={{ height: '100%', alignItems: 'flex-start' }}
                      >
                        <CardContent>
                          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                            <ArticleOutlinedIcon fontSize="small" color="primary" />
                            <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 600 }}>
                              {meta.title}
                            </Typography>
                          </Stack>
                          <Typography variant="body2" color="text.secondary">
                            {meta.summary}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Panel>
        ))}
      </Stack>
    </Box>
  );
};

export default WikiIndexPage;
