module.exports = function (transaction, changes) {
  console.log("exec");
  let title = transaction.params.title;
  let data = transaction.params.data;
  let publisher = transaction.sender;
  let date = transaction.params.date;
  let sources = transaction.params.sources; // Recomend sources reuploaded onto highlayer, probably even reuploaded onto this platform

  let userPosts = KV.get(publisher) || [];

  userPosts.push({
    title: [title],
    data: [data],
    date: [date],
    sources: [sources],
  });

  console.log({
    title: [title],
    data: [data],
    date: [date],
    sources: [sources],
    publisher,
  });

  changes.push(KV.set(publisher, userPosts));
};
