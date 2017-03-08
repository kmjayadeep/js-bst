const expect = require('chai').expect;
const BinarySearchTree = require('../index').BinarySearchTree
const bst = new BinarySearchTree()

bst.insert(10,'11')
bst.insert(12,'11')
bst.insert(8,'11')
bst.insert(9,'11')

console.log(bst.getTree())
