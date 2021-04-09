import postQueueResponseResolver from "./postQueueResponse";

describe("postQueueResponseResolver", () => {
  it("returns the correct data", () => {
    const data = {
      success: {
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
    expect(postQueueResponseResolver(data)).toEqual(expected);
  });
});
