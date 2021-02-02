export default function (kioskSettings) {
  return kioskSettings.products.map(({ id, name, queueId }) => {
    return {
      id,
      name,
      queueId,
    };
  });
}
