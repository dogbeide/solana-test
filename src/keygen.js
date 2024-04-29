import { Keypair } from "@solana/web3.js";

const keyPair = Keypair.generate();

console.log(`public key: `, keyPair.publicKey.toBase58());
console.log(`secret key: `, keyPair.secretKey);