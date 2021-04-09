import parsePhoneNumber from "libphonenumber-js";
import phoneNumberResolver from "./phoneNumber";

jest.mock("libphonenumber-js");
const parsePhoneNumberMockImplementation = (string, _defaultCountry) => ({
  format: () => string,
});

describe("phoneNumberResolver", () => {
  it("calls parsePhoneNumber library", () => {
    parsePhoneNumber.mockImplementation(parsePhoneNumberMockImplementation);
    phoneNumberResolver("07788 777666", "gb");
    expect(parsePhoneNumber).toBeCalledWith("07788 777666", {
      defaultCountry: "gb",
    });
  });

  it("returns a string with no spaces", () => {
    parsePhoneNumber.mockImplementation(parsePhoneNumberMockImplementation);
    expect(phoneNumberResolver("07788 777666", "gb")).toEqual("07788777666");
  });
});
