var BinarySearchTree = (function(){
  var BinarySearchTree = function(){
    this.tree = null
  }

  BinarySearchTree.prototype.insert = function(key,val){
    this.tree = insertNode(this.tree,key,val)
    function insertNode(node,key,val){
      if(typeof node =='undefined' || node==null)
        return {
          key:key,
          val:val
        }
      if(key<node.key)
        node.left = insertNode(node.left,key,val)
      else
        node.right = insertNode(node.right,key,val)
      return node
    }
  }

  BinarySearchTree.prototype.getTree = function(){
    return this.tree
  }

  BinarySearchTree.prototype.getInorderArray = function(){
    var array = []
    inOrder(this.tree)
    function inOrder(node){
      if(typeof node == 'undefined' || node == null)
        return
      inOrder(node.left)
      array.push({
        key:node.key,
        val:node.val
      })
      inOrder(node.right)
    }
    return array
  }

  BinarySearchTree.prototype.getInorderArray = function(){
    var array = []
    inOrder(this.tree)
    function inOrder(node){
      if(typeof node == 'undefined' || node == null)
        return
      inOrder(node.left)
      array.push({
        key:node.key,
        val:node.val
      })
      inOrder(node.right)
    }
    return array
  }

  BinarySearchTree.prototype.inorderTraversal = function(cb){
    inOrder(this.tree)
    function inOrder(node){
      if(typeof node == 'undefined' || node == null)
        return
      inOrder(node.left)
      cb(node.val,node.key)
      inOrder(node.right)
    }
  }

  return BinarySearchTree
})();

if(typeof window=='undefined')
  module.exports = BinarySearchTree;
else
  window.BinarySearchTree =  BinarySearchTree;
