require("@nomicfoundation/hardhat-toolbox");


const privateKey = "be798aa477719822e2656d247ea1d64af63383d79337b3d56aeb22401c39b662"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  defaultNetwork: "mumbai",
  solidity: {
    version: "0.8.0"
  },
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/20yVUA2LdoM5cmXHWTxjwK682VbL3TN6",
      accounts: [privateKey]
    }
  },
};
