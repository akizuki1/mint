import Web3 from "web3";

const CONTRACT_ADDRESS = "0x6337e65Ac6Acf114Bb0BEe793282f1062D92A0e4";
const ABI = require("./iom_abi.json");

export async function PhaseService(wallet) {
  try {
    const web3 = new Web3(wallet.provider);
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

    const phase = await contract.methods
      .phase()
      .call()
    return phase;
  } catch (error) {
    console.log(error);
    return 0;
  }
}
