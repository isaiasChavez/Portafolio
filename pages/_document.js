import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });

        gtag('js', new Date());

        gtag('config', 'G-XBZMPX9HMQ', {
            page_path: window.location.pathname,
        });
        `,
          }}
        />
       
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
