import Web3 from "web3";

const CONTRACT_ADDRESS = "0x7453594e045Bc2AbB22Dc2D8A1bA0802c1Edad4b";
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
