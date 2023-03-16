import Image from "next/image";
import mirror1 from "../assets/landing/mirror1.png";
import mirror2 from "../assets/landing/mirror2.png";
import mirror3 from "../assets/landing/badge.png";
import MintComponent from "./mintComponent";

export default function MyApplicationTypeComponent(props) {
  const mirrors = [mirror1, mirror2, mirror3];

  return (
    <div className="flex h-4/5">
      <div className="relative isolate pt-4 rounded-sm  md:border-solid border-2 border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl rounded-sm"
              src={mirrors[props.application.type - 1]}
              alt=""
            />
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
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
                : "Mint is now open to everyone! There is no maximum amount per wallet that you can mint. Art is instant reveal."}
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
