const { ListNode } = require("./listNode");

function toList(values) {
  const linkedList = values.reduceRight(
    (acc, val) => new ListNode(val, acc),
    null
  );
  return linkedList;
}

function printList(head) {
  let node = head;
  let copy = "[";
  while (node) {
    copy += node.val + ", ";
    node = node.next;
  }
  copy += "]";
  console.log(copy);
}

module.exports = { toList, printList };
