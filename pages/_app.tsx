// @ts-nocheck
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import GeneralState from "../state/general/general.state";

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      window.gtag("config", process.env.GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <GeneralState>
      <Component {...pageProps} />
    </GeneralState>
  );
}

export default App;
