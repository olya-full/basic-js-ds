const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rooty = null;
  }
  root() {
    return this.rooty;    
  }

  add(data) {
    this.rooty = addData(this.rooty, data);

    function addData(node, data){
      if (!node){
        return new Node(data);
      } else if (node.data == data) {
        return node;
      } else if (data < node.data){
        node.left = addData(node.left, data);
      } else if (data > node.data){
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {

  }

  find(data) {

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};