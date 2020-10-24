function swapEveryTwo(node) {
  let current = node; // holds the current node for swapping

  while (current && current.next) {
    // only swap if next node provided
    current.value = current.next.value;
    current.next.value = current.value;
    current = current.next.next;
  }
  return node;
}


