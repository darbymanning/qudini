import { getData, getSettings } from "../services/kiosk";
import baseResolver from "../resolvers/base";
import stateResolver from "../resolvers/state";
import productsResolver from "../resolvers/products";
import settingsForPostDataResolver from "../resolvers/settingsForPostData";
import textResolver from "../resolvers/text";
import getQueueLengthsResolver from "../resolvers/getQueueLengths";

export default async function ({ fetch, page }) {
  const { kioskId } = page.params;

  const [kioskData, kioskSettings] = await Promise.all([
    getData(fetch, kioskId),
    getSettings(fetch, kioskId),
  ]);

  const props = {
    base: baseResolver(kioskSettings),
    kioskId,
    products: productsResolver(kioskSettings),
    settingsForPostData: settingsForPostDataResolver(kioskSettings),
    state: stateResolver(kioskData),
    text: textResolver(kioskSettings),
    queueLengths: getQueueLengthsResolver(
      productsResolver(kioskSettings),
      kioskData
    ),
  };

  return { props };
}
