import Link from "next/link";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import {
  allowlistMint,
  publicMint,
  waitlistMint,
} from "../redux/actions/web3DataActions";
import { useConnectWallet } from "@web3-onboard/react";
import Countdown from "react-countdown";

export default function MintComponent(props) {
  const mintProcess = useSelector((store) => store.web3Data.mintProcess);

  const FollowButtons = () => {
    return (
      <div className="w-full mt-5 flex">
        <div className="flex mx-auto items-center gap-3">
          <Link
            href="https://discord.gg/invictusorder"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e2e4e6"
                d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
              />
            </svg>{" "}
          </Link>
          <Link
            href="https://twitter.com/invictusorder"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e2e4e6"
                d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9c0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  };

  const SoldOut = () => {
    return (
      <div>
        <div>
          <div className="flex w-full items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
            SOLD OUT
          </div>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300 ">
          Our mint process is over. follow for more
        </p>
        <FollowButtons />
      </div>
    );
  };

  const UnstartedMint = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Mint />;
    } else {
      return (
        <div>
          <div>
            <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
              Mint start in {hours}h:{minutes}m:{seconds}s
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-gray-300 ">
            Our minting process starts soon. follow for more
          </p>
          <FollowButtons />
        </div>
      );
    }
  };

  const MaxMint = () => {
    return (
      <div>
        <div>
          <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
            Max mint reached
          </div>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300 ">
          Attentive to next phases for more mint. follow for news
        </p>
        <FollowButtons />
      </div>
    );
  };

  const WaitlistPhaseMint = () => {
    return (
      <div>
        <div>
          <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
            Wait your turn
          </div>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300 ">
          The mint will be enabled when your phase is active. follow for news
        </p>
        <FollowButtons />
      </div>
    );
  };

  const Mint = () => {
    const dispatch = useDispatch();
    const [{ wallet }] = useConnectWallet();
    const amountMint = [
      { quantity: 1, name: "1 Token" },
      { quantity: 2, name: "2 Tokens" },
    ];
    const [selectedAmount, setSelectedAmount] = useState(amountMint[0]);
    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }

    function mint() {
      const proof = props.application.proof;
      const quantity = selectedAmount.quantity;

      switch (props.phase) {
        case 1:
          dispatch(allowlistMint(wallet, proof, quantity));
          break;
        case 2:
          dispatch(waitlistMint(wallet, proof, quantity));
          break;
        case 3:
          dispatch(publicMint(wallet, quantity));
          break;
      }
    }
    return (
      <div>
        {mintProcess === "none" ? (
          <div className="flex gap-3">
            <div className=" w-1/5 uppercase items-center justify-center  ">
              {props.application.allowance > 1 ? (
                <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                  {({ open }) => (
                    <>
                      <div className="relative">
                        <Listbox.Button className="relative w-full cursor-default rounded-sm  border-solid border-2 md:py-4 pl-3 pr-1 text-left text-gray-300  sm:text-sm sm:leading-6">
                          <span className="block truncate">
                            {selectedAmount.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-buttons"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {amountMint.map((amount) => (
                              <Listbox.Option
                                key={amount.quantity}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "bg-buttons text-white"
                                      : "text-gray-900",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={amount}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "block truncate"
                                      )}
                                    >
                                      {amount.quantity}
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              ) : (
                <div className="relative w-full rounded-sm  flex border-solid border-2 md:py-4 text-left text-gray-300  sm:text-sm sm:leading-6">
                  <span className="block truncate mx-auto">1 Token</span>
                </div>
              )}
            </div>
            <div
              onClick={() => mint()}
              className="flex w-4/5 uppercase items-center justify-center rounded-sm  border-solid  cursor-pointer border-buttons bg-buttons  border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 "
            >
              Mint
            </div>
          </div>
        ) : null}

        {mintProcess === "pending" ? (
          <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid   border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
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
            </svg>{" "}
            Minting
          </div>
        ) : null}

        {mintProcess === "success" ? (
          <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid   border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
              />
            </svg>
            Mint success
          </div>
        ) : null}
        {mintProcess === "error" ? (
          <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid   border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
              />
            </svg>
            Mint failed
          </div>
        ) : null}
        <p className="mt-6 text-base leading-7 text-gray-300 ">
          Get your tokens now. follow for more
        </p>
        <FollowButtons />
      </div>
    );
  };

  if (props.totalSold > 5000) {
    return <SoldOut />;
  }

  if (props.phase === 0) {
    return <Countdown date={Date.now() + 150000} renderer={UnstartedMint} />;
  }

  if (props.phase < props.application.type) {
    return <WaitlistPhaseMint />;
  }
  if (
    props.application.allowance > 0 &&
    props.phase >= props.application.type
  ) {
    return <Mint />;
  }
  if (props.application.allowance === 0) {
    return <MaxMint />;
  }
}
