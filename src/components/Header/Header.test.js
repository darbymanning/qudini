import { render } from "@testing-library/svelte";
import Header from ".";

describe("Header", () => {
  it("shows the Qudini logo", () => {
    const { getByText } = render(Header);
    expect(getByText("Qudini Logo")).toBeInTheDocument();
  });
});
