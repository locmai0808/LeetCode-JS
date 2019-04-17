class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(root, node) {
    if (node.data < root.data) {
      if (!root.left) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (!root.right) root.right = node;
      else this.insertNode(root.right, node);
    }
  }

  minmax(node) {
    if (node) {
      this.minmax(node.left);
      console.log(node.data);
      this.minmax(node.right);
    }
  }

  maxmin(node) {
    if (node) {
      this.maxmin(node.right);
      console.log(node.data);
      this.maxmin(node.left);
    }
  }

  //good for making copy of the tree
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

  //good for deleting the tree;
  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  bftraversal(root) {
    let arr = [root];
    while (arr.length) {
      let node = arr.shift();
      console.log(node.data);
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
  }
  dftraversal(root) {
    let arr = [root];
    while (arr.length) {
      let node = arr.shift();
      console.log(node.data);
      if (node.right) arr.unshift(node.right);
      if (node.left) arr.unshift(node.left);
    }
  }

  heightOfTree(node) {
    if (!node) return 0;
    let left = this.heightOfTree(node.left);
    let right = this.heightOfTree(node.right);
    return left > right ? left + 1 : right + 1;
  }

  lowestCommonAncestor(root, n1, n2) {
    while (root) {
      if (n1 < root.data && n2 < root.data) {
        root = root.left;
      } else if (n1 > root.data && n2 > root.data) {
        root = root.right;
      } else break;
    }
    return root;
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
}

var Tree = new Node(1);
Tree.left = new Node(2);
Tree.right = new Node(3);
Tree.right.right = new Node(6);
Tree.right.right.right = new Node(9);
Tree.right.right.left = new Node(8);
Tree.left.left = new Node(4);
Tree.left.left.right = new Node(7);
Tree.left.right = new Node(5);

/*
        1
       / \
      2   3
     / \   \
    4   5   6
     \     / \
      7   8   9
*/

function levelOfNode(Tree, key, level = 0) {
  if (!Tree) return -1;
  if (Tree.data === key) return level;
  let downLevel = levelOfNode(Tree.left, key, level + 1);
  if (downLevel != -1) return downLevel;
  downLevel = levelOfNode(Tree.right, key, level + 1);
  return downLevel;
}

function lowestCommonAncestor(node, n1, n2) {
  if (!node) return null;
  if (node.data === n1 || node.data === n2) return node;
  let left = lowestCommonAncestor(node.left, n1, n2);
  let right = lowestCommonAncestor(node.right, n1, n2);
  if (left && right) return node;
  return left ? left : right;
}

function bftraversal(node) {
  let arr = [node];
  while (arr.length) {
    let cur = arr.shift();
    console.log(cur.data);
    if (cur.left) arr.push(cur.left);
    if (cur.right) arr.push(cur.right);
  }
}

function heightOfTree(node) {
  if (!node) return 0;
  let left = heightOfTree(node.left);
  let right = heightOfTree(node.right);
  return left > right ? left + 1 : right + 1;
}

let lca = lowestCommonAncestor(Tree, 7, 9);
let d1 = levelOfNode(lca, 7);
let d2 = levelOfNode(lca, 9);
console.log(heightOfTree(Tree));

// create an object for the BinarySearchTree
// var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
// [11, 2, 14, 1, 7, 15, 5, 8, 13, 4, 6, 16, 20, 42, 46, 31, 24].map(value => {
//   BST.insert(value);
// });

// var root = BST.getRoot();

//console.log(BST.heightOfTree(root));
// console.log(BST.lowestCommonAncestor(root, 1, 46).data);
// let lca = BST.lowestCommonAncestor(root, 20, 24);
// let d1 = BST.levelOfNode(lca, 20);
// let d2 = BST.levelOfNode(lca, 24);
// console.log(d1 + d2);
