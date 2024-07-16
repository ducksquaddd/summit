const highlayer = require("highlayer-sdk");
const { TransactionSigner, getHighlayerCliAddress } = require("highlayer-cli");

(async () => {
  const client = new highlayer.SigningHighlayerClient({
    sequencer: "http://sequencer.highlayer.io/",
    node: "https://seed-node.highlayer.io/",
    signingFunction: TransactionSigner,
  });

  let KV = client.KV(
    "hlcontract1q7fjf3w4x88rppxz06rfm9w0esdz9gd0cdpcace4ugtxw025xwdkskwd36g"
  );

  console.log(
    await KV.get(
      "tb1pjpwx67stcx5sayddm77ndxpg675lgvaxfaj5kqzn4smx9t43ua3sgex6jw"
    )
  );
})();
