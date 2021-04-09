import productsResolver from "./products";

describe("productsResolver", () => {
  it("returns the correct data", () => {
    const data = {
      products: [{ id: 1, name: "Product 1", queueId: 2 }],
    };
    const expected = [{ id: 1, name: "Product 1", queueId: 2 }];
    expect(productsResolver(data)).toEqual(expected);
  });
});
