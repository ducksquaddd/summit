module.exports = function (transaction, changes) {
	let title = transaction.params.title;
	let data = transaction.params.data;
	let publisher = transaction.sender;
	let date = transaction.params.date;
	let sources = transaction.params.sources; // Recomend sources reuploaded onto highlayer, probably even reuploaded onto this platform

	let userPosts = KV.get(publisher) || [];

	userIndex.push({
		title,
		data: [data],
		date,
		sources,
	});

	changes.push(KV.set());
};
