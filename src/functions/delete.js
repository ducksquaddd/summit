module.exports = function (transaction, changes) {
    let index = transaction.params.index; // used to see which post should be edited
    let publisher = transaction.sender;

	let userPosts = KV.get(publisher) || [];

	userPosts[index] = null

	changes.push(KV.set(publisher, userPosts));
};
