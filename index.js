require('dotenv').config();
const ethers = require('ethers');

const contractABI = [
    {
      "inputs": [],
      "name": "count",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dec",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "inc",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const provider = new ethers.AlchemyProvider('sepolia', process.env.ALCHEMY_API_KEY);
// new ethers.providers.AlchemyProvider( [ network = "homestead" , [ apiKey ] ] )

const wallet = new ethers.Wallet(process.env.ACCOUNT_PRIVATE_KEY, provider);

async function main() {
    // console.log(process.env.ALCHEMY_API_KEY)

    const countContract = new ethers.Contract("0xd9a5CF971B31339F1D2D1Fa2B5B4285d7E94d39E",
        contractABI,
        wallet);

    // await countContract.dec();
    const count = await countContract.get();    

    console.log(count.toString());


}

main();