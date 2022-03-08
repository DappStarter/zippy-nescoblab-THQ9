require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture street crawl snow hospital give glide flat gasp'; 
let testAccounts = [
"0x54db39a947b2e6cab3cf625761161374d95520c28ea8b55e9f82a21a0bf21de4",
"0x5080708a2faae4269acc21539986b6db2f03ad1bef4c9a4910c2577b26b3e203",
"0x06d27460f12c5dadbe03857cbf7e9b6d795547bf86f6e6257aa46320c313761b",
"0xce0bec2230c578a5ca3203afa7f90e2dead519589848b2ef06329a4f2662be14",
"0x7983ef19d4fef9b3a84619de8ef91d8e68e3b6e07923bc9b673ec1772a931e11",
"0x2b1f8812425970b00a4d47c5bcc3a4243358dc030a594ae38e43b3535872be2d",
"0xa8a5712886f2f0e6b7798f99c89208d76c22e4c9ab04449804fd59784e13b2cd",
"0x1dfe38e376219aceaa26fb1eda4698ee10a49182869748aba89896b745da2f08",
"0xf10532f2886e7ebd816d6c7a4420506cad88cb8dd5f883df355e9ec99a5b8ccd",
"0x013e264c42114c9c6dd16b50a1a40448d395fd715ddc90a918138e0fcbcc004b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

