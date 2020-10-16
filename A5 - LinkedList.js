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
		this.head = newHead;
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
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
const a = list.reverse();
console.log(a);
console.log(list);
