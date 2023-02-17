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
          <title>Invictus Order by IH</title>
          <meta name="description" content="Invictus Order by Iron Hills" />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://invictusorder.com/og.png"
          />
          <meta name="twitter:title" content="Invictus Order by Iron Hills" />
          <meta name="twitter:site" content="@invictusorder" />
          <meta name="twitter:creator" content="@invictusorder" />
          <meta
            name="twitter:description"
            content="The Sector Task for has begun to assemble to discover the mystery of The Altar. Only Prismatians with a reflection will be enlisted into the Sector Task Force. The Invictus Order Application is a soulbound token that acts as your on-chain proof of submission and it will dynamically change if your application is accepted. To submit an application to join the Invictus Order, go to https://www.invictusorder.com/. For more information about the allowlist and SBT, go to https://mirror.xyz/ironhills.eth/tI53g0xxPiaYu_3Vp8oZIqPCZCfpsUnq4lpvo_YId3U."
          />
          <meta property="og:title" content="Invictus Order by Iron Hills" />
          <meta
            property="og:description"
            content="The Sector Task for has begun to assemble to discover the mystery of The Altar. Only Prismatians with a reflection will be enlisted into the Sector Task Force. The Invictus Order Application is a soulbound token that acts as your on-chain proof of submission and it will dynamically change if your application is accepted. To submit an application to join the Invictus Order, go to https://www.invictusorder.com/. For more information about the allowlist and SBT, go to https://mirror.xyz/ironhills.eth/tI53g0xxPiaYu_3Vp8oZIqPCZCfpsUnq4lpvo_YId3U."
          />
          <meta
            property="og:site_name"
            content="Invictus Order by Iron Hills"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://invictusorder.com" />
          <meta
            property="og:image"
            content="https://invictusorder.com/og.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </Web3OnboardProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
