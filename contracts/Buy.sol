// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Buy{
    address Owner;
    uint256 amount;
    constructor(){
        Owner = msg.sender;
    }
    function Pay() external payable{
     amount= amount+msg.value;
    }
    function withdraw()external{
        require(msg.sender==Owner,"You are not owner");
    payable(msg.sender).transfer(address(this).balance);
      
       }
}