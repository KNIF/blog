import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='bg-custom-bg text-custom-fg'>
        <Head>
          {/* umami Analytics */}
          <script
            async
            defer
            data-website-id='0033420c-73c5-4a73-8a87-f5595ed2e820'
            data-host-url='https://umami.knif.dev'
            src='/um.js'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Simple Analytics */}
          <script async defer src='/sa.js'></script>
          <noscript>
            <img src='/ns.gif' alt='No JavaScript' />
          </noscript>
        </body>
      </Html>
    );
  }
}
