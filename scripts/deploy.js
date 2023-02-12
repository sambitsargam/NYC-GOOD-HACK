const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const CharityFunding = await hre.ethers.getContractFactory("Crowdfunding");
  const charityfunding = await CharityFunding.deploy();

  await charityfunding.deployed();

  console.log("CharityFunding deployed to:", charityfunding.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });