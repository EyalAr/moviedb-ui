import generateImgUrl from "./generateImgUrl"

it("should return correct image path", () => {
  expect(generateImgUrl(
    "/img.jpg", "w500", "http://base.com/"
  )).toBe("http://base.com/w500/img.jpg")
})
