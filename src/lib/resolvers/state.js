import isOpenResolver from "./isOpen";

export default function (kioskData) {
  return {
    open: isOpenResolver(kioskData),
    closed: !isOpenResolver(kioskData),
  };
}
