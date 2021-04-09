import getPositionResolver from "./getPosition";

describe("getPositionResolver", () => {
  it("returns the correct data", () => {
    const data = {
      customerDetails: { customerInQueue: { currentPosition: 5 } },
    };
    expect(getPositionResolver(data)).toEqual(5);
  });

  it("returns falsy when no customerInQueue data exists", () => {
    const withFalsy = { customerDetails: { customerInQueue: false } };
    const withNull = { customerDetails: { customerInQueue: null } };
    const withUndefined = { customerDetails: { customerInQueue: undefined } };
    const withMissing = { customerDetails: {} };
    expect(getPositionResolver(withFalsy)).toBeNull();
    expect(getPositionResolver(withNull)).toBeNull();
    expect(getPositionResolver(withUndefined)).toBeNull();
    expect(getPositionResolver(withMissing)).toBeNull();
  });
});

export default function ({ customerDetails }) {
  const inQueue = customerDetails.customerInQueue;
  return inQueue ? inQueue.currentPosition : null;
}
