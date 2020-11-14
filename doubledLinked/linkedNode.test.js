const { LinkedNode } = require("./linkedNode");

describe("LinkedNode", () => {
  it("Creation", () => {
    const node = new LinkedNode({ value: 1 });
    expect(node).toEqual(new LinkedNode({ value: 1 }));
  });

  it("Creation", () => {
    const child = new LinkedNode({ value: 2 });
    const node = new LinkedNode({ value: 1, child: child });
    expect(node).toEqual(new LinkedNode({ value: 1, child: child }));
  });

  it("Creation", () => {
    const child = new LinkedNode({ value: 2 });
    const node = new LinkedNode({ value: 1, next: child, child: child });
    expect(node).toEqual(
      new LinkedNode({ value: 1, next: child, child: child })
    );
  });
});
