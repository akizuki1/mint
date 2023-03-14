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
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-600 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-neutral-800-800">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
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
