import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='bg-custom-bg text-custom-fg'>
        <Head>
          {/* Splitbee Analytics */}
          <script async src='https://cdn.splitbee.io/sb.js'></script>
          {/* umami Analytics */}
          <script
            async
            defer
            data-website-id='0979fa61-3d1e-4064-bbaa-660768576a2f'
            src='https://umami.knif.dev/umami.js'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Simple Analytics */}
          <script async defer src='https://sa.knif.dev/latest.js'></script>
          <noscript>
            <img src='https://sa.knif.dev/noscript.gif' alt='' />
          </noscript>
        </body>
      </Html>
    );
  }
}
