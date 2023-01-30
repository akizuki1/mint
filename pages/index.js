import AboutComponent from "../components/aboutComponent";
import CallToActionComponent from "../components/callToActionComponent";
import FooterComponent from "../components/footerComponent";
import HeroComponent from "../components/heroComponent";
import NavBarComponent from "../components/navBarComponent";
import ProcessComponent from "../components/processComponent";
import TeamComponent from "../components/teamComponent";
import FaqComponent from "../components/faqComponent";
import ModalQuestionsComponent from "../components/modalQuestionsComponent";
import Head from "next/head";
export default function Home() {
  return (
    <div className="bg-background only:min-h-screen z-0 w-screen">
      <Head>
        <title>Knights by IH</title>
        <meta name="description" content="Knights by Iron Hills" />
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://knightsbyironhills.com/og.png" />
        <meta name="twitter:title" content="Knights by Iron Hills" />
        <meta name="twitter:site" content="@KnightsbyIH" />
        <meta name="twitter:creator" content="@KnightsbyIH" />
        <meta
          name="twitter:description"
          content="Knights, created by Iron Hills, is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. Knights art is inspired by the online game Spiral Knights. By owning a Knight, you have enlisted as part of the Knights Task Force, an elite squad established to solve the mystery of The Altar."
        />
        <meta property="og:title" content="Knights by Iron Hills" />
        <meta
          property="og:description"
          content="Knights, created by Iron Hills, is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. Knights art is inspired by the online game Spiral Knights. By owning a Knight, you have enlisted as part of the Knights Task Force, an elite squad established to solve the mystery of The Altar."
        />
        <meta property="og:site_name" content="Knights by Iron Hills" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://knightsbyironhills.com" />
        <meta property="og:image" content="https://knightsbyironhills.com/og.png"/>
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
