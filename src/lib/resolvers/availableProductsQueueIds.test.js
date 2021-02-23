import availableProductsQueueIdsResolver from "./availableProductsQueueIds";

describe("availableProductsQueueIdsResolver", () => {
  it("returns an array containg open store IDs", () => {
    const data = [
      { storeOpen: true, queueId: 1 },
      { storeOpen: false, queueId: 2 },
    ];
    expect(availableProductsQueueIdsResolver(data)).toEqual([1]);
  });
});
