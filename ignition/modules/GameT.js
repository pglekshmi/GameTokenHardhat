const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("GameTModule", (m) => {

  const GameT = m.contract("gameT");

  return { GameT };
});
