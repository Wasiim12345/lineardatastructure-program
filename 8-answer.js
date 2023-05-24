// Reverse a string using a stack data structure
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

function reverseString(str) {
    const stack = new Stack();
    let reversedString = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

const str = "Hello, World!";
const reversedStr = reverseString(str);

console.log("Original string:", str);
console.log("Reversed string:", reversedStr);  