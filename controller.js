const { response } = require("express");
const Web3 = require("web3");
const { address } = require("./main");
const Tx = require('ethereumjs-tx').Transaction;
const config = require("./main");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

web3.eth.defaultAccount = "0x09DA8Db931F977b2e1a6C50ec2B8c52D2AE7fc2a";

// web3.eth.getAccounts().then(console.log)
// async function isEthAlive() {
//   let status = await web3.eth.net.isListening();
//   return status;
// }
// (async function () {
//  console.log("[INFO] Starting app...");
//   console.log(`[INFO] Node status ${await isEthAlive()}`);
// });

  const SetGetContract = new web3.eth.Contract(config.abi, config.address, {
    from: web3.eth.defaultAccount, 
    gasPrice: "20000000000",
  });

 async function setName(name){
  SetGetContract.methods.setName(name).send({from: '0x09DA8Db931F977b2e1a6C50ec2B8c52D2AE7fc2a'})
  .then(function(){
    });

}

async function getName(name){
    // let Details = await SetGetContract.methods.getName(name).call({from:"0x09DA8Db931F977b2e1a6C50ec2B8c52D2AE7fc2a"});
    // let userInfo = {};
    //   if (Details) {
    //     userInfo["unixTime"] = new Date(parseInt(Details["time"].toString()) * 1000);
    //   }
    //  return userInfo;
    const contract_address = "0x09DA8Db931F977b2e1a6C50ec2B8c52D2AE7fc2a";
    await SetGetContract.methods.getName().call({from: contract_address});
  };
 
 


module.exports={
  setName : setName,
  getName :getName
};