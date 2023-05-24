// Merge a linked list into another linked list at alternate positions.
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

    mergeAtAlternatePositions(otherList) {
        let current1 = this.head;
        let current2 = otherList.head;

        while (current1 !== null && current2 !== null) {
            let next1 = current1.next;
            let next2 = current2.next;

            current1.next = current2;
            current2.next = next1;

            current1 = next1;
            current2 = next2;
        }

        otherList.head = current2;
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

const linkedList1 = new LinkedList();
linkedList1.addElement(1);
linkedList1.addElement(2);
linkedList1.addElement(3);

console.log("List 1:");
linkedList1.displayList();

const linkedList2 = new LinkedList();
linkedList2.addElement("A");
linkedList2.addElement("B");
linkedList2.addElement("C");
linkedList2.addElement("D");

console.log("List 2:");
linkedList2.displayList();

linkedList1.mergeAtAlternatePositions(linkedList2);

console.log("Merged List:");
linkedList1.displayList();  