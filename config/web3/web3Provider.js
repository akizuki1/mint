import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseWalletModule from "@web3-onboard/coinbase";

const INFURA_KEY = "";

const mainnet = {
  id: "0x1",
  token: "ETH",
  label: "Ethereum Mainnet",
  rpcUrl: `https://mainnet.infura.io/v3/`,
};

const chains = [mainnet];

const walletConnect = walletConnectModule({
  qrcodeModalOptions: {
    mobileLinks: [
      "rainbow",
      "metamask",
      "argent",
      "trust",
      "imtoken",
      "pillar",
    ],
  },
  connectFirstChainId: true,
});

const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true });

const wallets = [injectedModule(), walletConnect, coinbaseWalletSdk];

const appMetadata = {
  name: "Iron Hills",
  icon: "/badge.png",
  description: "We want YOU to enlist in the Invictus Order!",
  recommendedInjectedWallets: [
    { name: "MetaMask", url: "https://metamask.io" },
    { name: "Coinbase", url: "https://wallet.coinbase.com/" },
  ],
};

const web3Onboard = init({
  wallets,
  chains,
  appMetadata,
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
});

export default web3Onboard;
