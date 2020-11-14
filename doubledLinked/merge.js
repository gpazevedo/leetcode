//const { LinkedNode } = require("./linkedNode");
const { printList, makeList } = require("./linkedUtil");

function merge(head) {
  if (head == undefined) return head;

  let first = head;

  let node = first;
  let anterior = first;

  while (node) {
    let next = node.next;

    if (node.child) {
      const [head, last] = merge(node.child);
      node.next = head;
      last.next = next;
      anterior = last;
    } else {
      anterior = node;
    }
    node = next;
  }

  return [first, anterior];
}

const { head, pos } = makeList();
console.log("Nos:", pos);

merge(head);

printList(head);

module.exports = { merge };
