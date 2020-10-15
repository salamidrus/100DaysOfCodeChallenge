// Node Structure to store data inputs
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to increments count by number of single
// Valued subtrees under root, returns true if the subtree
// under root is singly, else false
function countSubTree(roots, count) {
  // check if root is null or not
  if (roots === null) return true;

  // count the left and right subtrees recursively
  left = countSubTree(roots.left, count);
  right = countSubTree(roots.right, count);

  // if any of the subtree is singly and non-empty, but parent data doesn't match return false
  if (roots.left && roots.data != roots.left.data) return false;
  // for the right subtree as well
  if (roots.right && roots.data != roots.right.data) return false;

  // none of the above conditions is true, then
  // tree rooted under root is single valued, increment
  // count and return true
  count[0] += 1;
  return true;
}

// function to call countSubTree(), initialize count as 0
function countUnival(roots) {
  // initialize for result
  count = [0];

  // recursive function to count
  countSubTree(roots, count);

  return count[0];
}

// define inputs
roots = new Node(5);
roots.left = new Node(4);
roots.right = new Node(5);
roots.left.left = new Node(4);
roots.left.right = new Node(4);
roots.right.right = new Node(5);
console.log("Total nodes:", countUnival(roots));
