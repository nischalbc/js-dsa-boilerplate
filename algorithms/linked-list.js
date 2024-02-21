class ListNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {

    size = 0;
    head = null
    constructor() {
        this.head = null
    }

    add(value) {
        if(this.head == null) {
            this.head = new ListNode(value);
            this.size++;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new ListNode(value);
        this.size++;
    }

    getSize() {
        return this.size;
    }

    display() {

        const result = [];
        if(this.head == null){
            return "Nothing to display";
        }
        let currentNode = this.head;
        while(currentNode.next){
            result.push(currentNode.data);
            currentNode = currentNode.next;
        }
        result.push(currentNode.data);
        return result;
    }
}

module.exports = LinkedList;


let data = new LinkedList();
data.add(12);
data.add(32);
data.add(10);

console.log(data.getSize());
console.log(data.display());
