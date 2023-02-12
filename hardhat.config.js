require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "localhost",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      // url: process.env.RPC_URL,
      chainId: 31337
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337

    },
    mantle : {
       url: `https://rpc.testnet.mantle.xyz/`,
       accounts: [process.env.PRIVATE_KEY],
     }
  },
};