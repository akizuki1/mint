import { useState } from "react";
import ModalPolicyTermsComponent from "./modalPolicyTermsComponent";

export default function FooterComponent() {
  const navigation = {
    main: [
      { name: "Twitter", href: "https://twitter.com/knightsbyih" },
      { name: "Twitch", href: "https://www.twitch.tv/knightsbyironhills" },
      { name: "Discord", href: "https://discord.gg/knightsbyironhills" },
      { name: "Youtube", href: "https://www.youtube.com/@knightsbyironhills" },
    ],
  };

  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState(1);

  function changeStatusModal(status, type) {
    setOpenModal(status);
    setType(type);
  }
  return (
    <main>
      {openModal === true ? (
        <ModalPolicyTermsComponent
          handleModal={changeStatusModal}
          status={openModal}
          type={type}
        />
      ) : null}

      <footer className="bg-[#100d0a]">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 max-w-m flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          <p className="mt-8 text-center text-base text-gray-400">
            <span
              className="cursor-pointer"
              onClick={() => changeStatusModal(true, 1)}
            >
              Privacy Policy
            </span>{" "}
            -{" "}
            <span
              className="cursor-pointer"
              onClick={() => changeStatusModal(true, 2)}
            >
              Terms of Service
            </span>
          </p>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Iron Hills LLC, All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
