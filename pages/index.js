import AboutComponent from "../components/aboutComponent";
import CallToActionComponent from "../components/callToActionComponent";
import FooterComponent from "../components/footerComponent";
import HeroComponent from "../components/heroComponent";
import ProcessComponent from "../components/processComponent";
import TeamComponent from "../components/teamComponent";
import FaqComponent from "../components/faqComponent";
import ModalQuestionsComponent from "../components/modalQuestionsComponent";
import Head from "next/head";
export default function Home() {
  return (
    <div className="bg-background only:min-h-screen z-0 w-screen">
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
        <meta property="og:site_name" content="Invictus Order by Iron Hills" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invictusorder.com" />
        <meta
          property="og:image"
          content="https://invictusorder.com/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeroComponent />
      <AboutComponent />
      <ProcessComponent />
      <TeamComponent />
      <FaqComponent />
      <CallToActionComponent />
      <FooterComponent />
      <ModalQuestionsComponent />
    </div>
  );
}
