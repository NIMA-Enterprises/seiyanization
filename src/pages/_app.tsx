import Script from "next/script";
import "../styles/main.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Script
        id="algolia"
        rel="preconnect"
        src={`https://${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}-dsn.algolia.net`}
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
