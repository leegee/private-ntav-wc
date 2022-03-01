import { Config } from '@stencil/core';
// import { env } from '@alepop/stencil-env';

export const config: Config = {
  namespace: 'nta-search',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      baseUrl: 'search',
      serviceWorker: null // disable service workers
    }
  ],
  // plugins: [ env() ]
};
