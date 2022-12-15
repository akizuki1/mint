import AboutComponent from "./components/aboutComponent";
import CallToActionComponent from "./components/callToActionComponent";
import FooterComponent from "./components/footerComponent";
import HeroComponent from "./components/heroComponent";
import NavBarComponent from "./components/navBarComponent";
import ProcessComponent from "./components/processComponent";
import TeamComponent from "./components/teamComponent";

export default function Home() {
  return (
    <div className="bg-[#06182C] h-screen">
      <NavBarComponent/>
      <HeroComponent/>
      <AboutComponent/>
    <ProcessComponent/>
    <CallToActionComponent/>
    <TeamComponent/>
    <FooterComponent/>

    </div>
   
  )
}
