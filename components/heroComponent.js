import { useConnectWallet } from "@web3-onboard/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import heroImg from "../assets/landing/badge.png";
import heroBack from "../assets/landing/banner.png";
import { modalApplication } from "../redux/actions/web3DataActions";
import ConnectWalletComponent from "./connectWalletComponent";

export default function HeroComponent() {
  return (
    <main className="relative pb-12  min-w-screen min-h-screen  ">
      <div className="absolute inset-0  ">
        <Image
          className="h-full w-full object-cover "
          src={heroBack}
          alt="back iron hills"
        />
        <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      </div>

      <main className=" relative mx-auto grid place-items-center h-screen my-auto max-w-7xl px-4 -pt-24 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl flex    lg:col-span-6 lg:text-left">
            <div className="my-auto ">
              <h1 className="mt-4 uppercase text-2xl font-bold tracking-tight my-auto text-white sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl">
                <span className="block text-gray-200">
                  Hail fellow Knights!
                </span>
                <span className="block text-white">
                  Join the Knights Task Force!
                </span>
              </h1>

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
    </main>
  );
}
