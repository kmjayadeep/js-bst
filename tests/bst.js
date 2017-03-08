const expect = require('chai').expect;
const BinarySearchTree = require('../index').BinarySearchTree
const bst = new BinarySearchTree()

bst.insert(10,'10')
bst.insert(12,'12')
bst.insert(8,'8')
bst.insert(9,{
  val:8
})

console.log(bst.getTree())

console.log(bst.search(91))
