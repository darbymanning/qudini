import { getData, getSettings } from "$lib/services/kiosk";
import isOpenResolver from "$lib/resolvers/isOpen";
import productsResolver from "$lib/resolvers/products";
import settingsForPostDataResolver from "$lib/resolvers/settingsForPostData";
import textResolver from "$lib/resolvers/text";

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
