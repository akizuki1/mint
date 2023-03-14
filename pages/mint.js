import Image from "next/image";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import heroBack from "../assets/landing/bgHero.png";

import { useConnectWallet } from "@web3-onboard/react";
import MyApplicationComponent from "../components/myApplicationComponent";
import { PhaseService } from "../services/phaseService";
import { AllowlistService } from "../services/allowlistService";
import { WaitlistService } from "../services/waitlistService";
import { AllowanceService } from "../services/allowanceService";
import { TotalMintedService } from "../services/totalMintedService";
import { useSelector, useDispatch } from "react-redux";
import { changeProcessMint } from "../redux/actions/web3DataActions";

export default function Terms() {
  const [{ wallet, connecting, connected }, connect, disconnect] =
    useConnectWallet();

  const [phase, setPhase] = useState(0);
  const [application, setApplication] = useState();
  const [totalSold, setTotalSold] = useState();
  const mintProcess = useSelector((store) => store.web3Data.mintProcess);
  const dispatch = useDispatch();

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
        const allowance = await AllowanceService(wallet);
        const newUser = { ...user, type: 1, allowance: allowance };
        setApplication(newUser);
      } else {
        const user = await WaitlistService(wallet.accounts[0].address);
        if (user !== undefined) {
          const allowance = await AllowanceService(wallet);
          const newUser = { ...user, type: 2, allowance: allowance };
          setApplication(newUser);
        } else {
          const allowance = await AllowanceService(wallet);
          const user = {
            wallet: wallet.accounts[0].address,
            type: 3,
            allowance: allowance,
          };
          setApplication(user);
        }
      }
    } else {
      const user = await WaitlistService(wallet.accounts[0].address);
      if (user !== undefined) {
        const allowance = await AllowanceService(wallet);
        const newUser = { ...user, type: 1, allowance: allowance };
        setApplication(newUser);
      } else {
        const allowance = await AllowanceService(wallet);
        const user = {
          wallet: wallet.accounts[0].address,
          type: 3,
          allowance: allowance,
        };
        setApplication(user);
      }
    }
  }

  async function getPhase() {
    const phase = await PhaseService(wallet);
    setPhase(0);
    getUserApplication();
  }
  async function getSold() {
    const sold = await TotalMintedService(wallet);
    setTotalSold(sold);
  }

  useEffect(() => {
    if (wallet) {
      getPhase();
      getSold();
    }
  }, [wallet]);

  useEffect(() => {
    if (mintProcess === "success") {
      setTimeout(function () {
        getUserApplication();
        dispatch(changeProcessMint("none"));
      }, 3000);
    }
    if (mintProcess === "error") {
      setTimeout(function () {
        dispatch(changeProcessMint("none"));
      }, 3000);
    }
  }, [mintProcess]);

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
                  CONNECT WALLET
                </button>
              </div>
            </form>
          </main>
        </div>
      ) : (
        <div className="grid  z-0  max-w-7xl mx-auto">
          <div className="pt-24 flex">
            <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
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
