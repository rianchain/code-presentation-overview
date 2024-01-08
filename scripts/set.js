const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.attach("0x2144585e855E6ad9Ec5FC3DdB41EF547eAaBbF02");


  const textRaw = await storage.setText("rianzi ganteng");
  console.log(`text = ${textRaw}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
