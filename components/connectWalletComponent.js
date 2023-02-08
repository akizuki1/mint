import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../services/authService";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  getUserData,
  modalApplication,
} from "../redux/actions/web3DataActions";
import Link from "next/link";

export default function ConnectWalletComponent(props) {
  const dispatch = useDispatch();
  const [{ wallet, connecting, connected }, connect, disconnect] =
    useConnectWallet();
  const applicationStatus = useSelector(
    (store) => store.web3Data.applicationStatus
  );
  const userData = useSelector((store) => store.web3Data.userData);

  const [ethersProvider, setProvider] = useState(undefined);
  const [user, setUser] = useLocalStorage("user", null);
  const [accessToken, setAccessToken] = useLocalStorage("jwtToken", null);
  const [
    {
      chains, // the list of chains that web3-onboard was initialized with
      connectedChain, // the current chain the user's wallet is connected to
      settingChain, // boolean indicating if the chain is in the process of being set
    },
    setChain, // function to call to initiate user to switch chains in their wallet
  ] = useSetChain();

  async function authAccount(provider) {
    const message =
      "Let those who would seek admission gaze deep within the glass, for therein lies the revelation of their fate. &nbsp This signature does not cost any gas. By signing, you are agreeing to Iron Hills’ Terms of Service";

    const signature = await provider
      .getSigner(wallet.accounts[0].address)
      .signMessage(message);

    if (signature) {
      const res = await AuthService(
        wallet.accounts[0].address,
        signature,
        message
      );
      if (res) {
        setUser(res.user);
        setAccessToken(res.accessToken);
        dispatch(getUserData(wallet.accounts[0].address, res.accessToken));
      }
    }
  }

  useEffect(() => {
    if (wallet?.provider && !connecting) {
      const provider = new ethers.providers.Web3Provider(
        wallet.provider,
        "any"
      );

      authAccount(provider);
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

  const Connect = () => {
    return (
      <div>
        <div>
          <button
            onClick={() => connect()}
            className="flex w-full items-center justify-center rounded-sm  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
          >
            {props.nav === true ? "CONNECT" : "APPLY NOW"}
          </button>
        </div>
      </div>
    );
  };

  const ConnectNav = () => {
    return (
      <div>
        <div>
          <button
            onClick={() => connect()}
            className="flex w-full items-center justify-center rounded-sm  border-solid border-2 border-buttons bg-buttons px-4 py-1 text-md font-medium text-white hover:bg-blues-600  "
          >
            {props.nav === true ? "CONNECT" : "APPLY NOW"}
          </button>
        </div>
      </div>
    );
  };

  const Done = () => {
    return (
      <div className="flex">
        {/* <div className=" ">
          <div className="flex w-full items-center justify-center rounded-sm  px-8 py-3 text-md font-medium text-white  ">
            ALREADY APPLIED
          </div>
        </div> */}
        <div className=" ">
          <div className="flex w-full items-center justify-center rounded-sm bg-buttons  px-8 py-3 text-md font-medium  ">
            <Link
              className="text-white hover:text-white"
              href={
                "https://testnets.opensea.io/assets/goerli/0x46Db79ad52f4AB71A7176C011Ec9C79172873fE8/" +
                userData.token
              }
              target={"_blank"}
              rel="noreferrer"
            >
              VIEW ON OPENSEA
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const Application = () => {
    return (
      <div>
        <div
          onClick={() =>
            dispatch(getUserData(wallet.accounts[0].address, accessToken))
          }
          className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
        >
          CONTINUE APPLICATION
        </div>
      </div>
    );
  };

  const Disconnect = () => {
    return (
      <div>
        <button
          onClick={() => disconnect({ label: wallet.label })}
          className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
        >
          DISCONNECT
        </button>
      </div>
    );
  };
  const DisconnectNav = () => {
    return (
      <div>
        <button
          onClick={() => disconnect({ label: wallet.label })}
          className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-4 py-1 text-md font-medium text-white hover:bg-blues-600  "
        >
          DISCONNECT
        </button>
      </div>
    );
  };
  const Connecting = () => {
    return (
      <div>
        <div className="flex gap-1 w-full items-center justify-center rounded-sm    px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 ">
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
  if (props.nav === true) {
    if (!wallet) {
      return <ConnectNav />;
    } else {
      return <DisconnectNav />;
    }
  }

  if (wallet && applicationStatus !== "mint done") {
    return <Application />;
  }

  if (wallet && applicationStatus === "mint done") {
    return <Done />;
  }
  if (!wallet) {
    return <Connect />;
  }
}
