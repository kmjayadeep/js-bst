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

  BinarySearchTree.prototype.getInOrderArray = function(){
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

  BinarySearchTree.prototype.inOrderTraversal = function(cb){
    inOrder(this.tree)
    function inOrder(node){
      if(typeof node == 'undefined' || node == null)
        return
      inOrder(node.left)
      cb(node.val,node.key)
      inOrder(node.right)
    }
  }

  BinarySearchTree.prototype.search = function(key){
    return search(this.tree)
    function search(node){
      if(typeof node == 'undefined' || node == null)
        return false
      if(node.key==key)
        return node.val
      var res1 = search(node.left)
      if(res1)
        return res1
      return search(node.right)
    }
  }

  BinarySearchTree.prototype.delete = function(key){
    this.tree = deleteKey(this.tree,key);
    function deleteKey(node,key){
      if(typeof node=='undefined'||node==null)
        return
      if(key<node.key){
        node.left = deleteKey(node.left,key)
        return node
      }
      else if(key>node.key){
        node.right = deleteKey(node.right,key)
        return node
      }
      else{
        if(typeof node.left=='undefined'||node.left==null)
          return node.right
        if(typeof node.right=='undefined'||node.right==null)
          return node.left
        var succ = inOrderSuccessor(node.right,key)
        node.key = succ.key
        node.val = succ.val
        node.right = deleteKey(node.right,succ.key)
        return node
      }
    }

    function inOrderSuccessor(node,key){
      if(typeof node.left=='undefined'||node.left==null)
        return node
      return inOrderSuccessor(node.left,key)
    }
  }

  return BinarySearchTree
})();

if(typeof window=='undefined')
  module.exports = BinarySearchTree;
else
  window.BinarySearchTree =  BinarySearchTree;
