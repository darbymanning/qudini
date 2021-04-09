import isOpenResolver from "./isOpen";
import availableProductsQueueIdsResolver from "./availableProductsQueueIds";

jest.mock("./availableProductsQueueIds");

describe("isOpenResolver", () => {
  it("returns the truthy if 'products' are available", () => {
    availableProductsQueueIdsResolver.mockReturnValue([1, 2]);
    expect(isOpenResolver("kioskData")).toBeTruthy();
    expect(availableProductsQueueIdsResolver).toBeCalledWith("kioskData");
  });

  it("returns the falsy if 'products' are not available", () => {
    availableProductsQueueIdsResolver.mockReturnValue([]);
    expect(isOpenResolver("kioskData")).toBeFalsy();
    expect(availableProductsQueueIdsResolver).toBeCalledWith("kioskData");
  });
});
