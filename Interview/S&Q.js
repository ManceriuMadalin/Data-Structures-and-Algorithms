//S:Push for a Stack That Uses an Array
//S:Pop for a Stack That Uses an Array
//S:Reversing String
//S:Stack Parentheses Balanced
//S:Sort Stack
//Q:Queue Using Stacks(Enqueue)
//Q:Queue Using Stacks(Dequeue)

class S {
     push(value) {
          this.stackList.push(value)
     }

     pop() {
          if (this.stackList.length === 0) {
               return null
          } else {
               return this.stackList.pop()
          }
     }
}

class Q {
     enqueue(value) {
          while (!this.stack1.isEmpty()) {
               this.stack2.push(this.stack1.pop());
          }
          this.stack1.push(value);
          while (!this.stack2.isEmpty()) {
               this.stack1.push(this.stack2.pop());
          }
     }

     dequeue() {
          if (this.isEmpty()) {
               return null;
          } else {
               return this.stack1.pop();
          }
     }
}

function reverseString(string) {
     const stack = new Stack();
     let reversedString = "";

     for (const c of string) {
          stack.push(c);
     }

     while (!stack.isEmpty()) {
          reversedString += stack.pop();
     }

     return reversedString;
}

function isBalancedParentheses(parentheses) {
     const stack = new Stack();
     for (const p of parentheses) {
          if (p === '(') {
               stack.push(p);
          } else if (p === ')') {
               if (stack.isEmpty() || stack.pop() !== '(') {
                    return false;
               }
          }
     }
     return stack.isEmpty();
}

function sortStack(stack) {
     const additionalStack = new Stack();

     while (!stack.isEmpty()) {
          const temp = stack.pop();

          while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
               stack.push(additionalStack.pop());
          }

          additionalStack.push(temp);
     }

     while (!additionalStack.isEmpty()) {
          stack.push(additionalStack.pop());
     }
}

function stackToString(stack) {
     return JSON.stringify(stack.getStackList());
}