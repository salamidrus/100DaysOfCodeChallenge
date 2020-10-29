
// Create a Stack API
class Stack {
  constructor() {
    this.data = [];
    this.top = 0; // index counter
  }

  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  pop() {
    if (!this.isEmpty()) {
      this.top = this.top - 1;
      return this.data.pop(); // remove the last element
    }
  }

  print() {
    let top = this.top - 1;
    while (top >= 0) {
      console.log(this.data[top]);
      top--;
    }
  }

  reverse() {
    this._reverse(this.top - 1);
  }

  _reverse(index) {
    if (index != 0) {
      this._reverse(index - 1);
    }
    console.log(this.data[index]);
  }
}

let stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(4);
stack.print();

// console.log(stack);
