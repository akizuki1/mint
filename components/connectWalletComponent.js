import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function ConnectWalletComponent(props) {
  const dispatch = useDispatch();
  const [{ wallet, connecting, connected }, connect, disconnect] =
    useConnectWallet();
  const [ethersProvider, setProvider] = useState(undefined);
  const [
    {
      chains, // the list of chains that web3-onboard was initialized with
      connectedChain, // the current chain the user's wallet is connected to
      settingChain, // boolean indicating if the chain is in the process of being set
    },
    setChain, // function to call to initiate user to switch chains in their wallet
  ] = useSetChain();
  function authAccount() {
    const message =
      "Hail Fellow KnightsWe want YOU to enlist in the Knights Task Force!";
    ethersProvider
      .getSigner(wallet.accounts[0].address)
      .signMessage(message)
      .catch((err) => {
        window.alert(
          `Failure!${err && err.message ? `\n\n${err.message}` : ""}`
        );
      });
  }

  useEffect(() => {
    if (wallet?.provider) {
      const provider = new ethers.providers.Web3Provider(
        wallet.provider,
        "any"
      );
      setProvider(provider);
    }
  }, [wallet]);

  useEffect(() => {
    if (wallet && connectedChain.id !== "0x01") {
      setChain({ chainId: "0x1" }).then((changed) => {
        if (changed) {
          chains[0].rpcUrl = wallet.provider;
        }
      });
    }
  }, [connectedChain, wallet, setChain, chains]);

  useEffect(() => {
    if (
      ethersProvider !== undefined &&
      ethersProvider !== null &&
      !connecting
    ) {
      authAccount();
    }
  }, [ethersProvider]);

  const Connect = () => {
    return (
      <div>
        <div>
          <button
            onClick={() => connect()}
            className="flex w-full items-center justify-center  border-solid border-2 border-amber-700 bg-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
          >
            ENLIST NOW
          </button>
        </div>
      </div>
    );
  };

  const ConnectBuy = () => {
    return (
      <div>
        <div>
          <button
            onClick={() => connect()}
            className="inline-block rounded-md bg-gray-800 px-3 py-2 text-md font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-900 hover:bg-gray-900 hover:ring-gray-900 text-center w-full mt-8"
          >
            Connect to buy pack
          </button>
        </div>
      </div>
    );
  };

  const Disconnect = () => {
    return (
      <div>
        <div className="flex w-full items-center justify-center  border-solid border-2 border-amber-700 px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 ">
          ALREADY ENLIST
        </div>
      </div>
    );
  };

  const Connecting = () => {
    return (
      <div>
        <div className="flex gap-1 w-full items-center justify-center    px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="white" strokeLinecap="round" strokeWidth="2">
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
          CONNECTING
        </div>
      </div>
    );
  };

  if (connecting) {
    return <Connecting />;
  }

  if (wallet) {
    return <Disconnect />;
  }

  return <Connect />;
}
