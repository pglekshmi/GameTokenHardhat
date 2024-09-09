# GameTokenHardhat
Install Openzepplin contract
```
npm i @openzeppelin/contracts
```


Copy openzepplin's ERC20 contract path from node_modules folder and then write import statement on gameT contract
```
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
```
You can now deploy contract on any testnet or mainnet as before


Verify Contract
***************


Install hardhat plugin
```
npm install --save-dev @nomicfoundation/hardhat-verify
```


import plugin to harhat.config.js file
```
require("@nomicfoundation/hardhat-verify");
```

Add these configurations to hardhat.config.js after the networks

```
networks:{
    sepolia:{

    }
}
etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
         sepolia:"Your API_Key"
          }
  }
```

Now verify your deployed contract using
```
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS 
```

