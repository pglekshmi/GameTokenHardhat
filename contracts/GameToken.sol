//SPDX-License-Identifier:MIT

pragma solidity 0.8.23;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract gameT is ERC20{
    address owner;

    constructor()ERC20("GameT","GT"){
        _mint(msg.sender,100000000000000000000);
        owner=msg.sender;
    }
    
    modifier onlyOwner(){
        require(msg.sender==owner,"Unauthorized access");
        _;
    }

    function mint(address to,uint256 amt) public onlyOwner{
        _mint(to,amt);
    }

    
}