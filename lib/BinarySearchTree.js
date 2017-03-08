var BinarySearchTree = (function(){
  var BinarySearchTree = function(){
    this.tree = null
  }
  BinarySearchTree.prototype.insert = function(key,val){
    this.tree = this.insertNode(this.tree,key,val)
  }
  BinarySearchTree.prototype.insertNode = function(node,key,val){
    if(typeof node =='undefined' || node==null)
      return {
        key:key,
        val:val
      }
    if(key<node.key)
      node.left = this.insertNode(node.left,key,val)
    else
      node.right = this.insertNode(node.right,key,val)
    return node
  }
  BinarySearchTree.prototype.getTree = function(){
    return this.tree
  }
  return BinarySearchTree
})();

if(typeof window=='undefined')
  module.exports = BinarySearchTree;
else
  window.BinarySearchTree =  BinarySearchTree;
