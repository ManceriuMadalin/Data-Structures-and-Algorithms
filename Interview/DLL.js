//Swap First and Last
//Reverse
//Palindrom Checker
//Swap Nodes in Pairs

class DLL {
     swapFirstLast() {
          if (this.length < 2) return;
          const temp = this.head.value;
          this.head.value = this.tail.value;
          this.tail.value = temp;
     }

     reverse() {
          let current = this.head
          let temp = null

          while (current !== null) {
               temp = current.prev
               current.prev = current.next
               current.next = temp
               current = current.prev
          }

          temp = this.head
          this.head = this.tail
          this.tail = temp
     }

     isPalindrome() {
          if (this.length <= 1) return true;

          let forwardNode = this.head;
          let backwardNode = this.tail;
          for (let i = 0; i < Math.floor(this.length / 2); i++) {
               if (forwardNode.value !== backwardNode.value) return false;
               forwardNode = forwardNode.next;
               backwardNode = backwardNode.prev;
          }
          return true;
     }

     swapPairs() {
          const dummy = new Node(0);
          dummy.next = this.head;
          let prev = dummy;

          while (this.head !== null && this.head.next !== null) {
               const firstNode = this.head;
               const secondNode = this.head.next;

               prev.next = secondNode;
               firstNode.next = secondNode.next;
               secondNode.next = firstNode;

               secondNode.prev = prev;
               firstNode.prev = secondNode;
               if (firstNode.next !== null) {
                    firstNode.next.prev = firstNode;
               }

               this.head = firstNode.next;
               prev = firstNode;
          }

          this.head = dummy.next;
          if (this.head) this.head.prev = null;
     }
}