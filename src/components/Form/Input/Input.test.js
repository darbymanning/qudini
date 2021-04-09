import { render } from "@testing-library/svelte";
import Input from ".";

describe("Input", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(Input);
    expect(getByTestId("input")).toBeInTheDocument();
  });
});
