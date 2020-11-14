const { merge } = require("./merge");
const { makeList } = require("./linkedUtil");

const { head } = makeList();
describe("Merge", () => {
  it("void list", () => {
    expect(merge(head)).toEqual(head);
  });
});
