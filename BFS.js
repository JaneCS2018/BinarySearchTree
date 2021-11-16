//Important Binary Search Tree
//https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
class Node{
    constructor(value){
        this.value= value
        this.left = null
        this.right =null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)
        if(this.root === null)
            this.root = newNode
        else this.insertNode(this.root, newNode)
    }
    insertNode(node, newNode){
        if(newNode.value< node.value){
            if(node.left===null) 
               node.left = newNode
            else
               this.insertNode(node.left, newNode)
        }
        else{
            if(node.right===null) 
               node.right = newNode
            else
                this.insertNode(node.right, newNode)
        }
    }
    //search
    search(node, value){
        if(node === null) return null
        else if (value < node.value)
            return this.search(node.left, value)
        else if (value > node.value)
            return this.search(node.right, value)
        else
            return node
    }
    findMinNode(node){
        if(node.left===null){
            return node
        }
        else{
            return this.findMinNode(node.left)
        }
           
    }
    remove(value){
        this.root = this.removeNode(this.root, value)
    }
    //remove
    remove(node, key){
        if(node === null) return null
        else if (key < node.value){
            node.left = this.removeNode(node.left, key)
            return node
        }
        else if (key > node.value){
            node.right = this.removeNode(node.right, key)
            return node
        }
        else{
            if(node.left === null && node.right===null){
                node= null
                return node
            }
            if(node.left === null){
                node = node.right
                return node
            }
            else if (node.right === null){
                node = node.left
                return node
            }
            var aux = this.findMinNode(node.right)
            node.value = aux.value

            node.right = this.removeNode(node.right, aux.value)
            return node

        }
    }
    breadthFirstSearch(){
        let currentNode = this.root
        let list = []
        let queue = []
        queue.push(currentNode)
        while(queue.length>0){
            currentNode = queue.shift()
            list.push(currentNode.value)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list
    }
    DFSInorder(){
        return traverseInOrder(this.root, [])
    }
    DFSPreorder(){
        return traversePreOrder(this.root, [])
    }
    DFSPostorder(){
        return traversePostOrder(this.root, [])
    }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(tree)
// console.log(tree.breadthFirstSearch())

function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if(node.right){
        traverseInOrder(node.right, list)
    }
    return list
}

function traversePreOrder(node, list){
    list.push(node.value)
    if(node.left){
        traversePreOrder(node.left, list)
    }
    if(node.right){
        traverseInOrder(node.right, list)
    }
    return list
}

function traversePostOrder(node, list){ 
    if(node.left){
        traversePreOrder(node.left, list)
    }
    if(node.right){
        traverseInOrder(node.right, list)
    }
    list.push(node.value)
    return list
}

console.log(tree.DFSPreorder())
tree.remove(4)
console.log(tree)
