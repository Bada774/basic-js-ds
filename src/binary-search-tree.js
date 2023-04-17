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
    this.base = addElement(this.base, data);

    function addElement(currentNode, data) {
      if (!currentNode) {
        return new Node(data);
      }

      if (currentNode.data === data) {
        return currentNode;
      }

      if (data > currentNode.data) {
        currentNode.right = addElement(currentNode.right, data);
      } else {
        currentNode.left = addElement(currentNode.left, data);
      }

      return currentNode;
    }
  }

  has(data) {
    if (this.find(data)) return true;
    else return false;
  }

  find(data) {
    return findElement(this.base, data);

    function findElement(currentNode, data) {
      if (!currentNode) {
        return null;
      }

      if (currentNode.data === data) {
        return currentNode;
      }

      if (data > currentNode.data) {
        return findElement(currentNode.right, data);
      } else {
        return findElement(currentNode.left, data);
      }
    }
  }

  remove(data) {
    this.base = removeElement(this.base, data);
  
    function removeElement(currentNode, data) {
      if (!currentNode) return null;

      if (data > currentNode.data) {
        currentNode.right = removeElement(currentNode.right, data);
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode.left = removeElement(currentNode.left, data);
        return currentNode;
      } else {
        if (!currentNode.left && !currentNode.right) {
          return null;
        } else if (!currentNode.left) {
          return currentNode.right;
        } else if (!currentNode.right) {
          return currentNode.left;
        }

        let minValue = currentNode.right;

        while (minValue.left) {
          minValue = minValue.left;
        }

        currentNode.data = minValue.data;
        currentNode.right = removeElement(currentNode.right, minValue.data);
      }
      return currentNode;
    }
  }

  min() {
    if(!this.base) {
      return null;
    } 

    let currentNode = this.base;
    while(currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if(!this.base) {
      return null;
    } 

    let currentNode = this.base;
    while(currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};