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
  const posts = [
    {
      title: "Dynamic Art",
      href: "#",
      category: { name: "01.", href: "#" },
      description:
        "With 79 unique base models and well over 100 personalizing traits, the art behind Knights is some of the most dynamic and complex of any NFT project ever created.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "6 min",
      author: {
        name: "Roel Aufderehar",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Evolving Blockchain Technology",
      href: "#",
      category: { name: "02.", href: "#" },
      description:
        "Iron Hills is committed to pushing the boundaries of what is possible with web3 technology and setting new standards for safety, education, and accountability within this emerging industry.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "4 min",
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Every Knight Has A Voice",
      href: "#",
      category: { name: "03.", href: "#" },
      description:
        "Communication, transparency, and accessibility are among the most important values at Iron Hills. From the greenest Guard to the highest ranking Grand Marshall, all Knights have a say in the development of the Knights Task Force.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 bg-gradient-to-b from-[#0D0A08] to-[#100d0a]">
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
                  Spiral Knights. With that goal not being within reach at this
                  time, we have positioned ourselves to focus on our strength:
                  innovation within web3. Each member of our team has different
                  backgrounds, come from different places, and carry a wide
                  variety of skills. We believe that these different
                  perspectives are crucial to long-term innovation.
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
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden">
              <div className="flex flex-1 flex-col justify-between bg-orange-900/20 p-6">
                <div className="flex-1">
                  <a href={post.href} className="mt-2 block">
                    <p className="text-2xl font-semibold text-white">
                      {post.title}
                    </p>
                    <p className="mt-3 sm:text-lg text-gray-200">
                      {post.description}
                    </p>
                  </a>
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
              <Image src={p1} className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p2} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p3} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p4} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p5} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p6} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p7} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p8} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p9} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p10} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p1} className="object-fill h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p2} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p3} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p4} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p5} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p6} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p7} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p8} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p9} className="object-fill  h-full" />
            </div>
            <div className="h-80 flex items-center bg-orange-900/20 justify-center">
              <Image src={p10} className="object-fill  h-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
