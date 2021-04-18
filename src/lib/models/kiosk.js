import { getData, getSettings } from "../services/kiosk";
import stateResolver from "../resolvers/state";
import productsResolver from "../resolvers/products";
import settingsForPostDataResolver from "../resolvers/settingsForPostData";
import textResolver from "../resolvers/text";

export default async function ({ fetch, page }) {
  const { kioskId } = page.params;

  const [kioskData, kioskSettings] = await Promise.all([
    getData(fetch, kioskId),
    getSettings(fetch, kioskId),
  ]);

  const props = {
    kioskId,
    products: productsResolver(kioskSettings),
    settingsForPostData: settingsForPostDataResolver(kioskSettings),
    state: stateResolver(kioskData),
    text: textResolver(kioskSettings),
  };

  return { props };
}
