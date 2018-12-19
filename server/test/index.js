import assert from "assert";
import router from "../routes/products";

describe("Products", () => {
  it("router should exist", () => {
    assert.equal(typeof router, "function");
  });
});
