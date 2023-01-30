import "../styles/globals.css";
import { wrapper } from "../redux/store";
import { Web3OnboardProvider } from "@web3-onboard/react";
import web3Onboard from "../config/web3/web3Provider";

function MyApp({ Component, pageProps }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Component {...pageProps} />
    </Web3OnboardProvider>
  );
}

export default wrapper.withRedux(MyApp);
