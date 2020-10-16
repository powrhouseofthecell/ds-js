class MySet {
	constructor() {
		this.collection = [];
	}

	has(element) {
		return this.collection.indexOf(element) !== -1;
	}

	values() {
		return this.collection;
	}

	add(element) {
		if (!this.has(element)) {
			this.collection.push(element);
			return true;
		}
		return false;
	}

	remove(element) {
		if (this.has(element)) {
			const index = this.collection.indexOf(element);
			this.collection.splice(index, 1);
			return true;
		}
		return false;
	}

	size() {
		return this.collection.length;
	}

	union(otherSet) {
		let unionSet = new MySet();
		let firstSet = this.values(); // `this` is the set that is create from this class
		let secondSet = otherSet.values();

		firstSet.forEach((el) => {
			unionSet.add(el);
		});
		secondSet.forEach((el) => {
			unionSet.add(el);
		});

		return unionSet;
	}

	intersection(otherSet) {
		let intersectionSet = new MySet();
		let firstSet = this.values();
		firstSet.forEach((el) => {
			if (otherSet.has(el)) {
				intersectionSet.add(el);
			}
		});
		return intersectionSet;
	}

	difference(otherSet) {
		let differenceSet = new MySet();
		let firstSet = this.values();
		firstSet.forEach((el) => {
			if (!otherSet.has(el)) {
				differenceSet.add(el);
			}
		});
		return differenceSet;
	}

	subset(otherSet) {
		let firstSet = this.values();
		return firstSet.every((el) => {
			return otherSet.has(el);
		});
	}
}

const s = new MySet();
s.add('First');
console.log(s.values());
