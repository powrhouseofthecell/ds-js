class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}

	push(el) {
		const newNode = new Node(el);
		let current = this.head;
		if (!this.head) {
			this.head = newNode;
		} else {
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}

		this.length++;
	}

	pop() {
		let current = this.head;
		let prev = this.head;
		if (!current) {
			return undefined;
		} else {
			while (current.next) {
				prev = current;
				current = current.next;
			}
			prev.next = null;
			return current;
		}
	}

	unshift(el) {
		if (!this.head) {
			this.push(el);
			return;
		}
		let newHead = new Node(el);
		const currentHead = this.head;
		this.head = newHead;
		this.head.next = currentHead;
	}

	shift() {
		let head = this.head;
		if (!head) {
			return null;
		} else {
			let oldHead = this.head;
			this.head = this.head.next;
			return oldHead;
		}
	}

	atIndex(index) {
		let current = this.head;
		let count = 0;
		while (count !== index && current.next) {
			current = current.next;
			count++;
		}
		return current;
	}

	insertAt(val, idx) {
		let prev = this.atIndex(idx - 1);
		let next = this.atIndex(idx);
		let newNode = new Node(val);
		prev.next = newNode;
		newNode.next = next;
		this.length++;
	}

	reverse() {
		let node = this.head;
		let prev = null,
			tmp;
		while (node) {
			tmp = node.next;
			node.next = prev;
			prev = node;
			node = tmp;
		}
		this.head = prev; // this doesn't return the pointer but makes the array reversed in place;
		return this.head; // Also return the pointer and also reverse the list in place
	}
	smallestItem() {
		let current = this.head;
		let smallest = this.head;
		while (current) {
			if (current.data < smallest.data) {
				smallest = current;
				current = current.next;
			} else {
				current = current.next;
			}
		}
		return smallest;
	}
	largestestItem() {
		let current = this.head;
		let largest = this.head;
		while (current) {
			if (current.data > largest.data) {
				largest = current;
				current = current.next;
			} else {
				current = current.next;
			}
		}
		return largest;
	}
	// 1 -> 2 -> 2 -> 30 -> 0

	deleteAt(idx) {
		let prev = this.atIndex(idx - 1);
		let next = this.atIndex(idx + 1);
		prev.next = next;
		this.length--;
	}

	getIndex(item) {
		let current = this.head;
		let count = 0;
		while (current && current.data !== item) {
			current = current.next;
			count++;
		}
		return count;
	}

	deleteAll(item) {
		const freq = this.frequencyCounter();
		const freqOfItem = freq[item];
		for (let i = 0; i < freqOfItem; i++) {
			// get the index of the item
			const idx = this.getIndex(item);
			this.deleteAt(idx);
			this.length--;
		}

		// run the loop freqOfItem times
		//     inside the loop get the index of the item and delete it
	}

	frequencyCounter() {
		let a = [];
		const obj = {};
		let current = this.head;
		while (current) {
			a.push(current.data);
			current = current.next;
		}
		for (let i = 0; i < a.length; i++) {
			if (obj[a[i]]) {
				obj[a[i]]++;
			} else {
				obj[a[i]] = 1;
			}
		}
		return obj;
	}
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(2);
list.push(30);
list.push(0);
// list.unshift(10);
// const a = list.reverse();
// console.log(list);
// console.log(list);
// console.log(list.smallestItem());
// console.log(list.largestestItem());
// console.log(list.frequencyCounter());
// console.log(list);
// list.insertAt(100, 4);
// console.log(list);
// console.log(list.getIndex(2));
list.deleteAll(2);
console.log(list);
