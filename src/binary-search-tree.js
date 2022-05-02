const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addNode(this.base, data)

    function addNode(node, value) {
      if(!node) return new Node(value);

      if(node.data === value) {
        return node;
      }

      if( value < node.data) {
        node.left = addNode(node.left, value)
      } else {
        node.right = addNode(node.right, value)
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.base, data)
    function hasNode(node, value) {
      if (!node) return false;
      if (node.data === value) return true;

      return value < node.data ? hasNode(node.left, value) : hasNode(node.right, value);
    }
  }

  find(data) {
    return findNode(this.base, data)

    function findNode(node, value) {
      if (!node) return null;
      if (node.data == value) return node;

      return value < node.data ? findNode(node.left, value) : findNode(node.right, value);
    }
  }

  remove(data) {
    return removeNode(this.base, data)

    function removeNode(node, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value)
        return node
      } else if (value > node.data) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let minFromR = node.right;
        while (minFromR.left) {
          minFromR = minFromR.left
        }
        node.data = minFromR.data
        node.right = removeNode(node.right, minFromR.data)
        return node;
      }
    }
  }

  min() {
    if (!this.base) return null;
    let current = this.base;

    while (current.left) {
      current = current.left;
    }

    return current.data
  }

  max() {
    if (!this.base) return null;

    let current = this.base
    while(current.right) {
      current = current.right
    }

    return current.data
  }
}

module.exports = {
  BinarySearchTree
};