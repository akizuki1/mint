import Web3 from "web3";

const CONTRACT_ADDRESS = "0xb92D3989a651CD2AbcB6611d324B1B797bc99187";
const ABI = require("./iom_abi.json");

export async function AllowanceService(wallet) {
  try {
    const web3 = new Web3(wallet.provider);
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

    const allowance = await contract.methods
      .allowanceOf(wallet.accounts[0].address)
      .call();
    return typeof(allowance) === 'string' ? parseInt(allowance) : allowance;
  } catch (error) {
    console.log(error);
    return 0;
  }
}
