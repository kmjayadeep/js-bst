# Js-bst

This is a simple binary search tree implemented in javascript. Supported in nodejs and frontend


### Installation

from npm

```javascript
npm install js-bst --save
const BinarySearchTree = require('js-bst').BinarySearchTree
var bst = new BinarySearchTree()
```

in browser

```javascript
var bst = new BinarySearchTree()
```


### Usage

Insertion

```javascript
bst.insert(key,value)
bst.insert(10,'Somevalue')
bst.insert('somekey',{name:'bst'})
```

Search

```javascript
bst.search(10) //gives 'somevalue'
bst.search(100) //gives false
```

Deletion

```javascript
bst.delete(10)
bst.delete(key)
```

Traversal

```javascript
bst.inOrderTraversal(function(val,key){
	console.log(key,val)
})
```

Get sorted array

```javascript
var sorted = bst.getInOrderArray()
```

Get tree in json format

```javascript
var tree = bst.getTree()
```

output:

```javascript
{
 key:10,
 val:'hello',
 right:{
 	key:19,
    val:'world'
 }
}
```
