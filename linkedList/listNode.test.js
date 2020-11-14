const { ListNode } = require("./listNode");

describe("ListNode", () => {
  it("builds a new instance", () => {
    const node = new ListNode("Cheese");
    expect(node).toEqual(new ListNode("Cheese"));
  });
});
