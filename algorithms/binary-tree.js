
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {

    constructor() {
        this.root = null;
    }

    add(element) {

        let newNode = new TreeNode(element);
        if(this.isTreeNull(this.root)) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (current) {

            if(element === current.data) return;

            if(element < current.data) {
                if(this.isTreeNull(current.left)) {
                    current.left = new TreeNode(element);
                    return;
                }
                current = current.left;
            }

            if (element > current.data) {
                if(this.isTreeNull(current.right)) {
                    current.right = new TreeNode(element);
                    return;
                }
                current = current.right;
            }
        }

    }

    isTreeNull(node) {
        return node === null;
    }

    search(element) {

        if(!this.root) return false;

        let current = this.root;
        let found = false;
        while (current && !found) {
            if(element < current.data){
                current = current.left;
            } else if(element > current.data) {
                current = current.right;
            } else {
                found = current;
            }
        }

        if (found) {
            console.log('Found element');
        } else {
            console.log('Not found element');
        }

    }

    display() {
        console.log('root', JSON.stringify(this.root));
    }

}

module.exports = BinaryTree