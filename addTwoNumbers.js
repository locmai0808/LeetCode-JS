function addTwoNumbers(l1, l2) {
  let List = new ListNode(0);
  let head = List;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;

    carry = 0;
  }
  return List.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2));
