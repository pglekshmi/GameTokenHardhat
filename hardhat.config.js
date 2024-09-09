require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:'localhost',
  
  solidity: "0.8.23",
  networks:{
    localhost:{
    url:"http://127.0.0.1:8545/"
    },
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT",
      accounts:[process.env.Private_Key]
    },
   
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey:{
      sepolia:[process.env.API_Key]
    }
     
  }

};
