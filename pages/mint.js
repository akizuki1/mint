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
import MyApplicationComponent from "../components/myApplicationComponent";
import { PhaseService } from "../services/phaseService";
import { AllowlistService } from "../services/allowlistService";
import { WaitlistService } from "../services/waitlistService";
import { AllowanceService } from "../services/allowanceService";
import { TotalMintedService } from "../services/totalMintedService";

export default function Terms() {
  const [{ wallet, connecting, connected }, connect, disconnect] =
    useConnectWallet();

  const [phase, setPhase] = useState(0);
  const [application, setApplication] = useState();
  const [totalSold, setTotalSold] = useState();

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
    if (phase < 2) {
      const user = await AllowlistService(wallet.accounts[0].address);
      if (user !== undefined) {
        const allowance = await AllowanceService(wallet.accounts[0].address);
        const newUser = { ...user, type: 0, allowance: allowance };
        setApplication(newUser);
      } else {
        const user = await WaitlistService(wallet.accounts[0].address);
        if (user !== undefined) {
          const allowance = await AllowanceService(wallet.accounts[0].address);
          const newUser = { ...user, type: 1, allowance: allowance };
          setApplication(newUser);
        } else {
          const allowance = await AllowanceService(wallet.accounts[0].address);
          const user = {
            wallet: wallet.accounts[0].address,
            type: 1,
            allowance: allowance,
          };
          setApplication(user);
        }
      }
    } else {
      const user = await WaitlistService(wallet.accounts[0].address);
      if (user !== undefined) {
        const allowance = await AllowanceService(wallet.accounts[0].address);
        const newUser = { ...user, type: 1, allowance: allowance };
        setApplication(newUser);
      } else {
        const allowance = await AllowanceService(wallet.accounts[0].address);
        const user = {
          wallet: wallet.accounts[0].address,
          type: 1,
          allowance: allowance,
        };
        setApplication(user);
      }
    }
  }

  async function getPhase() {
    const phase = await PhaseService(wallet);
    if (phase) {
      setPhase(phase);
      getUserApplication();
    }
  }
  async function getSold() {
    const sold = await TotalMintedService(wallet);

    if (sold) {
      setTotalSold(sold);
    }
  }

  useEffect(() => {
    if (wallet) {
      getPhase();
      getSold();
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
              <MyApplicationComponent
                application={application}
                phase={phase}
                totalSold={totalSold}
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
