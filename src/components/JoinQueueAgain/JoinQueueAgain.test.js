import { fireEvent, render, screen } from "@testing-library/svelte";
import JoinQueueAgain from ".";
import { addToQueue, getData } from "$lib/services/kiosk";
import postQueueResponseResolver from "$lib/resolvers/postQueueResponse";
import stateResolver from "$lib/resolvers/state";

jest.mock("$lib/services/kiosk");
jest.mock("$lib/resolvers/state");
jest.mock("$lib/resolvers/postQueueResponse");
jest.mock("$lib/utils/cookies", () => ({
  getFormDataFromCookies: () => ({
    name: "Joe Bloggs",
  }),
  getPostQueueData: () => "getPostQueueDataMockResponse",
  removeHasCheckedIn: jest.fn(),
  setFormData: jest.fn(),
  setCurrentCustomer: jest.fn(),
}));

jest.spyOn(console, "warn").mockImplementation();

describe("JoinQueueAgain", () => {
  it("shows the customer's first name", () => {
    render(JoinQueueAgain);
    expect(screen.getByText(/Joe/)).toBeInTheDocument();
    expect(screen.queryByText(/Bloggs/)).not.toBeInTheDocument();
  });

  describe("on confirmation", () => {
    it("calls the expected services & resolvers", async () => {
      addToQueue.mockReturnValue("addToQueueMockResponse");
      render(JoinQueueAgain);
      await fireEvent.click(screen.getByText("Yes, add me to the queue"));
      expect(addToQueue).toBeCalledWith("getPostQueueDataMockResponse");
      expect(postQueueResponseResolver).toBeCalledWith(
        "addToQueueMockResponse"
      );
    });
  });

  describe("on cancellation", () => {
    it("calls the expected services & resolvers", async () => {
      getData.mockReturnValue("getDataMockResponse");

      render(JoinQueueAgain);
      await fireEvent.click(screen.getByTestId("cancel"));
      expect(getData).toBeCalled();
      expect(stateResolver).toBeCalledWith("getDataMockResponse");
    });
  });
});
