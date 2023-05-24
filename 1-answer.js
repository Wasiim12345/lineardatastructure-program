//(1) Delete the elements in an linked list whose sum is equal to zero
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

    deleteZeroSum() {
        let current = this.head;
        while (current !== null) {
            let sum = 0;
            let temp = current;
            while (temp !== null) {
                sum += temp.data;
                if (sum === 0) {
                    this.head = temp.next;
                    current = temp.next;
                    break;
                }
                temp = temp.next;
            }
            if (sum !== 0 && current !== null) {
                temp = current.next;
                let prev = current;
                while (temp !== null) {
                    sum += temp.data;
                    if (sum === 0) {
                        prev.next = temp.next;
                        current = prev.next;
                        break;
                    }
                    prev = prev.next;
                    temp = temp.next;
                }
            }
            if (sum !== 0 && current !== null) {
                current = current.next;
            }
        }
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
linkedList.addElement(6);
linkedList.addElement(-6);
linkedList.addElement(8);
linkedList.addElement(4);
linkedList.addElement(-12);
linkedList.addElement(9);
linkedList.addElement(8);

console.log("Original List:");
linkedList.displayList();

linkedList.deleteZeroSum();

console.log("Updated List:");
linkedList.displayList();