import Image from "next/image";
import mirror1 from "../assets/landing/mirror1.png";
import mirror2 from "../assets/landing/mirror2.png";
import mirror3 from "../assets/landing/mirror3.png";
import { useDispatch, useSelector } from "react-redux";
import MintComponent from "./mintComponent";

export default function MyApplicationTypeComponent(props) {
  const mirrors = [mirror1, mirror2, mirror3];

  return (
    <div className="mt-24 flex ">
      <div className="relative mx-auto bg-neutral-900/50 w-full">
        <div className="relative overflow-hidden h-1/2 md:h-full md:absolute md:left-0 md:w-1/2 lg:w-1/2">
          <Image
            className="h-full w-full object-fill"
            src={mirrors[props.application.type - 1]}
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-20 sm:py-28 lg:py-36 lg:px-8 ">
          <div className=" ml-auto w-1/2  lg:w-1/2 lg:pl-12 lg:pr-0 xl:pl-20">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {props.application.type === 1
                ? "You are Allowlisted!"
                : props.application.type === 2
                ? "You are Waitlisted!"
                : props.application.type === 3
                ? "You are in the Public Sale!"
                : null}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300 ">
              {props.phase === 0
                ? "Allowlist mint is starting soon! Make sure to follow us on our socials below for updates and more information."
                : props.phase === 1
                ? "Mint is now live for the Allowlist. If you are on the Allowlist, you can mint up to 2 per Allowlisted wallet."
                : props.phase === 2
                ? "Mint is now live for the Waitlist. If you are on the Waitlist, you can mint up to 2 per Waitlisted wallet. If you are on the Allowlist and did not mint your full allocation during the Allowlist phase, you can mint the remainder of that allocation now."
                : "Mint is now open to everyone! You can mint up to 2 per wallet. If you are on the Allowlist or Waitlist, you can mint an additional 1."}
            </p>
            <div className="mt-8">
              <MintComponent
                phase={props.phase}
                application={props.application}
                totalSold={props.totalSold}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
