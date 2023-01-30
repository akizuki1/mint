import Image from "next/image";
import p1 from "../assets/landing/scroll/Archaic Warden Sample.png";
import p2 from "../assets/landing/scroll/Archangel Sample.png";
import p3 from "../assets/landing/scroll/Nightmare Hunter Sample.png";
import p4 from "../assets/landing/scroll/Commander Sample.png";
import p5 from "../assets/landing/scroll/Disciple Sample.png";
import p6 from "../assets/landing/scroll/EOD Specialist Sample.png";
import p7 from "../assets/landing/scroll/Guard Sample.png";
import p8 from "../assets/landing/scroll/Qilin Sample.png";
import p9 from "../assets/landing/scroll/Shimmering Samuarai Sample.png";
import p10 from "../assets/landing/scroll/Sheriff Sample.png";
import about from "../assets/landing/about.png";
import ConnectWalletComponent from "./connectWalletComponent";
export default function AboutComponent() {
  const images = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
  ];

  const features = [
    {
      title: "Dynamic Art",
      description:
        "With 79 unique base models and well over 100 personalizing traits, the art behind Knights is some of the most dynamic and complex of any NFT project ever created.",
    },
    {
      title: "Evolving Blockchain Technology",
      description:
        "Iron Hills is committed to pushing the boundaries of what is possible with web3 technology and setting new standards for safety, education, and accountability within this emerging industry.",
    },
    {
      title: "Every Knight Has A Voice",
      description:
        "Communication, transparency, and accessibility are among the most important values at Iron Hills. From the greenest Guard to the highest ranking Grand Marshall, all Knights have a say in the development of the Knights Task Force.",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <main id="about" className="block mx-auto max-w-7xl px-4">
      <main className=" relative mx-auto  max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl flex    lg:col-span-6 lg:text-left">
            <div className="my-auto ">
              <div className="py-24">
                <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">ABOUT US</span>
                </h1>
                <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg">
                  Iron Hills was founded in January 2022 by a team of friends
                  with the goal of acquiring and continuing the development of
                  Spiral Knights. While that goal is out of reach at this time,
                  that doesn&apos;t stop us from putting ourselves in a position
                  to be able to continue the development of Spiral Knights if
                  that day comes. In the meantime, we will continue to innovate
                  and develop tools to improve education, safety, and user
                  experiences within web3. <br />
                  <br /> Each member of our team has different backgrounds, come
                  from different places, and carry a wide variety of skills. We
                  believe that these different perspectives are crucial to
                  long-term innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative  sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <Image
              className=" object-fit"
              src={about}
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>

      <div className="relative mx-auto max-w-7xl ">
        <div className="mx-auto mt-12 grid max-w-xl gap-5 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col overflow-hidden">
              <div className="flex flex-1 flex-col justify-between bg-panel-boxes p-6">
                <div className="flex-1">
                  <div className="mt-2 block">
                    <p className="text-2xl font-semibold text-white">
                      {feature.title}
                    </p>
                    <p className="mt-3 sm:text-lg text-gray-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl  mt-24">
        <div className="slider">
          <div className="slide-track gap-2">
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p1} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p2} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p3} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p4} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p5} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p6} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p7} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p8} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p9} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p10} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p1} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p2} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p3} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p4} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p5} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p6} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p7} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p8} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p9} alt="nftItem" className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p10} alt="nftItem" className="object-fill h-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
