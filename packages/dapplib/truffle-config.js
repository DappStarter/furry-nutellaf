require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture street deny spice pulse hockey arctic metal giggle'; 
let testAccounts = [
"0xdf52f522e61ec8c12ca94fa061a786d7e5246b3138b842eaaad7b16c494fd0be",
"0x687b00385ae720658227de0386d621606d8d3262767628d3c2fc75ee71340fd4",
"0x408a2b028597d929a3d6ea99069dc721478b9e1a4da3654d86f6b1329c36c8bc",
"0x5c46e9bab740cfb0643240789113e8d01f9e316cb620244e872af76564f4fe9c",
"0x49667c73f6322da524f2edcfa55b368dfbfc2a032bd2f5f68dd371ed8a8927b7",
"0x5e41e3f9ef17a87b859f4f18a278d12cb8cffebbf2837c269d6cfba929f6e1c9",
"0xc40bdd4a7ceb676fbf34060c79a260b826a517e62fbb362ab79eb60fe4dc8688",
"0x339d622d3512e903b26a0ad79dc8a2003944a90e74beb62f1ef8e6ec56fa3521",
"0xfb62a40c5be617081054af04e69510693c1d5500a4edc8cf584593debfb36e5f",
"0x2b4b24f635707422d6aeca41b27dc3d21bec3937022a2edffa046d2c1261be78"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
