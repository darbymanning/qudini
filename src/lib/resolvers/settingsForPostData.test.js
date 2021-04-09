import settingsForPostDataResolver from "./settingsForPostData";

describe("settingsForPostDataResolver", () => {
  it("returns the correct data", () => {
    const data = {
      id: 1,
      template: {
        languages: {
          mainLanguage: {
            countryIsoCode: "countryIsoCode",
            languageIsoCode: "languageIsoCode",
          },
        },
      },
    };
    const expected = {
      countryCode: "countryIsoCode",
      languageIsoCode: "languageIsoCode",
      venueKioskId: 1,
    };
    expect(settingsForPostDataResolver(data)).toEqual(expected);
  });
});
