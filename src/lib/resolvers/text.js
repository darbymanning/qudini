export default function (kioskData) {
  const { en } = kioskData.template.languages.translations;
  return {
    welcomeScreen: {
      header: en.welcomeScreen.header,
    },
    addToQueueForm: {
      header: en.serviceScreen.header,
      name: en.customerScreen.placeholder.name,
      orderNumber: en.customerScreen.placeholder.orderNumber,
      mobileNumber: en.customerScreen.placeholder.mobileNumber,
    },
    inQueue: {
      header: en.confirmationScreen.header.text.withMobile,
      currentPosition: en.confirmationScreen.top.text.withMobile,
      weWillContactYou: en.confirmationScreen.bottom.text.withMobile,
    },
    closeScreen: {
      header: en.closeScreen.header,
      lineText: en.closeScreen.lineText,
    },
  };
}
