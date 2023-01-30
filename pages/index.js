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
    <div className="bg-background only:min-h-screen z-0 w-screen">
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
