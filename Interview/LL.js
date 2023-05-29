//Linked List Middle Node
//Has Loop
//Find Kth Node From End
//Reverse Between
//Partition List
//Remove Duplicates

class LL {
     findMiddleNode() {
          let slow = this.head
          let fast = this.head
          while (fast !== null && fast.next !== null) {
               slow = slow.next
               fast = fast.next.next
          }
          return slow
     }

     hasLoop() {
          let slow = this.head
          let fast = this.head
          while (fast !== null && fast.next !== null) {
               slow = slow.next
               fast = fast.next.next
               if (slow === fast) {
                    return true
               }
          }
          return false
     }

     findKthFromEnd(k) {
          let slow = this.head;
          let fast = this.head;

          for (let i = 0; i < k; ++i) {
               if (fast === null) {
                    return null;
               }
               fast = fast.next;
          }

          while (fast !== null) {
               slow = slow.next;
               fast = fast.next;
          }

          return slow;
     }

     reverseBetween(m, n) {
          if (this.head === null) return;

          const dummy = new Node(0);
          dummy.next = this.head;
          let prev = dummy;

          for (let i = 0; i < m; i++) {
               prev = prev.next;
          }

          let current = prev.next;
          for (let i = 0; i < n - m; i++) {
               const temp = current.next;
               current.next = temp.next;
               temp.next = prev.next;
               prev.next = temp;
          }

          this.head = dummy.next;
     }

     partitionList(x) {
          if (this.head === null) return

          let dummy1 = new Node(0)
          let dummy2 = new Node(0)

          let prev1 = dummy1
          let prev2 = dummy2
          let current = this.head

          while (current !== null) {
               if (current.value < x) {
                    prev1.next = current
                    prev1 = current
               } else {
                    prev2.next = current
                    prev2 = current
               }

               current = current.next
          }

          prev2.next = null
          prev1.next = dummy2.next

          this.head = dummy1.next
     }

     removeDuplicates() {
          let values = new Set()
          let previous = null
          let current = this.head

          while (current !== null) {
               if (values.has(current.value)) {
                    previous.next = current.next
                    this.length--
               } else {
                    values.add(current.value)
                    previous = current
               }

               current = current.next
          }
     }
}