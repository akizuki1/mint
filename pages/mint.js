import { CSVLink, CSVDownload } from "react-csv";
import Image from "next/image";
import Link from "next/link";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import mintImg from "../assets/landing/mirror1.png";
import heroBack from "../assets/landing/bgHero.png";

import { useConnectWallet } from "@web3-onboard/react";
import { AdminAuthService } from "../services/authService";
import useLocalStorage from "../hooks/useLocalStorage";
import { GetApplicationService } from "../services/getUserApplicationService";
import MyApplicationTypeComponent from "../components/myApplicationTypeComponent";

export default function Terms() {
  const [{ wallet, connecting, connected }, connect, disconnect] =
    useConnectWallet();

  const [phase, setPhase] = useState(0);
  const [application, setApplication] = useState();
  const [accessToken, setAccessToken] = useLocalStorage("jwtToken", null);

  async function login() {
    await connect();
    if (wallet?.provider && !connecting) {
      const provider = new ethers.providers.Web3Provider(
        wallet.provider,
        "any"
      );
    }
  }

  async function getUserApplication() {
    const user = await GetApplicationService(
      wallet.accounts[0].address,
      accessToken
    );
    setApplication(user);
  }

  async function getPhase() {
    setPhase(2);
  }

  useEffect(() => {
    if (wallet) {
      console.log(wallet.accounts[0].address);
      getUserApplication();
      getPhase();
    }
  }, [wallet]);

  return (
    <div className="relative isolate min-h-screen bg-gray-900">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={heroBack}
        alt="back iron hills"
      />
      <div className="absolute inset-0 bg-neutral-900/30 mix-blend-multiply" />
      {!wallet ? (
        <div className="grid  z-0 h-screen ">
          <main className=" relative mx-auto grid place-items-center h-screen my-auto max-w-7xl z-0 ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
              className="space-y-6 w-96 bg-background/90 rounded-sm p-4"
            >
              <div className=" max-w-sm mx-auto gap-3">
                <button
                  type="submit"
                  className="flex w-full mx-auto items-center justify-center rounded-sm border-solid border-2 border-buttons bg-buttons px-8 py-3 text-xl font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
                >
                  CONNECT TO MINT
                </button>
              </div>
            </form>
          </main>
        </div>
      ) : (
        <div className="grid  z-0  max-w-7xl mx-auto">
          <div className="pt-24 flex">
            <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">MINT</span>
            </h1>
          </div>
          {application !== undefined ? (
            <>
              <MyApplicationTypeComponent
                application={application}
                phase={phase}
              />
            </>
          ) : (
            <p>loading</p>
          )}
        </div>
      )}
    </div>
  );
}
