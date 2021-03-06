'use strict';
const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: '@builder.io/gatsby',
      options: {
        /** TODO: update this with your API key! */
        publicAPIKey: '5e824134d81a4337912749ff95f0d1c2',
        // to allow editing on local host
        custom404Dev: path.resolve('src/pages/404.tsx'),
        templates: {
          // Render every `page` model as a new page using the /page.tsx template
          // based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.tsx')
        }
      }
    }
  ]
};
