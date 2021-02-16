export const getSettings = {
  active: true,
  assigned: true,
  bookingWidgetLink: null,
  description: "Remote JoinQ",
  eventSeriesLink: null,
  id: 4946,
  identifier: "A0WUV2",
  imei: null,
  isPushlinkEnabled: null,
  lastOnline: "2020-06-02T21:11:38.000+01:00",
  lastSoftwareUpdate: "2021-01-29T18:48:34.000Z",
  makeAndModel: " ",
  operatingSystem: "web",
  qudiniVersion: "[PostmanRuntime/7.26.8]",
  serial: "web",
  template: {
    backgroundColor: "#fff",
    backgroundImage: null,
    backgroundImageIsEnabled: false,
    backgroundImageUrl: null,
    buttonTextColor: "#fff",
    confirmationScreenToShow: "CUSTOMER_POSITION",
    customTextTranslations: {},
    customerScreenEmail: null,
    customerScreenGroupSize: "NEVER",
    customerScreenIsRequestOrderNumber: false,
    customerScreenNameField: "MANDATORY",
    customerScreenNotes: "NEVER",
    customerScreenOrderNumberValidation: null,
    customerScreenRequestMobileNumberWhen: "ALWAYS",
    customerScreenRequestMpnQueueLength: 0,
    customerScreenRequestMpnWaitTime: 0,
    customerScreenRequestOrderNumber: "MANDATORY",
    dateCreated: "2020-06-02",
    dateEdited: "2020-06-03",
    enableBookingCheckin: false,
    enableBookingWidget: false,
    enableEventCheckin: false,
    enableOrderLookupConfig: false,
    enableScreensaver: false,
    enableWalkin: true,
    font: "Arial",
    headingTextColor: "#fff",
    id: 338,
    languageIsDisplayOther: false,
    languagePosition: null,
    languages: {
      mainLanguage: {
        countryName: "United Kingdom (Great Britain)",
        countryIsoCode: "GB",
        countryCallingCode: "+44",
        languageName: "English",
        languageIsoCode: "en",
        localisedName: "English",
        userLocalisedName: "English",
      },
      otherLanguages: [],
      translations: {
        en: {
          welcomeScreen: {
            header: "Pick-Up and Drop-Off Queue Manager",
            center: {
              number: "",
              position: "Enter",
              checkInLine1: "JOIN",
              checkInLine2: "QUEUE",
              eventCheckInLine1: "Check-in for an event",
              eventCheckInLine2: "",
            },
          },
          serviceScreen: {
            navigation: {
              previous: "Back",
            },
            header: "Your child's room",
          },
          customerScreen: {
            navigation: {
              previous: "Back",
              next: "Next",
            },
            placeholder: {
              name: "Your Name",
              nameInfo:
                "We collect your name so that we can identify you during service",
              mobileNumber: "Mobile Number",
              mobileNumberInfo:
                "We collect your mobile number so that we can keep you updated on your place in the queue",
              email: "Email",
              emailInfo:
                "We collect your email address so that we can email you on updates on the progress of your service",
              orderNumber: "Child's Name",
              orderNumberInfo:
                "We collect your child's name in order to help prepare us for handover",
              bookingReference: "Booking Reference",
              orReference: "or",
            },
            header: {
              text: {
                withMobile:
                  "Please enter your details so that we can begin the handover process and update your queue position",
                withoutMobile:
                  "Please enter your details so that we can begin the handover process and update your queue position",
                bookingCheckIn:
                  "Please enter your details so that we can begin the handover process and update your queue position",
              },
            },
          },
          confirmationScreen: {
            header: {
              text: {
                withMobile: "Thank you for checking-in",
                withoutMobile: "Thank you for checking-in",
                bookingCheckIn: "Thank you for checking-in",
              },
            },
            navigation: {
              back: "Back",
              nextCustomer: "Next Customer",
              centerNext: "Next Customer",
            },
            top: {
              text: {
                withMobile: "You are currently in the queue at position",
                withoutMobile: "You are currently in the queue at position",
              },
              subText: {
                withMobile: "",
                withoutMobile: "",
                name: "Name",
                bookingReference: "Booking Reference",
              },
            },
            bottom: {
              text: {
                withMobile: "We will text you when it is almost your turn",
                withoutMobile:
                  "We will let you know when it is almost your turn",
              },
              subText: {
                withMobile: "",
                withoutMobile: "",
              },
            },
          },
          notificationMessages: {
            success: {
              kiosk: {
                online: " online, connected to internet.",
                registered: " registered.",
              },
              order: {
                details: "Looking up your order details.",
              },
            },
            error: {
              kiosk: {
                offline: "Kiosk offline, no internet connection.",
                deactivated: "Kiosk deactivated, please register it again.",
                urlIdentifier: "Invalid url or kioskIdentifier.",
                input: "Please input ",
                tryAgain: "Please try again",
                slowNetwork: "Couldn't process request due to slow network",
              },
              ticket: {
                printerUrl: "Printer URL not set.",
              },
              customer: {
                mobile: "Please enter a valid phone number",
                invalidEmail: "Not valid email address",
                invalidDetails:
                  "Invalid details. Please check your customer details",
                emptyDetails:
                  "Either email, mobile number or reference number must be provided",
                mandatoryName: "Please enter your name",
                mandatoryEmail: "Please enter your email",
                mandatoryPhone: "Please enter your mobile number",
                mandatoryOrder: "Please enter your order number",
              },
              order: {
                numberInvalid: "Order number invalid.",
                numberFormat:
                  "Order number field: Should be numbers only and max 8 characters.",
                notFound: "Order not found with supplied details.",
                name: "Name field doesn't allow numbers",
              },
              queue: {
                noAvailable: "Sorry, the queue is full or has no availability",
              },
              booking: {
                notFound:
                  "Booking not found. Please check your customer details",
              },
            },
          },
          closeScreen: {
            header: "Pick-up and drop-off is now closed",
            lineText:
              "Sorry, but this kiosk is currently closed. For assistance, please speak to a member of staff.",
          },
          queueErrorScreen: {
            error: {
              queue: {
                noAvailable: "Sorry, the queue is full or has no availability",
                returnToWelcomePage: "Return to welcome page",
              },
            },
          },
          isEnabled: true,
          isTranslationAvailable: true,
          countryIsoCode: "GB",
          countryCallingCode: "+44",
          languageIsoCode: "en",
          languageName: "English",
          localisedName: "English",
          userLocalisedName: "English",
        },
      },
    },
    logo: {},
    logoUrl: "/api/kiosk/338/logo.png?v=f323bbde-7b7a-47ae-b768-64007673f2b5",
    name: "Remote Collection and Drop off",
    noAvailableImage: null,
    noAvailableImageUrl: null,
    orderLookupConfig: null,
    screenFlow: "Default",
    screenSaverEnableInSeconds: 0,
    secondaryTextColor: "#2AB5A8",
    serviceButtonColor: "#2ab5a8",
    serviceScreenIsWithIcons: false,
    serviceShowWaitTime: false,
    showNothing: false,
    useDefaultStyleTemplateLogo: false,
    videoURL: null,
    welcomeButtonColor: "#2ab5a8",
    welcomeScreenIsRemove: false,
  },
  ticket: null,
  venue: {
    defaultCountryCode: "gb",
    defaultLanguageIsoCode: "en",
    id: 4541,
    merchant: {
      featureSettings: {
        hasQudiniBrand: true,
      },
      id: 686,
    },
    name: "CRDN London Road",
  },
  products: [
    {
      iconId: null,
      id: 66832,
      name: "Piglets",
      queueId: 8486,
      queueName: "Piglets",
      waitTime: 0,
    },
    {
      iconId: null,
      id: 66836,
      name: "Roos",
      queueId: 8487,
      queueName: "Roos",
      waitTime: 0,
    },
    {
      iconId: null,
      id: 66834,
      name: "Tiggers",
      queueId: 8485,
      queueName: "Tiggers",
      waitTime: 0,
    },
  ],
};

