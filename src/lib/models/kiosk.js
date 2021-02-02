import { getData, getSettings } from "../services/kiosk";
import isOpenResolver from "../resolvers/isOpen";
import productsResolver from "../resolvers/products";
import settingsForPostDataResolver from "../resolvers/settingsForPostData";
import textResolver from "../resolvers/text";

export default async function ({ fetch, page }) {
  const kioskId = page.params.kioskId;

  const [kioskData, kioskSettings] = await Promise.all([
    getData(fetch, kioskId),
    getSettings(fetch, kioskId),
  ]);

  const props = {
    products: productsResolver(kioskSettings),
    settingsForPostData: settingsForPostDataResolver(kioskSettings),
    state: {
      open: isOpenResolver(kioskData),
      closed: !isOpenResolver(kioskData),
    },
    text: textResolver(kioskSettings),
  };

  return { props };
}
