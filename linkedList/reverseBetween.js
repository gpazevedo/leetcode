const { printList, toList } = require("./listUtil");

function reverseBetween(head, m, n) {
  if (!head) return null;
  let top = head;
  printList(top);

  let currentPos = 0;
  let currentNode = top;

  if (m > 0) {
    while (currentPos < m - 1 && currentNode) {
      currentPos++;
      currentNode = currentNode.next;
    }
    if (!currentNode) return top;
  }

  const start = currentNode;
  let node = m === 0 ? head : start.next;

  while (currentPos < m + n - 1 && currentNode) {
    currentPos++;
    currentNode = currentNode.next;
  }
  const final = currentNode.next;

  // Reverse
  let first = final;

  while (node != final) {
    const next = node.next;
    node.next = first;
    first = node;
    node = next;
  }
  if (m === 0) {
    //printList(first);
    return first;
  }
  start.next = first;
  //printList(top);

  return top;
}

const head = toList(["A", "B", "C", "D", "E", "F"]);

printList(reverseBetween(head, 1, 3));

//printList(reverseBetween(toList(["A", "B", "C", "D", "E", "F"], 1, 3)));

module.exports = { reverseBetween };
