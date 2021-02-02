import availableProductsQueueIdsResolver from "./availableProductsQueueIds";

export default function (kioskData) {
  return availableProductsQueueIdsResolver(kioskData).length
    ? "open"
    : "closed";
}
