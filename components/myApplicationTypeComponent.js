import Image from "next/image";
import mirror0 from "../assets/landing/mirror0.png";
import mirror1 from "../assets/landing/mirror1.png";
import mirror2 from "../assets/landing/mirror2.png";
import { useDispatch, useSelector } from "react-redux";
import MintComponent from "./mintComponent";

export default function MyApplicationTypeComponent(props) {
  const mirrors = [mirror0, mirror1, mirror2];

  const dispatch = useDispatch();
  async function buyToken() {
    alert("comprando");
  }

  async function soulboundToken() {
    alert("mintitng");
  }

  return (
    <div className="mt-24 flex ">
      <div className="relative mx-auto bg-neutral-900/50 w-full">
        <div className="relative overflow-hidden h-1/2 md:h-full md:absolute md:left-0 md:w-1/2 lg:w-1/2">
          <Image
            className="h-full w-full object-fill"
            src={mirrors[props.application.type]}
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-20 sm:py-28 lg:py-36 lg:px-8 ">
          <div className=" ml-auto w-1/2  lg:w-1/2 lg:pl-12 lg:pr-0 xl:pl-20">
            <h2 className="text-base font-semibold leading-7 text-team-titles">
              You soulbound result
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {props.application.type === 0
                ? "Allow List"
                : props.application.type === 1
                ? "White List"
                : props.application.type === 2
                ? "Public Sale"
                : "Without Soulbound"}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300 ">
              {props.phase === 0
                ? "The minting process has not yet started. Follow us on our networks to stay up to date with the news."
                : props.phase === 1
                ? "The minting process is active for those who entered the ALLOW LIST during Soulbound."
                : props.phase === 2
                ? "The minting process is active for those who entered the ALLOW LIST or WHITE LIST during Soulbound."
                : "Mint open to the public. Mint and join the invictus order!"}
            </p>
            <div className="mt-8">
              <MintComponent
                phase={props.phase}
                application={props.application}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
