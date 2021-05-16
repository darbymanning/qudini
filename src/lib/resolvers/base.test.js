import baseResolver from "./base";

jest.mock("$lib/constants", () => ({
  QUDINI_ASSET_BASE: "https://mockbaseurl.com",
}));

describe("baseResolver", () => {
  it("returns the correct data", () => {
    const data = {
      venue: { name: "Venue name" },
      template: { logoUrl: "/some/url.png" },
    };
    const expected = {
      logo: {
        alt: "Venue name",
        src: "https://mockbaseurl.com/some/url.png",
      },
    };
    expect(baseResolver(data)).toEqual(expected);
  });
});
