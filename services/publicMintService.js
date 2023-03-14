import Web3 from "web3";

const CONTRACT_ADDRESS = "0x6337e65Ac6Acf114Bb0BEe793282f1062D92A0e4";
const ABI = require("./iom_abi.json");

export async function PublicMintService(
  wallet,
  quantity,
  pendingCallback,
  successCallback,
  errorCallback
) {
  try {
    pendingCallback();
    const web3 = new Web3(wallet.provider);
    const chainId = await web3.eth.getChainId();
    // if (chainId !== 1) {
    //   await ethereum.request({
    //     method: "wallet_switchEthereumChain",
    //     params: [{ chainId: "0x1" }],
    //   });
    // }
    // if ((await web3.eth.getChainId()) !== 1) errorCallback();
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

    const gasEstimate = await contract.methods
      .mint(quantity)
      .estimateGas({
        from: wallet.accounts[0].address,
      });
    contract.methods
      .mint(quantity)
      .send({
        from: wallet.accounts[0].address,
        gas: gasEstimate + 10000,
      })
      .once("receipt", (receipt) => successCallback())
      .on("error", (error) => errorCallback());
  } catch (error) {
    console.log(error);
    errorCallback();
  }
}
