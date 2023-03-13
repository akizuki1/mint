import Web3 from "web3";

const CONTRACT_ADDRESS = "0xA525eb06544E75390F71D836f6F9C9C070f8c649";
const ABI = require("./abi.json");

export async function Soulbound(
  wallet,
  messageHash,
  v,
  r,
  s,
  pendingCallback,
  successCallback,
  errorCallback
) {
  try {
    pendingCallback();
    const web3 = new Web3(wallet.provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 1) {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
    }
    if ((await web3.eth.getChainId()) !== 1) errorCallback();
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    console.log(messageHash);
    console.log(v);
    console.log(r);
    console.log(s);
    const gasEstimate = await contract.methods
      .mint(messageHash, v, r, s)
      .estimateGas({
        from: wallet.accounts[0].address,
      });
    contract.methods
      .mint(messageHash, v, r, s)
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
