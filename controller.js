const { response } = require("express");
const Web3 = require("web3");
const { address } = require("./main");
const Tx = require('ethereumjs-tx').Transaction;
const config = require("./main");
const Personal = require("web3-eth-personal");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

const SetGetContract = new web3.eth.Contract(config.abi, config.address, {
  from: web3.eth.defaultAccount,
  gasPrice: "20000000000",
});
async function setName(user) {
  SetGetContract.methods.setName(user.name).send({ from: '0x09DA8Db931F977b2e1a6C50ec2B8c52D2AE7fc2a' })
    .on('transactionHash', (hash) => {
      console.log("Hash: ", hash)
    })
}
async function getName() {
  return await SetGetContract.methods.getName().call({ from: '0x09DA8Db931F977b2e1a6C50ec2B8c52D2AE7fc2a' });
};
module.exports = {
  setName: setName,
  getName: getName
};