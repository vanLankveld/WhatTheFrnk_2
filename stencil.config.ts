import { Config } from '@stencil/core';
import { less } from '@stencil/less';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://whatthefrnk.nl/',
      copy: [
        { src: '.htaccess' }
      ]
    },
  ],
  plugins: [
    less()
  ]
};
