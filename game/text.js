function findByProperty(array, property, value) {
	const results = [];
	for (const object of array) {
		if (object[property] === value) {
			results.push(object);
		}
	}
	return results;
}

const arr = [{
	name: 'Nikita',
	age: 18,
}, 
{
	name: 'Nikita',
	age: 19,
}, {
	name: 'Kirill',
	age: 19,
}, {
	name: 'Danya',
	age: 28,
}]
 
console.log(findByProperty(arr, 'name', 'Nikita')) 