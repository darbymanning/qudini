import parsePhoneNumber from "libphonenumber-js";

export default function (string, defaultCountry) {
  const parsed = parsePhoneNumber(string, { defaultCountry });
  const intl = parsed.format("INTERNATIONAL");
  return intl.replace(/ /g, "");
}
