//

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SqkwxdM177SPZgrF8_1Ui9PCI4a-m7pv',
      accounts: [ 'f2aef53ad9af5bb8977a03ee7e9f7fed18fd3676a6f9913de0aea4664e637db6' ]
    }
  }
}