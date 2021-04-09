import InQueue from ".";
import { render } from "@testing-library/svelte";
import { getCustomerDetails } from "$lib/services/kiosk";
import getPositionResolver from "$lib/resolvers/getPosition";
import currentCustomerResolver from "$lib/resolvers/currentCustomer";

jest.mock("$lib/services/kiosk");
jest.mock("$lib/resolvers/getPosition");
jest.mock("$lib/resolvers/currentCustomer");

describe("InQueue", () => {
  const data = {
    firstName: "Billy",
    customerId: 123,
    position: "Position 5",
    header: { text: { withMobile: "Thanks" } },
    top: { text: { withMobile: "Position:" } },
    bottom: { text: { withMobile: "Please wait..." } },
  };
  describe("when `position` is defined", () => {
    it("displays the current position", () => {
      const { getByText } = render(InQueue, data);
      expect(getByText("Position 5")).toBeInTheDocument();
    });

    it("updates the position using getCustomerDetails", async () => {
      getCustomerDetails.mockReturnValue("getCustomerDetailsMockResponse");
      getPositionResolver.mockReturnValue("Position 4");
      jest.useFakeTimers();

      const { getByText } = render(InQueue, data);

      setTimeout(() => {
        expect(getCustomerDetails).toBeCalled();
        expect(getPositionResolver).toBeCalledWith(
          "getCustomerDetailsMockResponse"
        );
        expect(getByText("Position 4")).toBeInTheDocument();
      });
    });

    it("updates the position", async () => {
      getCustomerDetails.mockReturnValue("getCustomerDetailsMockResponse");
      getPositionResolver.mockReturnValue("Position 4");
      jest.useFakeTimers();

      const { getByText } = render(InQueue, data);

      setTimeout(() => {
        expect(getCustomerDetails).toBeCalled();
        expect(getPositionResolver).toBeCalledWith(
          "getCustomerDetailsMockResponse"
        );
        expect(getByText("Position 4")).toBeInTheDocument();
      });
    });

    it("calls cookies.setCurrentCustomer()", async () => {
      currentCustomerResolver.mockReturnValue(
        "currentCustomerResolverMockResponse"
      );
      jest.useFakeTimers();
      setTimeout(() => {
        expect(cookies.setCurrentCustomer).toBeCalledWith(
          "currentCustomerResolverMockResponse"
        );
      });
    });
  });

  describe("when `position` is not defined", () => {
    it("displays a confirmation for the user", () => {
      data.position = null;
      const { getByText } = render(InQueue, data);
      expect(getByText(/thank you/i)).toBeInTheDocument();
    });
  });
});
