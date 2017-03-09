const expect = require('chai').expect;
const BinarySearchTree = require('../index').BinarySearchTree

describe('Binary Search Tree',function(){
  describe('Insertion',function(){
    it('Inserts to empty tree',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      expect(bst.getTree()).to.deep.equal({
        key:10,
        val:'hello'
      })
    })

    it('inserts to left',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(9,'world')
      expect(bst.getTree()).to.deep.equal({
        key:10,
        val:'hello',
        left:{
          key:9,
          val:'world'
        }
      })
    })

    it('inserts to right',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(19,'world')
      expect(bst.getTree()).to.deep.equal({
        key:10,
        val:'hello',
        right:{
          key:19,
          val:'world'
        }
      })
    })
  })

  describe('Search',function(){
    it('finds element',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(19,'world')
      expect(bst.search(10)).to.equal('hello')
      expect(bst.search(19)).to.equal('world')
    })

    it('non existant key returns false',function(){
      var bst = new BinarySearchTree()
      expect(bst.search(1)).to.equal(false)
    })
  })

  describe('Traversal',function(){
    it('Inorder array',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(20,'world')
      bst.insert(5,'hi')
      expect(bst.getInorderArray()).to.deep.equal([{
        key:5,
        val:'hi'
      },{
        key:10,
        val:'hello'
      },{
        key:20,
        val:'world'
      }])
    })
    
    it('Inorder Traversal',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(20,'world')
      bst.insert(5,'hi')
      var res = []
      bst.inorderTraversal(function(val){
        res.push(val)
      })
      expect(res).to.deep.equal([ 'hi', 'hello', 'world' ])
    })
  })

  describe('Deletion',function(){
    it('deletes root',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.delete(10)
      expect(bst.getTree()).to.be.an('undefined')
    })

    it('deletes child',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(11,'hello')
      bst.delete(11)
      expect(JSON.stringify(bst.getTree())).to.equal('{"key":10,"val":"hello"}')
    })

    it('deletes non child',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(20,'world')
      bst.insert(11,'world')
      bst.insert(21,'world')
      bst.delete(20)
      expect(JSON.stringify(bst.getTree())).to.equal('{"key":10,"val":"hello","right":{"key":21,"val":"world","left":{"key":11,"val":"world"}}}')
    })


    it('deletes node with one branch',function(){
      var bst = new BinarySearchTree()
      bst.insert(10,'hello')
      bst.insert(11,'hello')
      bst.insert(21,'hello')
      bst.delete(11)
      expect(JSON.stringify(bst.getTree())).to.equal('{"key":10,"val":"hello","right":{"key":21,"val":"hello"}}')
    })

  })

})
