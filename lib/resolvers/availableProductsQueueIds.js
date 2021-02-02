export default function (kioskData) {
  return kioskData
    .filter(({ storeOpen }) => storeOpen)
    .map(({ queueId }) => queueId);
}
