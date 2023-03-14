import Web3 from "web3";

const CONTRACT_ADDRESS = "0xb92D3989a651CD2AbcB6611d324B1B797bc99187";
const ABI = require("./iom_abi.json");

export async function AllowlistMintService(
  wallet,
  proof,
  quantity,
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

    const gasEstimate = await contract.methods
      .mintAllowlist(proof, quantity)
      .estimateGas({
        from: wallet.accounts[0].address,
        value: web3.utils.toWei((quantity * 0.06).toString(), "ether"),
      });
    contract.methods
      .mintAllowlist(proof, quantity)
      .send({
        from: wallet.accounts[0].address,
        gas: gasEstimate + 10000,
        value: web3.utils.toWei((quantity * 0.06).toString(), "ether"),
      })
      .once("receipt", (receipt) => successCallback())
      .on("error", (error) => errorCallback());
  } catch (error) {
    console.log(error);
    errorCallback();
  }
}
