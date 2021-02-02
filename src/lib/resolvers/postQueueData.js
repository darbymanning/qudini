import phoneNumberResolver from "./phoneNumber";

export default function (formData, products, settingsForPostData) {
  const mobileNumber = phoneNumberResolver(
    formData.mobileNumber,
    settingsForPostData.countryCode
  );

  const { queueId } = products.find(({ id }) => id === formData.productId);

  formData = {
    ...settingsForPostData,
    ...formData,
    emailAddress: "",
    mobileNumber,
    mobileNumberForConfirmationScreen: mobileNumber,
    venueKioskSerial: "web",
    queueId,
  };
}
