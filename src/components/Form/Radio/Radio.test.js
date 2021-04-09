import { render } from "@testing-library/svelte";
import Radio from ".";

describe("Radio", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(Radio);
    expect(getByTestId("radio")).toBeInTheDocument();
  });
});
