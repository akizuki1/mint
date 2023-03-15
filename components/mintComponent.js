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
          <Link
            href="https://opensea.io/collection/invictusorder"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#626067] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e2e4e6"
                d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12s12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081l3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528c-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199a.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962c-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132c-.026.226.017.459.125.67c.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992c.156-.274.308-.566.43-.86c.024-.052.043-.107.065-.16c.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787c0-.108-.004-.221-.014-.327c-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312a6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972a5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197a4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05l.192.054l.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202a.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017c.034.024.084.062.147.11c.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691c.065.074.127.146.192.226c.062.079.132.156.19.232c.079.104.16.212.235.324c.033.053.074.108.105.161c.096.142.178.288.257.435c.034.067.067.141.096.213c.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254c-.075.17-.161.343-.264.502c-.034.06-.075.122-.113.182c-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209c-.081.098-.16.19-.245.278c-.048.058-.1.118-.156.17c-.052.06-.108.113-.156.161c-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298c.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"
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

  const UnstartedMint = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div>
          <div>
            <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
              Mint starting soon.
            </div>
          </div>
          <FollowButtons />
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <div className="flex w-full uppercase items-center justify-center rounded-sm  border-solid b border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
              Mint starts in {days}d {hours}h:{minutes}m:{seconds}s
            </div>
          </div>
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
    const [agreeTyC, setAgreeTyC] = useState(false);
    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }

    function getPrice() {
      switch (props.phase) {
        case 1:
          return (0.06 * selectedAmount.quantity).toString() + " ETH";
        case 2:
          return (0.07 * selectedAmount.quantity).toString() + " ETH";
        case 3:
          return (0.08 * selectedAmount.quantity).toString() + " ETH";
      }
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
          <div className="">
            <div className="relative flex justify-center my-4">
              <div className="flex h-5 items-center">
                <input
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  value={agreeTyC}
                  onChange={() => setAgreeTyC(!agreeTyC)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm flex">
                <span id="comments-description" className="text-white mx-auto">
                  I agree to the{" "}
                  <Link
                    className="cursor-pointer text-buttons"
                    href={"/policy"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </Link>
                  ,{" "}
                  <Link
                    className="cursor-pointer text-buttons"
                    href={"/terms"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terms of Use
                  </Link>
                  , and{" "}
                  <Link
                    className="cursor-pointer text-buttons"
                    href={"/ownership_agreement"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Invictus Order Ownership Agreement
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex gap-3 h-full">
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
              {agreeTyC ? (
                <div
                  onClick={() => mint()}
                  className="flex w-4/5 uppercase items-center justify-center rounded-sm  border-solid  cursor-pointer border-buttons bg-buttons  border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 "
                >
                  Mint {"  "} {getPrice()}
                </div>
              ) : (
                <div className="flex w-4/5 uppercase items-center justify-center rounded-sm  border-solid   border-gray-600 bg-gray-600  border-2  px-8 py-3 text-md font-medium text-white  md:py-4 md:px-10 ">
                  Mint {"  "} {getPrice()}
                </div>
              )}
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
        <FollowButtons />
      </div>
    );
  };
  console.log(props.phase);
  if (props.totalSold > 5000) {
    return <SoldOut />;
  }

  if (props.phase === 0 && props.application.type === 1) {
    return (
      <Countdown
        date={Date.parse("March 15 2023 15:00:00 UTC")}
        renderer={UnstartedMint}
      />
    );
  }

  if (props.phase < 2 && props.application.type === 2) {
    return (
      <Countdown
        date={Date.parse("March 16 2023 15:00:00 UTC")}
        renderer={UnstartedMint}
      />
    );
  }

  if (props.phase < 3 && props.application.type === 3) {
    return (
      <Countdown
        date={Date.parse("March 17 2023 15:00:00 UTC")}
        renderer={UnstartedMint}
      />
    );
  }
  if (
    props.application.allowance > 0 &&
    props.phase >= props.application.type
  ) {
    return <Mint />;
  }
  if (props.phase > 0 && props.application.allowance === 0) {
    return <MaxMint />;
  }
}
