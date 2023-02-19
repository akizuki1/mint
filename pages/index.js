import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import { ethers } from "ethers";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../services/authService";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  getUserData,
} from "../redux/actions/web3DataActions";

import AboutComponent from "../components/aboutComponent";
import CallToActionComponent from "../components/callToActionComponent";
import FooterComponent from "../components/footerComponent";
import HeroComponent from "../components/heroComponent";
import ProcessComponent from "../components/processComponent";
import TeamComponent from "../components/teamComponent";
import FaqComponent from "../components/faqComponent";
import ModalQuestionsComponent from "../components/modalQuestionsComponent";

export default function Home() {
  const dispatch = useDispatch();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const applicationStatus = useSelector(
    (store) => store.web3Data.applicationStatus
  );
  const userData = useSelector((store) => store.web3Data.userData);

  const [ethersProvider, setEthersProvider] = useState(null);
  const [user, setUser] = useLocalStorage("user", null);
  const [accessToken, setAccessToken] = useLocalStorage("jwtToken", null);
  const [authenticating, setAuthenticating] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [shouldAuthenticate, setShouldAuthenticate] = useState(false);
  const [
    {
      chains, // the list of chains that web3-onboard was initialized with
      connectedChain, // the current chain the user's wallet is connected to
    },
    setChain // function to call to initiate user to switch chains in their wallet
  ] = useSetChain();

  const authAccount = useCallback(async () => {
    setAuthenticating(true);
    try {
      const message =
        "Let those who would seek admission gaze deep within the glass, for therein lies the revelation of their fate.";

      const signature = await ethersProvider
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
          setAuthenticated(true);
          dispatch(getUserData(wallet.accounts[0].address, res.accessToken));
          setAuthenticating(false);
        }
      }
    } catch (error) {
      setAuthenticated(false);
      setAuthenticating(false);
    }
  }, [dispatch, setAccessToken, setUser, ethersProvider, wallet?.accounts]);

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
    if (wallet?.provider) {
      const provider = new ethers.providers.Web3Provider(
        wallet.provider,
        "any"
      );
      setEthersProvider(provider);
      setShouldAuthenticate(true);
    }
  }, [wallet]);

  useEffect(() => {
    if (!authenticating && shouldAuthenticate) {
      setShouldAuthenticate(false);
      authAccount();
    }
  }, [authenticating, shouldAuthenticate, authAccount]);

  const updateUser = () => {
    dispatch(getUserData(wallet.accounts[0].address, accessToken));
  }

  const disconnectWallet = () => {
    disconnect({label: wallet.label});
    setAuthenticated(false);
    setAuthenticating(false);
    setAccessToken(null);
    setUser(null);
  }

  const authenticate = async () => {
    await authAccount();
  }

  return (
    <div className="bg-background only:min-h-screen overflow-x-hidden z-0">
      <HeroComponent
        authenticating={authenticating}
        authenticated={authenticated}
        getUserData={updateUser}
        connecting={connecting}
        ethersProvider={ethersProvider}
        applicationStatus={applicationStatus}
        authAccount={authenticate}
        connect={connect}
        disconnect={disconnectWallet}
        wallet={wallet}
        userData={userData}
      />
      <AboutComponent />
      <ProcessComponent />
      <TeamComponent />
      <FaqComponent />
      <CallToActionComponent />
      <FooterComponent />
      <ModalQuestionsComponent />
    </div>
  );
}
