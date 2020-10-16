// Creates a stack
class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};
	}

	// Adds a value onto the end of the stack
	push(value) {
		this.storage[this.count] = value;
		this.count++;
	}

	// Removes and returns the value at the end of the stack
	pop() {
		if (this.count === 0) {
			return undefined;
		}

		this.count--; // new item gets added to this.count but the previous item is at index this.count--
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	size() {
		return this.count;
	}

	// Returns the value at the end of the stack
	peek() {
		return this.storage[this.count - 1];
	}
}

var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("freeCodeCamp");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
