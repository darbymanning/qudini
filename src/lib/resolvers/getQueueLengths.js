export default function (products, data) {
  const byProductId = {};

  data.map((queueData) => {
    const { id } = products.find(
      (product) => product.queueId === queueData.queueId
    );
    byProductId[id] = queueData.length;
  });

  const lengthsArr = Object.values(byProductId);
  const uniqueLengths = new Set(lengthsArr);
  const allQueuesHaveSamelength = uniqueLengths.size === 1;

  return {
    byProductId,
    allQueuesHaveSamelength,
    length: allQueuesHaveSamelength ? lengthsArr[0] : null,
  };
}
