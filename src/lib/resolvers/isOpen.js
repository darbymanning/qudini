import availableProductsQueueIdsResolver from "./availableProductsQueueIds";

export default function (kioskData) {
  return availableProductsQueueIdsResolver(kioskData).length > 0;
}
