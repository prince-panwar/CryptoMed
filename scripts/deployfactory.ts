import hre from "hardhat";

async function main() {
 //simple deploy script for contract Auth
  const Auth = await hre.ethers.deployContract("MyNFTFactory");
  await Auth.waitForDeployment();
  console.log("factory deployed to:", Auth.target);

  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});