const proxyUrl = 'https://analytics.knif.workers.dev';

module.exports = {
  images: {
    domains: ['og-image.now.sh'],
  },
  async rewrites() {
    return [
      {
        source: '/um.js',
        destination: proxyUrl + '/um',
      },
      {
        source: '/pb.js',
        destination: proxyUrl + '/pb',
      },
      {
        source: '/sa.js',
        destination: proxyUrl + '/sa',
      },
      {
        source: '/ns.gif',
        destination: proxyUrl + '/sa-ns',
      },
    ];
  },
};
