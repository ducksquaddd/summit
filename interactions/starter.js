const highlayer = require("highlayer-sdk");
const { TransactionSigner, getHighlayerCliAddress } = require("highlayer-cli");

(async () => {
  const client = new highlayer.SigningHighlayerClient({
    sequencer: "http://sequencer.highlayer.io/",
    node: "https://seed-node.highlayer.io/",
    signingFunction: TransactionSigner,
  });

  const transaction = new highlayer.TransactionBuilder()
    .setAddress(getHighlayerCliAddress())
    .addActions([
      highlayer.Actions.allocateGas({
        amount: 1000,
        price: 1,
      }),
      {
        program: "hlcontract1q28lh4ymfv9dhq40e4a7kczmvdd7t4ncrwtlanjcn7zj8wr0r9zhs8rtafy",
        action: "publish",
        params: {
          title: "Test",
          data: "# Hello world",
          date: "6/17/2008",
          sources: ["https"]
        },
      },
    ]);

  console.log(await client.signAndBroadcast(transaction));
})();
