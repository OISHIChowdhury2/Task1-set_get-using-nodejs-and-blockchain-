// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Info {
  struct Infor {
      string name;
  }
  Infor info;
   function setName(string memory _name) public {   
          info.name=_name;
    }
    function getName()public view returns(string memory){
      return info.name; 
         }
}
