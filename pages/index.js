import AboutComponent from "../components/aboutComponent";
import CallToActionComponent from "../components/callToActionComponent";
import FooterComponent from "../components/footerComponent";
import HeroComponent from "../components/heroComponent";
import NavBarComponent from "../components/navBarComponent";
import ProcessComponent from "../components/processComponent";
import TeamComponent from "../components/teamComponent";
import FaqComponent from "../components/faqComponent";
import ModalQuestionsComponent from "../components/modalQuestionsComponent";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0C0A08] via-[#090A0E] to-[#090A0E] only:min-h-screen  w-screen">
      <NavBarComponent />
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
