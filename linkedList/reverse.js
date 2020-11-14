function reverse(head) {
  if (!head) return null;

  let last = null;
  let node = head;

  while (node) {
    const next = node.next;
    node.next = last;
    last = node;
    node = next;
  }
  return last;
}

module.exports = { reverse };
