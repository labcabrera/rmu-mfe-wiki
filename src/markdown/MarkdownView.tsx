import { FC } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Box,
  Divider,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import remarkGfm from 'remark-gfm';
import { IMAGE_URLS } from './images';
import { resolveImage, resolveLink } from './links';
import { remarkHeadingIds } from './remark-heading-ids';

// Room for the shell's header when the browser scrolls to an anchor.
const anchorSx = { scrollMarginTop: 80 };

// The ids of the headings come from remarkHeadingIds: `{#id}` or the slug of the text.
const components = (section: string, language: string): Components => ({
  h1: ({ children }) => (
    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
      {children}
    </Typography>
  ),
  h2: ({ id, children }) => (
    <Typography variant="h5" component="h2" id={id} sx={{ ...anchorSx, mt: 5, mb: 1.5 }}>
      {children}
    </Typography>
  ),
  h3: ({ id, children }) => (
    <Typography variant="h6" component="h3" id={id} sx={{ ...anchorSx, mt: 3, mb: 1 }}>
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
      {children}
    </Typography>
  ),
  // A paragraph with only an image is a figure: a <figure> cannot go inside a <p>.
  p: ({ node, children }) => {
    const only = node?.children.length === 1 ? node.children[0] : undefined;
    if (only?.type === 'element' && only.tagName === 'img') return <>{children}</>;
    return (
      <Typography variant="body1" component="p" sx={{ mb: 1.5, lineHeight: 1.7 }}>
        {children}
      </Typography>
    );
  },
  a: ({ href, children }) => {
    const link = resolveLink(href ?? '', section);
    if (link.kind === 'route')
      return (
        <Link component={RouterLink} to={link.to}>
          {children}
        </Link>
      );
    if (link.kind === 'anchor') return <Link href={link.to}>{children}</Link>;
    return (
      <Link href={link.to} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <Box component="ul" sx={{ pl: 3, mt: 0, mb: 1.5 }}>
      {children}
    </Box>
  ),
  ol: ({ children, start }) => (
    <Box component="ol" start={start} sx={{ pl: 3, mt: 0, mb: 1.5 }}>
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Typography variant="body1" component="li" sx={{ mb: 0.5, lineHeight: 1.7, '& > p': { mb: 0.5 } }}>
      {children}
    </Typography>
  ),
  blockquote: ({ children }) => (
    <Alert severity="info" variant="outlined" sx={{ my: 2, '& p:last-child': { mb: 0 } }}>
      {children}
    </Alert>
  ),
  hr: () => <Divider sx={{ my: 3 }} />,
  code: ({ children }) => (
    <Box
      component="code"
      sx={{ fontFamily: 'monospace', fontSize: '0.9em', px: 0.5, borderRadius: 0.5, bgcolor: 'action.hover' }}
    >
      {children}
    </Box>
  ),
  pre: ({ children }) => (
    <Box
      component="pre"
      sx={{
        p: 2,
        mb: 2,
        overflowX: 'auto',
        borderRadius: 1,
        bgcolor: 'action.hover',
        '& code': { bgcolor: 'transparent' },
      }}
    >
      {children}
    </Box>
  ),
  table: ({ children }) => (
    <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
      <Table size="small">{children}</Table>
    </TableContainer>
  ),
  thead: ({ children }) => <TableHead>{children}</TableHead>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => <TableCell sx={{ fontWeight: 600, verticalAlign: 'bottom' }}>{children}</TableCell>,
  td: ({ children }) => <TableCell sx={{ verticalAlign: 'top' }}>{children}</TableCell>,
  // The text of the image is its caption: what the example shows.
  img: ({ src, alt }) => (
    <Box component="figure" sx={{ mx: 0, my: 3 }}>
      <Box
        component="img"
        src={resolveImage(typeof src === 'string' ? src : '', IMAGE_URLS, language)}
        alt={alt ?? ''}
        loading="lazy"
        sx={{ display: 'block', width: '100%', height: 'auto', borderRadius: 1 }}
      />
      {alt && (
        <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
          {alt}
        </Typography>
      )}
    </Box>
  ),
});

/**
 * A wiki page rendered with the application's theme (workspace spec 099). GitHub Flavored Markdown (tables, task
 * lists); raw HTML is not rendered. `section` resolves the relative links to other pages, and `language` the
 * images with a version per language.
 */
const MarkdownView: FC<{ markdown: string; section: string; language: string }> = ({ markdown, section, language }) => (
  <Box sx={{ minWidth: 0 }}>
    <ReactMarkdown remarkPlugins={[remarkGfm, remarkHeadingIds]} components={components(section, language)}>
      {markdown}
    </ReactMarkdown>
  </Box>
);

export default MarkdownView;
