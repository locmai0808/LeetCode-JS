class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  getRootNode() {
    return this.root;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      // if left is not null recurr until
      // null is found
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      // if right is not null recurr until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }

  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  maxMin(node) {
    if (node) {
      this.maxMin(node.right);
      console.log(node.data);
      this.maxMin(node.left);
    }
  }

  minMax(node) {
    if (node) {
      this.minMax(node.left);
      console.log(node.data);
      this.minMax(node.right);
    }
  }

  treeHeight(node) {
    if (!node) return -1;
    let left = this.treeHeight(node.left);
    let right = this.treeHeight(node.right);
    return left > right ? left + 1 : right + 1;
  }

  levelOfNode(root, key, level = 0) {
    if (!root) return -1;
    if (root.data === key) return level;
    if (key < root.data) {
      return this.levelOfNode(root.left, key, level + 1);
    } else {
      return this.levelOfNode(root.right, key, level + 1);
    }
  }

  lowestCommonAncestor(root, n1, n2) {
    while (root) {
      if (root.data > n1 && root.data > n2) {
        root = root.left;
      } else if (root.data < n1 && root.data < n2) {
        root = root.right;
      } else break;
    }
    return root;
  }
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
[11, 2, 14, 1, 7, 15, 5, 8, 13, 4, 6, 16, 20, 42, 46, 31, 24].map(value => {
  BST.insert(value);
});

var root = BST.getRootNode();
//BST.maxMin(root);
//BST.minMax(root);
let lca = BST.lowestCommonAncestor(root, 42, 6);
console.log(lca.data);
let d1 = BST.levelOfNode(lca, 42);
let d2 = BST.levelOfNode(lca, 6);
console.log(d1 + d2);
//console.log(BST.lowestCommonAncestor(root, 4, 6));
//console.log(BST.treeHeight(root));
