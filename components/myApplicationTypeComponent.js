import Image from "next/image";
import mirror1 from "../assets/landing/mirror1.png";
import mirror2 from "../assets/landing/mirror2.png";
import mirror3 from "../assets/landing/mirror3.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function MyApplicationTypeComponent(props) {
  const mintProcess = useSelector((store) => store.web3Data.mintProcess);
  const [countMint, setCountMint] = useState(1);
  const dispatch = useDispatch();
  async function buyToken() {
    alert("comprando");
  }

  async function mintToken() {
    alert("mintitng");
  }

  return (
    <div className="pt-24 flex">
      {(() => {
        switch (props.application.type) {
          case 1:
            return (
              <div className="relative bg-neutral-900/50">
                <div className="relative overflow-hidden h-1/2 md:h-full md:absolute md:left-0 md:w-1/2 lg:w-1/2">
                  <Image
                    className="h-full w-full object-cover"
                    src={mirror1}
                    alt=""
                  />
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8 ">
                  <div className="pr-6 pl-6 md:ml-auto md:w-1/2 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32 ">
                    <h2 className="text-base font-semibold leading-7 text-team-titles">
                      Soulbound result
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Rejected
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                      The Sector Task Force has begun to assemble to discover
                      the mystery of The Altar. Only Prismatians with a
                      reflection will be enlisted into the Sector Task Force.
                    </p>
                    <div className="mt-8">
                      <div>
                        <div className="flex w-full items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
                          WAIT TO PUBLIC SALE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 2:
            return (
              <div className="relative bg-neutral-900/50">
                <div className="relative overflow-hidden h-1/2 md:h-full md:absolute md:left-0 md:w-1/2 lg:w-1/2">
                  <Image
                    className="h-full w-full object-cover"
                    src={mirror2}
                    alt=""
                  />
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8 ">
                  <div className="pr-6 pl-6 md:ml-auto md:w-1/2 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32 ">
                    <h2 className="text-base font-semibold leading-7 text-team-titles">
                      Soulbound result
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      White list
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                      The Sector Task Force has begun to assemble to discover
                      the mystery of The Altar. Only Prismatians with a
                      reflection will be enlisted into the Sector Task Force.
                    </p>
                    <div className="mt-8">
                      <div>
                        <div className="flex w-full items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
                          WAIT FOR EARLY ACCESS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 3:
            return (
              <div className="relative bg-neutral-900/50">
                <div className="relative overflow-hidden h-1/2 md:h-full md:absolute md:left-0 md:w-1/2 lg:w-1/2">
                  <Image
                    className="h-full w-full object-cover"
                    src={mirror3}
                    alt=""
                  />
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8 ">
                  <div className="pr-6 pl-6 md:ml-auto md:w-1/2 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32 ">
                    <h2 className="text-base font-semibold leading-7 text-team-titles">
                      Soulbound result
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Aprove
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                      The Sector Task Force has begun to assemble to discover
                      the mystery of The Altar. Only Prismatians with a
                      reflection will be enlisted into the Sector Task Force.
                    </p>
                    <div className="mt-8">
                      {mintProcess === "none" && countMint < 2 ? (
                        <div>
                          <div
                            onClick={buyToken}
                            className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                          >
                            MINT
                          </div>
                        </div>
                      ) : null}
                      {mintProcess === "error" && countMint < 2 ? (
                        <div>
                          <div
                            onClick={buyToken}
                            className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                          >
                            TRY AGAIN
                          </div>
                        </div>
                      ) : null}
                      {mintProcess === "pending" ? (
                        <div>
                          <div className="flex w-full items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.5em"
                              height="1.5em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="white"
                                strokeLinecap="round"
                                strokeWidth="2"
                              >
                                <path
                                  strokeDasharray="60"
                                  strokeDashoffset="60"
                                  strokeOpacity=".3"
                                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                                >
                                  <animate
                                    fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    dur="1.3s"
                                    values="60;0"
                                  />
                                </path>
                                <path
                                  strokeDasharray="15"
                                  strokeDashoffset="15"
                                  d="M12 3C16.9706 3 21 7.02944 21 12"
                                >
                                  <animate
                                    fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    dur="0.3s"
                                    values="15;0"
                                  />
                                  <animateTransform
                                    attributeName="transform"
                                    dur="1.5s"
                                    repeatCount="indefinite"
                                    type="rotate"
                                    values="0 12 12;360 12 12"
                                  />
                                </path>
                              </g>
                            </svg>
                            PENDING
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          case 4:
            return (
              <div className="relative bg-neutral-900/50">
                <div className="relative overflow-hidden h-1/2 md:h-full md:absolute md:left-0 md:w-1/2 lg:w-1/2">
                  <Image
                    className="h-full w-full object-cover"
                    src={mirror1}
                    alt=""
                  />
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8 ">
                  <div className="pr-6 pl-6 md:ml-auto md:w-1/2 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32 ">
                    <h2 className="text-base font-semibold leading-7 text-team-titles">
                      Soulbound result 4
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Buy NFT
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Et, egestas tempus tellus etiam sed. Quam a scelerisque
                      amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                      volutpat quisque ut interdum tincidunt duis.
                    </p>
                    <div className="mt-8">
                      {mintProcess === "none" && countMint < 2 ? (
                        <div>
                          <div
                            onClick={buyToken}
                            className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                          >
                            BUY
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
        }
      })()}
    </div>
  );
}
