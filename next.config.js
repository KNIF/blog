const proxyUrl = 'https://analytics.knif.workers.dev';

module.exports = {
  images: {
    domains: ['og-image.now.sh'],
  },
  async rewrites() {
    return [
      {
        source: '/sb.js',
        destination: proxyUrl + '/sb.js',
      },
      {
        source: '/_sbh/:slug',
        destination: proxyUrl + '/:slug',
      },
      {
        source: '/um.js',
        destination: proxyUrl + '/um.js',
      },
      {
        source: '/sa.js',
        destination: proxyUrl + '/sa.js',
      },
      {
        source: '/ns.gif',
        destination: proxyUrl + '/ns.gif',
      },
      {
        source: '/pb.js',
        destination: proxyUrl + '/pb.js',
      },
    ];
  },
};
