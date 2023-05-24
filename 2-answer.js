// Reverse a linked list in groups of given size
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addElement(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    reverseInGroups(groupSize) {
        this.head = this.reverseUtil(this.head, groupSize);
    }

    reverseUtil(node, k) {
        let current = node;
        let next = null;
        let prev = null;
        let count = 0;

        while (count < k && current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }

        if (next !== null) {
            node.next = this.reverseUtil(next, k);
        }

        return prev;
    }

    displayList() {
        let current = this.head;
        let elements = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}

const linkedList = new LinkedList();
linkedList.addElement(1);
linkedList.addElement(2);
linkedList.addElement(3);
linkedList.addElement(4);
linkedList.addElement(5);
linkedList.addElement(6);
linkedList.addElement(7);
linkedList.addElement(8);
linkedList.addElement(9);

console.log("Original List:");
linkedList.displayList();

const groupSize = 3;
linkedList.reverseInGroups(groupSize);

console.log(`Reversed List in groups of ${groupSize}:`);
linkedList.displayList();  