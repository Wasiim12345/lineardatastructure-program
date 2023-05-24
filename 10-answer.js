// Implement a queue using the stack data structure
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

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(element) {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(element);

        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        if (this.stack1.isEmpty()) {
            return null;
        }

        return this.stack1.pop();
    }

    isEmpty() {
        return this.stack1.isEmpty();
    }

    size() {
        return this.stack1.size();
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("Queue Size:", queue.size());
console.log("Is Queue Empty?", queue.isEmpty());

console.log("Dequeued Element:", queue.dequeue());
console.log("Dequeued Element:", queue.dequeue());

console.log("Queue Size:", queue.size());
console.log("Is Queue Empty?", queue.isEmpty());  