import InQueue from ".";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { getCustomerDetails, getData } from "$lib/services/kiosk";
import getPositionResolver from "$lib/resolvers/getPosition";
import currentCustomerResolver from "$lib/resolvers/currentCustomer";
import stateResolver from "$lib/resolvers/state";

jest.mock("$lib/services/kiosk");
jest.mock("$lib/resolvers/getPosition");
jest.mock("$lib/resolvers/currentCustomer");
jest.mock("$lib/resolvers/state");

describe("InQueue", () => {
  const data = {
    firstName: "Billy",
    customerId: 123,
    position: "Position 5",
    inQueue: {
      header: "Thanks",
      currentPosition: "Position:",
      weWillContactYou: "Please wait...",
    },
    state: { open: true },
    kioskId: 456,
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

    it("resets the app state when clicking 'Back to check-in'", async () => {
      process.browser = true;
      data.position = null;
      getData.mockReturnValue("getDataMockResponse");

      render(InQueue, data);

      await fireEvent.click(screen.getByRole("button"));
      expect(getData).toBeCalled();
      expect(stateResolver).toBeCalledWith("getDataMockResponse");
    });

    it("resets the app state after five minutes", async () => {
      process.browser = true;
      jest.spyOn(console, "warn").mockImplementation();
      data.position = null;
      getData.mockReturnValue("getDataMockResponse");

      const fiveMinutesAgo = new Date() - 300000;

      render(InQueue, {
        readyTimestamp: fiveMinutesAgo,
      });

      await window.dispatchEvent(new Event("focus"));
      expect(getData).toBeCalled();
      expect(stateResolver).toBeCalledWith("getDataMockResponse");
    });
  });
});
