export default function (kioskSettings) {
  const {
    countryIsoCode,
    languageIsoCode,
  } = kioskSettings.template.languages.mainLanguage;
  return {
    countryCode: countryIsoCode,
    languageIsoCode,
    venueKioskId: kioskSettings.id,
  };
}
