const highlayer = require("highlayer-sdk");
const { TransactionSigner, getHighlayerCliAddress } = require("highlayer-cli");

(async () => {
  const client = new highlayer.SigningHighlayerClient({
    sequencer: "http://sequencer.highlayer.io/",
    node: "https://seed-node.highlayer.io/",
    signingFunction: TransactionSigner,
  });

  console.log(getHighlayerCliAddress());

  const transaction = new highlayer.TransactionBuilder()
    .setAddress(getHighlayerCliAddress())
    .addActions([
      highlayer.Actions.allocateGas({
        amount: 100000,
        price: 1,
      }),
      {
        program:
          "hlcontract1q7fjf3w4x88rppxz06rfm9w0esdz9gd0cdpcace4ugtxw025xwdkskwd36g",
        action: "publish",
        params: {
          title: "Test",
          data: "# Hello world",
          date: "6/17/2008",
          sources: ["https"],
        },
      },
    ]);

  console.log(await client.signAndBroadcast(transaction));
})();
