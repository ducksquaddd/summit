const highlayer = require("highlayer-sdk");

(async () => {
const client = new highlayer.HighlayerClient()

console.log(await client.getSequencerBalance("tb1pjpwx67stcx5sayddm77ndxpg675lgvaxfaj5kqzn4smx9t43ua3sgex6jw"))
})()