import textResolver from "./text";

describe("textResolver", () => {
  it("returns the correct data", () => {
    const data = {
      id: 1,
      template: {
        languages: {
          translations: {
            en: "English Text",
          },
        },
      },
    };
    const expected = "English Text";
    expect(textResolver(data)).toEqual(expected);
  });
});
