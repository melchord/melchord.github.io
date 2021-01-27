const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/melchord/melchord.github.io/gh-pages/' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
