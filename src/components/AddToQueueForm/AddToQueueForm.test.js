import { fireEvent, render, waitFor } from "@testing-library/svelte";
import AddToQueueForm from ".";
import { addToQueue } from "$lib/services/kiosk";
import postQueueDataResolver from "$lib/resolvers/postQueueData";
import postQueueResponseResolver from "$lib/resolvers/postQueueResponse";
import { cookies } from "$lib/utils";

jest.mock("$lib/services/kiosk");
jest.mock("$lib/resolvers/postQueueData");
jest.mock("$lib/resolvers/postQueueResponse");
jest.mock("$lib/utils/cookies", () => ({
  getFormDataFromCookies: () => ({}),
  setFormData: jest.fn(),
  setCurrentCustomer: jest.fn(),
}));

describe("AddToQueueForm", () => {
  it("shows the correct heading", () => {
    const data = {
      products: [],
      settingsForPostData: {},
      state: {},
      text: {
        customerScreen: { placeholder: {} },
        serviceScreen: { header: "Custom Title" },
      },
    };
    const { getByText } = render(AddToQueueForm, data);
    expect(getByText("Custom Title")).toBeInTheDocument();
  });

  it("shows the correct 'name' label", () => {
    const data = {
      products: [],
      settingsForPostData: {},
      state: {},
      text: {
        customerScreen: { placeholder: { name: "Custom Name" } },
        serviceScreen: {},
      },
    };
    const { getByText } = render(AddToQueueForm, data);
    expect(getByText("Custom Name")).toBeInTheDocument();
  });

  it("shows the correct 'orderNumber' label", () => {
    const data = {
      products: [],
      settingsForPostData: {},
      state: {},
      text: {
        customerScreen: { placeholder: { orderNumber: "Custom Order Number" } },
        serviceScreen: {},
      },
    };
    const { getByText } = render(AddToQueueForm, data);
    expect(getByText("Custom Order Number")).toBeInTheDocument();
  });

  it("shows the correct 'mobileNumber' label", () => {
    const data = {
      products: [],
      settingsForPostData: {},
      state: {},
      text: {
        customerScreen: {
          placeholder: { mobileNumber: "Custom Mobile Number" },
        },
        serviceScreen: {},
      },
    };
    const { getByText } = render(AddToQueueForm, data);
    expect(getByText("Custom Mobile Number")).toBeInTheDocument();
  });

  it("shows the provided products", () => {
    const data = {
      products: [
        { id: "a", name: "Product A" },
        { id: "b", name: "Product B" },
      ],
      settingsForPostData: {},
      state: {},
      text: { customerScreen: { placeholder: {} }, serviceScreen: {} },
    };
    const { getByText } = render(AddToQueueForm, data);
    expect(getByText("Product A")).toBeInTheDocument();
    expect(getByText("Product B")).toBeInTheDocument();
  });

  describe("on submission", () => {
    const data = {
      products: [
        { id: "a", name: "Product A" },
        { id: "b", name: "Product B" },
      ],
      settingsForPostData: {},
      state: {},
      text: { customerScreen: { placeholder: {} }, serviceScreen: {} },
    };

    beforeEach(async () => {
      postQueueDataResolver.mockReturnValue(
        "postQueueDataResolverMockResponse"
      );
      addToQueue.mockReturnValue("addToQueueMockResponse");
      postQueueResponseResolver.mockReturnValue(
        "postQueueResponseResolverMockResponse"
      );

      const { getByRole, component } = render(AddToQueueForm, data);
      const button = getByRole("button");
      await component.$set({ isValid: true });
      fireEvent.click(button);
    });

    it("calls postQueueDataResolver", async () => {
      const formData = {
        mobileNumber: "",
        name: "",
        orderNumber: "",
        productId: "",
      };
      await waitFor(() =>
        expect(postQueueDataResolver).toBeCalledWith(
          formData,
          data.products,
          {}
        )
      );
    });

    it("calls addToQueue", async () => {
      await waitFor(() =>
        expect(addToQueue).toBeCalledWith("postQueueDataResolverMockResponse")
      );
    });

    it("calls postQueueResponseResolver", async () => {
      await waitFor(() =>
        expect(postQueueResponseResolver).toBeCalledWith(
          "addToQueueMockResponse"
        )
      );
    });

    it("calls cookies.setCurrentCustomer()", async () => {
      await waitFor(() =>
        expect(cookies.setCurrentCustomer).toBeCalledWith(
          "postQueueResponseResolverMockResponse"
        )
      );
    });
  });
});
