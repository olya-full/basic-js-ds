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
    return hasData(this.rooty, data);

    function hasData(node, data){
      if (!node){
        return false;
      } else if (node.data == data) {
        return true;
      } else if (data < node.data){
        return hasData(node.left, data);
      } else if (data > node.data){
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rooty, data);

    function findData(node, data){
      if (!node){
        return null;
      } else if (node.data == data) {
        return node;
      } else if (data < node.data){
        return findData(node.left, data);
      } else if (data > node.data){
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.rooty = removeNode(this.rooty, data);

    function removeNode(node, data){
      if (!node) {
        return null;
      } else if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      } else {  
      if (!node.left && !node.right){
        return null;
      }

      if (!node.right){
        node = node.left;
        return node;
      }

      if (!node.left){
        node = node.right;
        return node;
      }

      let maxLeftBranch = node.left;
      while (maxLeftBranch.right){
        maxLeftBranch = maxLeftBranch.right;
      }

      node.data = maxLeftBranch.data;
      node.left = removeNode(node.left, maxLeftBranch.data);
      return node;

      }
    }

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};