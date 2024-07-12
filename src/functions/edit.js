module.exports = function (transaction, changes) {
    let index = transaction.params.index; // used to see which post should be edited
	let title = transaction.params.title;
	let data = transaction.params.data;
	let publisher = transaction.sender;
	let date = transaction.params.date;
	let sources = transaction.params.sources; // Recomend sources reuploaded onto highlayer, probably even reuploaded onto this platform

	let userPosts = KV.get(publisher) || [];

    if(!userPosts) {
        return ContractError()
    }

	userPosts[index] = {
        ...userPosts[index],
		title: [title],
		data: [data],
		date: [date],
		sources: [sources],
	}

	changes.push(KV.set(publisher, userPosts));
};
