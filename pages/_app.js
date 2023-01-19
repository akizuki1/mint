import "../styles/globals.css";
import "../assets/css/plugins/bootstrap.min.css";
import "../assets/css/plugins/slick.css";
import "../assets/css/plugins/animate.css";
import "../assets/css/style.css";
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
