import currentCustomerResolver from "./currentCustomer";

describe("currentCustomerResolver", () => {
  it("returns the correct data", () => {
    const data = {
      customerDetails: {
        customerInQueue: {
          currentPosition: 5,
          customer: {
            identifier: 123,
            name: "George Washington",
          },
        },
      },
    };
    const expected = {
      customerId: 123,
      firstName: "George",
      inQueue: true,
      position: 5,
    };
    expect(currentCustomerResolver(data)).toEqual(expected);
  });

  it("returns falsy when no customerInQueue data exists", () => {
    const withFalsy = { customerDetails: { customerInQueue: false } };
    const withNull = { customerDetails: { customerInQueue: null } };
    const withUndefined = { customerDetails: { customerInQueue: undefined } };
    const withMissing = { customerDetails: {} };
    expect(currentCustomerResolver(withFalsy)).toBeNull();
    expect(currentCustomerResolver(withNull)).toBeNull();
    expect(currentCustomerResolver(withUndefined)).toBeNull();
    expect(currentCustomerResolver(withMissing)).toBeNull();
  });
});
