import textResolver from "./text";

describe("textResolver", () => {
  it("returns the correct data", () => {
    const data = {
      template: {
        languages: {
          translations: {
            en: {
              welcomeScreen: { header: "Welcome Screen Header" },
              customerScreen: {
                placeholder: {
                  name: "Customer Screen Name",
                  orderNumber: "Customer Screen Order Number",
                  mobileNumber: "Customer Screen Mobile Number",
                },
              },
              confirmationScreen: {
                header: {
                  text: {
                    withMobile: "Confirmation Screen Header",
                  },
                },
                top: {
                  text: {
                    withMobile: "Confirmation Screen Current Position",
                  },
                },
                bottom: {
                  text: {
                    withMobile: "Confirmation Screen We Will Contact You",
                  },
                },
              },
              closeScreen: {
                header: "Close Screen Header",
                lineText: "Close Screen Line Text",
              },
              serviceScreen: {
                header: "Service Screen Header",
              },
            },
          },
        },
      },
    };

    const expected = {
      welcomeScreen: {
        header: "Welcome Screen Header",
      },
      addToQueueForm: {
        header: "Service Screen Header",
        name: "Customer Screen Name",
        orderNumber: "Customer Screen Order Number",
        mobileNumber: "Customer Screen Mobile Number",
      },
      inQueue: {
        header: "Confirmation Screen Header",
        currentPosition: "Confirmation Screen Current Position",
        weWillContactYou: "Confirmation Screen We Will Contact You",
      },
      closeScreen: {
        header: "Close Screen Header",
        lineText: "Close Screen Line Text",
      },
    };
    expect(textResolver(data)).toEqual(expected);
  });
});
