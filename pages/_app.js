import "../styles/globals.css";
import { wrapper } from "../redux/store";
import { Web3OnboardProvider } from "@web3-onboard/react";
import web3Onboard from "../config/web3/web3Provider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <Head>
          <title>Invictus Order</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta
            name="description"
            content="Invictus Order, created by Iron Hills, is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. Knights art is inspired by the online game Spiral Knights. By owning a Knight, you have enlisted as part of the Knights Task Force, an elite squad established to solve the mystery of The Altar."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Component {...pageProps} />
      </Web3OnboardProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
