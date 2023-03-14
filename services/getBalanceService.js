import Web3 from "web3";

const CONTRACT_ADDRESS = "0xBb9B0568D5C7E57b801E41E645539CC1888CB960";
const ABI = require("./io_abi.json");

export async function GetBalanceService(wallet) {
  try {
    const web3 = new Web3(wallet.provider);
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

    const balance = await contract.methods.balanceOf(wallet.accounts[0].address).call();
    return typeof(balance) === 'string' ? parseInt(balance) : balance;
  } catch (error) {
    console.log(error);
    return 0;
  }
}
