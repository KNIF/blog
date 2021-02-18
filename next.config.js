module.exports = {
  images: {
    domains: ['og-image.now.sh'],
  },
  async rewrites() {
    return [
      {
        source: '/sb.js',
        destination: 'https://sb.knif.workers.dev/sb.js',
      },
      {
        source: '/_sbh/:slug',
        destination: 'https://sb.knif.workers.dev/:slug',
      },
      {
        source: '/um.js',
        destination: 'https://umami.knif.dev/umami.js',
      },
      {
        source: '/sa.js',
        destination: 'https://sa.knif.dev/latest.js',
      },
      {
        source: '/ns.gif',
        destination: 'https://sa.knif.dev/noscript.gif',
      },
      {
        source: '/pb.js',
        destination: 'https://cdn.panelbear.com/analytics.js',
      },
    ];
  },
};
