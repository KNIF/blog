module.exports = {
  images: {
    domains: ['og-image.now.sh'],
  },
  async rewrites() {
    return [
      {
        source: '/sb.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_sbh/:slug',
        destination: 'https://hive.splitbee.io/:slug',
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
    ];
  },
};
