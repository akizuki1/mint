/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import NavBarComponent from "./navBarComponent";
import ConnectWalletComponent from "./connectWalletComponent";
import Image from "next/image";
import heroImg from "../assets/landing/badge.png";
import heroBack from "../assets/landing/bgHero.png";

import heroMessage from "../assets/landing/message.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden h-screen bg-gray-900">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={heroBack}
        alt="back iron hills"
      />
      <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      <div className="grid  z-0 ">
        <div className="z-20">
          <NavBarComponent />
        </div>

        <main className=" relative mx-auto grid place-items-center h-screen my-auto max-w-7xl px-4 z-0 ">
          <div className="lg:grid lg:grid-cols-12 -mt-32 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl flex    lg:col-span-6 lg:text-left">
              <div className="my-auto ">
                <Image
                  className="h-full w-full object-fit"
                  src={heroMessage}
                  alt="Picture of the author"
                />
                <div className="mt-10 sm:mt-12">
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-3">
                    <div className="">
                      <ConnectWalletComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <Image
                className="h-full w-full object-fit"
                src={heroImg}
                alt="Picture of the author"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
