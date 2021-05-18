export default function (products, data) {
  const byProductId = {};

  data.map((queueData) => {
    const product = products.find(
      (product) => product.queueId == queueData.queueId
    );
    byProductId[product.id] = {
      ...product,
      length: queueData.length,
    };
  });

  return byProductId;
}
