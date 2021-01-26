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
            data-website-id='89d830f0-49ac-4dd0-a884-aa5dcae8a9ad'
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
