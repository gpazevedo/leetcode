const { LinkedNode } = require("./linkedNode");

function toList(values) {
  const linkedList = values.reduceRight(
    (acc, val) => new LinkedNode(val, acc),
    null
  );
  return linkedList;
}

function printList(head) {
  let node = head;
  let copy = "[";
  while (node) {
    copy += node.value + ", ";
    node = node.next;
  }
  copy += "]";
  console.log(copy);
}

function makeList() {
  let pos = 1;
  const head = new LinkedNode({ value: pos });

  pos = nodes(head, pos);
  console.log(`${pos} nodes`);

  return { head, pos };
}

function nodes(origin, pos) {
  console.log("Nodes Again", pos);
  let previous = origin;

  while (Math.random() < 0.8) {
    const node = new LinkedNode({ value: ++pos });
    //console.log("Novo NODE:", node.value);

    const luck = Math.random();

    if (luck < 0.2 && !previous.child) {
      // Child
      console.log("Child", node.value);
      previous.child = node;
      node.prev = null;

      pos = nodes(node, pos);
      continue;
    }
    // Lateral
    previous.next = node;
    node.prev = previous;
    previous = node;
    //console.log(pos, node);
  }
  return pos;
}

module.exports = { toList, printList, makeList };