export const getData = [
  {
    queueId: 8485,
    length: 0,
    waitTime: 0,
    fullyBooked: false,
    serversAvailable: 3,
    maxGroupSize: 20,
    storeOpen: true,
    underCapacity: false,
    openingTimes: {
      monday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50865,
      },
      tuesday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50866,
      },
      wednesday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50867,
      },
      thursday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50868,
      },
      friday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50869,
      },
    },
    kioskOpeningTimes: {},
  },
  {
    queueId: 8486,
    length: 0,
    waitTime: 0,
    fullyBooked: false,
    serversAvailable: 2,
    maxGroupSize: 20,
    storeOpen: true,
    underCapacity: false,
    openingTimes: {
      monday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50865,
      },
      tuesday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50866,
      },
      wednesday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50867,
      },
      thursday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50868,
      },
      friday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50869,
      },
    },
    kioskOpeningTimes: {},
  },
  {
    queueId: 8487,
    length: 0,
    waitTime: 0,
    fullyBooked: false,
    serversAvailable: 2,
    maxGroupSize: 20,
    storeOpen: true,
    underCapacity: false,
    openingTimes: {
      monday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50865,
      },
      tuesday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50866,
      },
      wednesday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50867,
      },
      thursday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50868,
      },
      friday: {
        startHours: 7,
        startMinutes: 30,
        endHours: 19,
        endMinutes: 0,
        id: 50869,
      },
    },
    kioskOpeningTimes: {},
  },
];

export const addToQueue = {
  status: "SUCCESS",
  success: {
    customerInQueue: {
      currentPosition: 1.0,
      customer: {
        bookingRef: "YWEY2107",
        groupSize: 1.0,
        id: 7.5350035e7,
        identifier: "c6b023ba61d5b4ec181c7b478dc22202b",
        name: "Test",
        orderNumber: "Test",
        ticketNumber: "043",
      },
      expectedTime: "2021-01-27T22:22:16.000Z",
      id: 5.5359442e7,
      joinedTime: "2021-01-27T22:22:15.000Z",
      minutesRemaining: "0",
      originalExpectedTime: "2021-01-27T22:22:16.000Z",
      queue: {
        averageServeTimeMinutes: 5.0,
        colour: "D96D3D",
        customerLength: 0.0,
        id: 8485.0,
        name: "Tiggers",
        venue: {
          id: 4541.0,
          isBookingEnabled: false,
          isWalkinEnabled: true,
          name: "CRDN London Road",
        },
      },
      timeRemaining: "0mins",
      waitTime: 0.0,
    },
  },
};

