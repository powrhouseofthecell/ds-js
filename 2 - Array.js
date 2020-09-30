// ! Deleting from the middle won't shift the index automatically
const ar = [1, 2, 3, 4]

delete ar[2]
// [1, 2,    4 ]
//  0  1  2  3
// this.data[i] = this.data[i + 1];
// a loop like this will shift, were i is the index to be deleted
console.log(ae[3])
console.log(ae[2])

// ============================================================================

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    // [ 1, 2, 3, 4, 5, 6 ]
    //   0  1  2  3  4  5 

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);

// # ============================================================================

function reverseString(str) {
    const strArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        strArr.push(str[i]);
    }
    let reverse = '';
    for (let char of strArr) {
        reverse += char;
    }
    return reverse;
}

// console.log(reverseString('Hello'))

// *  Merging two sorted arrays and the result is also sorted
function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

// mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30])