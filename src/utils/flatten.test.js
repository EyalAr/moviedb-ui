import flatten from "./flatten"

it("should flatten array of arrays", () => {
  expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3])
})
