import postQueueDataResolver from "./postQueueData";
import phoneNumberResolver from "./phoneNumber";

jest.mock("./phoneNumber");

describe("postQueueDataResolver", () => {
  it("returns the correct data", () => {
    phoneNumberResolver.mockReturnValue("phoneNumberResolverMockResponse");
    const data = [
      { _spreadFormData: "data", mobileNumber: "07788 777666", productId: 1 },
      [{ id: 1, queueId: 2 }],
      { _spreadSettingsForPostData: "data", countryCode: "gb" },
    ];
    const expected = expect.objectContaining({
      _spreadSettingsForPostData: "data",
      _spreadFormData: "data",
      emailAddress: "",
      mobileNumber: "phoneNumberResolverMockResponse",
      mobileNumberForConfirmationScreen: "phoneNumberResolverMockResponse",
      venueKioskSerial: "web",
      queueId: 2,
    });
    expect(postQueueDataResolver(...data)).toEqual(expected);
  });

  it("calls phoneNumberResolver", () => {
    const data = [
      { mobileNumber: "07788 777666", productId: 1 },
      [{ id: 1 }],
      { countryCode: "gb" },
    ];
    postQueueDataResolver(...data);
    expect(phoneNumberResolver).toBeCalledWith("07788 777666", "gb");
  });

  it("resolves the correct queue ID for the product", () => {
    const data = [
      { productId: "selectedProduct" },
      [
        { id: "NotSelectedProduct", queueId: "NotSelectedQueue" },
        { id: "selectedProduct", queueId: "selectedQueue" },
      ],
      { countryCode: "gb" },
    ];
    const expected = expect.objectContaining({ queueId: "selectedQueue" });
    expect(postQueueDataResolver(...data)).toEqual(expected);
  });
});
