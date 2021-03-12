const proxyUrl = 'https://analytics.knif.dev';

module.exports = {
  images: {
    domains: ['og-image.now.sh'],
  },
  async rewrites() {
    return [
      {
        source: '/um.js',
        destination: 'https://umami.knif.dev/umami.js',
      },
      {
        source: '/pb.js',
        destination: proxyUrl + '/pb.js',
      },
      {
        source: '/pl.js',
        destination: 'https://plausible.io/js/plausible.js'
      }
      {
        source: '/sa.js',
        destination: proxyUrl + '/sa.js',
      },
      {
        source: '/ns.gif',
        destination: proxyUrl + '/ns.gif',
      },
    ];
  },
};
