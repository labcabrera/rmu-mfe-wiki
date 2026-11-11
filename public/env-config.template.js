// Runtime configuration, read through window.__RMU_CONFIG__ (see webpack.config.ts).
// The Docker image renders this file into env-config.js with envsubst;
// the webpack dev server serves the same keys from .env. Only public values belong here.
// When the wiki runs inside the shell, the shell's env-config.js is the one in effect.
// The wiki calls no API: its pages and images are bundled (workspace spec 099).
window.__RMU_CONFIG__ = {
  // Static assets (images, locales).
  RMU_MFE_ASSETS_URI: '${RMU_MFE_ASSETS_URI}',
};

// A key the container does not define stays as its placeholder: it counts as not set.
for (const key of Object.keys(window.__RMU_CONFIG__)) {
  if (window.__RMU_CONFIG__[key].startsWith('$' + '{')) window.__RMU_CONFIG__[key] = '';
}
