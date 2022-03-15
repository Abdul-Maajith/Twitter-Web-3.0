require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/_lD6LUPATcsun2vFrKWv-SI9IOKWr3MP",
      accounts: [
        "fd2672f27dd091446a7220c8743e89aa00d1d6662def5df044106a792d9e818b",
      ],
    },
  },
};
