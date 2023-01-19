import Image from "next/image";
import heroImg from "../assets/landing/badge.png";
import heroBack from "../assets/landing/banner.png";
import ConnectWalletComponent from "./connectWalletComponent";

export default function HeroComponent() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <main className="relative bg-[#0a0908] pb-12 pt-12">
      <div className="absolute inset-0 mx-auto  max-w-7xl">
        <Image
          className="h-full w-full object-cover "
          src={heroBack}
          alt="back iron hills"
        />
        <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      </div>
      <main className=" relative mx-auto  max-w-7xl px-4 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl flex    lg:col-span-6 lg:text-left">
            <div className="my-auto ">
              <h1 className="mt-4 uppercase text-2xl font-bold tracking-tight my-auto text-white sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl">
                <span className="block text-gray-200">Hail Fellow Knights</span>
                <span className="block text-white">
                  We want YOU to enlist in the Knights Task Force!
                </span>
              </h1>

              <div className="mt-10 sm:mt-12">
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
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
