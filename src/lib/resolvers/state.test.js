import stateResolver from "./state";
import isOpenResolver from "./isOpen";

jest.mock("./isOpen");

describe("stateResolver", () => {
  it("returns the correct data", () => {
    isOpenResolver.mockReturnValue(true);
    expect(stateResolver()).toEqual({
      open: true,
      closed: false,
    });

    isOpenResolver.mockReturnValue(false);
    expect(stateResolver()).toEqual({
      open: false,
      closed: true,
    });
  });

  it("calls the expected resolvers", () => {
    stateResolver("kisokDataMock");
    expect(isOpenResolver.mock.calls).toEqual([
      ["kisokDataMock"],
      ["kisokDataMock"],
    ]);
  });
});