export const getCustomerDetails = {
  served: {
    customerDetails: {
      averageWaitForQueue: 0,
      bookingMeetingUrl: null,
      bookingRescheduleUrl: null,
      customerInQueue: null,
      customerLeft: null,
      customerServed: {
        advisor: "Tiggers",
        bookingEndTime: null,
        bookingStartTime: null,
        collectedTime: "2021-01-27T17:47:29.000Z",
        customer: {
          bookingRef: "OK2D2107",
          createdBySystem: "KIOSK",
          groupSize: 1,
          id: 75349427,
          language: { isoCode: "en", name: "English" },
          name: "Darby Manning",
          orderNumber: "Isaac \u0026 Joel",
          ticketNumber: "031",
          title: null,
        },
        location: null,
        product: {
          averageServeTimeMinutes: 4,
          colour: "",
          iconId: null,
          id: 66834,
          name: "Tiggers",
        },
        serveEndTime: "2021-01-27T17:31:46.000Z",
      },
      identifier: "c34392780a40d41e7bebb1d4db041f5fe",
      isLast: false,
      queue: {
        id: 8485,
        identifier: "yd6xa",
        minWaitTimeMinutes: null,
        name: "Tiggers",
        venue: {
          id: 4541,
          isBookingEnabled: false,
          isWalkinEnabled: true,
          location: {
            address1: null,
            address2: null,
            address3: null,
            address4: null,
            country: "United Kingdom (Great Britain)",
            googleMapMarkerLink:
              "https://www.google.com/maps?q=53.833737,-2.429015",
            locality: null,
            postcode: null,
            region: null,
          },
          name: "CRDN London Road",
          phoneNumber: null,
        },
      },
      queueLength: 0,
      state: "POST_SERVED",
      venueOpeningHours: [
        {
          date: "2021-01-27",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        {
          date: "2021-01-28",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        {
          date: "2021-01-29",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        { date: "2021-01-30", openingHours: null },
        { date: "2021-01-31", openingHours: null },
        {
          date: "2021-02-01",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        {
          date: "2021-02-02",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
      ],
    },
    status: "ok",
  },
  inQueue: {
    customerDetails: {
      averageWaitForQueue: 0,
      bookingMeetingUrl: null,
      bookingRescheduleUrl: null,
      customerInQueue: {
        bookedServer: null,
        bookingEndTime: null,
        bookingStartTime: null,
        collectingServer: null,
        currentPosition: 1,
        customer: {
          bookingRef: "OK2D2107",
          createdBySystem: "KIOSK",
          groupSize: 1,
          id: 75349427,
          language: { isoCode: "en", name: "English" },
          name: "Darby Manning",
          orderNumber: "Isaac \u0026 Joel",
          ticketNumber: "031",
          title: null,
        },
        expectedTime: "2021-01-27T17:30:37.000Z",
        hasBeenSentReturnMessage: true,
        id: 55359012,
        isArrived: false,
        isFixed: false,
        lastUpdateTime: "2021-01-27T17:30:36.000Z",
        minutesRemaining: "-1",
        product: {
          averageServeTimeMinutes: 4,
          colour: "",
          iconId: null,
          id: 66834,
          name: "Tiggers",
        },
        timeRemaining: "-1mins",
      },
      customerLeft: null,
      customerServed: null,
      identifier: "c34392780a40d41e7bebb1d4db041f5fe",
      isLast: true,
      queue: {
        id: 8485,
        identifier: "yd6xa",
        minWaitTimeMinutes: null,
        name: "Tiggers",
        venue: {
          id: 4541,
          isBookingEnabled: false,
          isWalkinEnabled: true,
          location: {
            address1: null,
            address2: null,
            address3: null,
            address4: null,
            country: "United Kingdom (Great Britain)",
            googleMapMarkerLink:
              "https://www.google.com/maps?q=53.833737,-2.429015",
            locality: null,
            postcode: null,
            region: null,
          },
          name: "CRDN London Road",
          phoneNumber: null,
        },
      },
      queueLength: 1,
      state: "CALLED_BACK",
      venueOpeningHours: [
        {
          date: "2021-01-27",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        {
          date: "2021-01-28",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        {
          date: "2021-01-29",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        { date: "2021-01-30", openingHours: null },
        { date: "2021-01-31", openingHours: null },
        {
          date: "2021-02-01",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
        {
          date: "2021-02-02",
          openingHours: {
            endHours: 19,
            endMinutes: 0,
            startHours: 7,
            startMinutes: 30,
          },
        },
      ],
    },
    status: "ok",
  },
};

export default {
  addToQueue,
  getCustomerDetails,
  getData,
  getSettings,
};
