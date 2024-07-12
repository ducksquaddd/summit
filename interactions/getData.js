const highlayer = require("highlayer-sdk");
const { TransactionSigner, getHighlayerCliAddress } = require("highlayer-cli");

(async () => {
  const client = new highlayer.SigningHighlayerClient({
    sequencer: "http://sequencer.highlayer.io/",
    node: "https://seed-node.highlayer.io/",
    signingFunction: TransactionSigner,
  });

  let KV = client.KV("hlcontract1q28lh4ymfv9dhq40e4a7kczmvdd7t4ncrwtlanjcn7zj8wr0r9zhs8rtafy")


  console.log(await KV.get("tb1pjpwx67stcx5sayddm77ndxpg675lgvaxfaj5kqzn4smx9t43ua3sgex6jw"));
})();
