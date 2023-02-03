import Image from "next/image";
import r1 from "../assets/landing/roadmap/Roadmap-Tree1.png";
import r2 from "../assets/landing/roadmap/Roadmap-Tree2.png";
import r3 from "../assets/landing/roadmap/Roadmap-Tree3.png";

export default function ProcessComponent() {
  return (
    <div id="roadmap" className="  lg:overflow-hidden pb-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="pt-24 flex">
          <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">ROADMAP</span>
          </h1>
        </div>

        <nav aria-label="Progress">
          <div className="relative mx-auto max-w-7xl ">
            <div className="mx-auto mt-12 grid max-w-xl gap-5 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-1 flex-col justify-between bg-panel-boxes rounded-sm p-6">
                  <div className="flex-1">
                    <div className="mt-2 block relative h-96">
                      <div className="text-2xl font-semibold text-white">
                        Establish the Foundation
                      </div>
                      <div className="mt-3 sm:text-lg text-white">
                        <ul className="list-disc ml-3">
                          <li>
                            <span>Knights</span>
                          </li>
                          <li>
                            <span>The Altar</span>
                          </li>
                          <li>
                            <span>Knights’ Essences</span>
                          </li>
                          <li>
                            <span>Knights’ Blessings</span>
                          </li>
                        </ul>
                      </div>
                      <Image
                        className="absolute bottom-0 right-0 h-60 w-60"
                        src={r1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-1 flex-col justify-between bg-panel-boxes rounded-sm p-6">
                  <div className="flex-1">
                    <div className="mt-2 block relative h-96">
                      <div className="text-2xl font-semibold text-white">
                        Develop, Educate, and Empower
                      </div>
                      <div className="mt-3 sm:text-lg text-white">
                        <ul className="list-disc ml-3">
                          <li>
                            <span>Trait based utility</span>
                          </li>
                          <li>
                            <span>Wallet security tools</span>
                          </li>
                          <li>
                            <span>Dynamic royalties</span>
                          </li>
                        </ul>
                      </div>
                      <Image
                        className="absolute bottom-0 right-0 h-60 w-60"
                        src={r2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-1 flex-col justify-between bg-panel-boxes rounded-sm p-6">
                  <div className="flex-1">
                    <div className="mt-2 block relative h-96">
                      <div className="text-2xl font-semibold text-white">
                        Charge Into the Unknown
                      </div>
                      <div className="mt-3 sm:text-lg text-white">
                        <ul className="list-disc ml-3">
                          <li>
                            <span>
                              Explore the intersection of blockchain technology
                              and video games
                            </span>
                          </li>
                        </ul>
                      </div>

                      <Image
                        className="absolute bottom-0 right-0 h-60 w-60"
                        src={r3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
