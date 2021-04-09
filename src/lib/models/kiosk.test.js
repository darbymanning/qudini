import kiosk from "./kiosk";
import { getData, getSettings } from "../services/kiosk";
import isOpenResolver from "../resolvers/isOpen";
import productsResolver from "../resolvers/products";
import settingsForPostDataResolver from "../resolvers/settingsForPostData";
import textResolver from "../resolvers/text";

jest.mock("../services/kiosk");
jest.mock("../resolvers/isOpen");
jest.mock("../resolvers/products");
jest.mock("../resolvers/settingsForPostData");
jest.mock("../resolvers/text");

describe("kiosk model", () => {
  const data = { fetch: "fetchMock", page: { params: { kioskId: 123 } } };

  it("returns the correct data", async () => {
    isOpenResolver.mockReturnValue(true);
    productsResolver.mockReturnValue("productsResolverMockResponse");
    settingsForPostDataResolver.mockReturnValue(
      "settingsForPostDataResolverMockResponse"
    );
    textResolver.mockReturnValue("textResolverMockResponse");

    const expected = {
      props: {
        products: "productsResolverMockResponse",
        settingsForPostData: "settingsForPostDataResolverMockResponse",
        state: {
          open: true,
          closed: false,
        },
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
    expect(isOpenResolver).toBeCalledWith("getDataMockResponse");
    expect(productsResolver).toBeCalledWith("getSettingsMockResponse");
    expect(settingsForPostDataResolver).toBeCalledWith(
      "getSettingsMockResponse"
    );
    expect(textResolver).toBeCalledWith("getSettingsMockResponse");
  });
});
