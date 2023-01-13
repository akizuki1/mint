import AboutComponent from "../components/aboutComponent";
import CallToActionComponent from "../components/callToActionComponent";
import FooterComponent from "../components/footerComponent";
import HeroComponent from "../components/heroComponent";
import NavBarComponent from "../components/navBarComponent";
import ProcessComponent from "../components/processComponent";
import TeamComponent from "../components/teamComponent";
import FaqComponent from "../components/faqComponent";

export default function Home() {
  return (
    <div className="bg-[#100d0a] min-h-screen">
      <NavBarComponent/>
      <HeroComponent/>
      <AboutComponent/>
    <ProcessComponent/>
    <TeamComponent/>
    <FaqComponent/>
    <CallToActionComponent/>
    <FooterComponent/>

    </div>
   
  )
}
