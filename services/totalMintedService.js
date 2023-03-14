import Web3 from "web3";

const CONTRACT_ADDRESS = "0xBb9B0568D5C7E57b801E41E645539CC1888CB960";
const ABI = require("./io_abi.json");

export async function TotalMintedService(wallet) {
  try {
    const web3 = new Web3(wallet.provider);
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

    const totalMinted = await contract.methods.totalMinted().call();
    return typeof(totalMinted) === 'string' ? parseInt(totalMinted) : totalMinted;
  } catch (error) {
    console.log(error);
    return 0;
  }
}
