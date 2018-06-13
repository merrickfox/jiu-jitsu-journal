
export function addToIndex (index, records) {
	index.addObjects(records, function(err, content) {
		if (err) console.error(err)
		else {
			console.log(content);
		}
	});

}