import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='bg-custom-bg text-custom-fg'>
        <Head>
          {/* Splitbee Analytics */}
          <script async data-api='/_sbh' src='/sb.js'></script>

          {/* umami Analytics */}
          <script
            async
            defer
            data-website-id='89d830f0-49ac-4dd0-a884-aa5dcae8a9ad'
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
