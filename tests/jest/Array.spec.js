import { index, reduce } from "../../js/Array";

describe("index", () => {
  test("within bounds", () => {
    const result = index(0)([1, 2, 3]);
    expect(result).toBeJust(1);
  });
  test("out of bounds", () => {
    const result = index(5)([1, 2, 3]);
    expect(result).toBeNothing();
  });
});

describe("reduce", () => {
  test("sum", () => {
    const reducer = (accum) => (next) => accum + next;
    const result = reduce(reducer)(0)([1, 2, 3, 4]);
    expect(result).toBe(10);
  });
});
