import AboutComponent from "../components/aboutComponent";
import CallToActionComponent from "../components/callToActionComponent";
import FooterComponent from "../components/footerComponent";
import HeroComponent from "../components/heroComponent";
import NavBarComponent from "../components/navBarComponent";
import ProcessComponent from "../components/processComponent";
import TeamComponent from "../components/teamComponent";
import FaqComponent from "../components/faqComponent";
import ModalQuestionsComponent from "../components/modalQuestionscomponent";
import { useState } from "react";

export default function Home() {
  const [questionsModal, setQuestionsModal] = useState(true);
  function handleChangeModal(status) {
    setQuestionsModal(status);
  }

  return (
    <div className="bg-gradient-to-b from-[#0a0908] via-[#0D0A08] to-[#100d0a] only:min-h-screen min-w-full w-screen">
      <NavBarComponent />
      <HeroComponent />
      <AboutComponent />
      <ProcessComponent />
      <TeamComponent />
      <FaqComponent />
      <CallToActionComponent />
      <FooterComponent />
      {questionsModal === true ? (
        <ModalQuestionsComponent
          handleModal={handleChangeModal}
          status={questionsModal}
        />
      ) : null}
    </div>
  );
}
