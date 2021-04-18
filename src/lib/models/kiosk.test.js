import kiosk from "./kiosk";
import { getData, getSettings } from "../services/kiosk";
import productsResolver from "../resolvers/products";
import settingsForPostDataResolver from "../resolvers/settingsForPostData";
import stateResolver from "../resolvers/state";
import textResolver from "../resolvers/text";

jest.mock("../services/kiosk");
jest.mock("../resolvers/products");
jest.mock("../resolvers/settingsForPostData");
jest.mock("../resolvers/state");
jest.mock("../resolvers/text");

describe("kiosk model", () => {
  const data = {
    fetch: "fetchMock",
    page: {
      params: {
        kioskId: 123,
      },
    },
  };

  it("returns the correct data", async () => {
    productsResolver.mockReturnValue("productsResolverMockResponse");
    settingsForPostDataResolver.mockReturnValue(
      "settingsForPostDataResolverMockResponse"
    );
    stateResolver.mockReturnValue("stateResolverMockResponse");
    textResolver.mockReturnValue("textResolverMockResponse");

    const expected = {
      props: {
        kioskId: 123,
        products: "productsResolverMockResponse",
        settingsForPostData: "settingsForPostDataResolverMockResponse",
        state: "stateResolverMockResponse",
        text: "textResolverMockResponse",
      },
    };
    expect(await kiosk(data)).toEqual(expected);
  });

  it("calls the expected services", async () => {
    await kiosk(data);
    expect(getData).toBeCalledWith("fetchMock", 123);
    expect(getSettings).toBeCalledWith("fetchMock", 123);
  });

  it("calls the expected resolvers", async () => {
    getData.mockReturnValue("getDataMockResponse");
    getSettings.mockReturnValue("getSettingsMockResponse");

    await kiosk(data);
    expect(productsResolver).toBeCalledWith("getSettingsMockResponse");
    expect(settingsForPostDataResolver).toBeCalledWith(
      "getSettingsMockResponse"
    );
    expect(stateResolver).toBeCalledWith("getDataMockResponse");
    expect(textResolver).toBeCalledWith("getSettingsMockResponse");
  });
});
