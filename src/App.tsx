import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MfeRoot, NotFound } from '@labcabrera-rmu/rmu-react-shared-lib';

// Workspace spec 091, E1: every page is its own chunk; the Suspense is in MfeRoot / the shell layout.
const WikiIndexPage = lazy(() => import('./pages/WikiIndexPage'));
const WikiPage = lazy(() => import('./pages/WikiPage'));

// Workspace spec 099: the shell mounts the wiki under /wiki, without sign-in.
const App = () => (
  <MfeRoot>
    <Routes>
      <Route path="/" element={<WikiIndexPage />} />
      <Route path="/:sectionId/:pageSlug" element={<WikiPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </MfeRoot>
);

export default App;
