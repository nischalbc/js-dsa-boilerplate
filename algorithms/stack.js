class Stack {

    constructor(size) {
        this.size = size;
        this.data = [];
    }

    push(element) {
        if(this.data.length < this.size){
           this.data.push(element);
        } else {
            console.log('Max size exceeded.')
        }
    }

    pop() {
        if(this.data.length > 0) {
            this.data.pop();
        }
    }

    display() {
        console.log('----Displaying---')
        for (const item of this.data) {
            console.log(item);
        }
        console.log('-------')
    }

}

module.exports = Stack;