import { QUDINI_ASSET_BASE } from "$lib/constants";

export default function (kioskSettings) {
  return {
    logo: {
      alt: kioskSettings.venue.name,
      src: QUDINI_ASSET_BASE + kioskSettings.template.logoUrl,
    },
  };
}
