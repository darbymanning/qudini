import { render } from "@testing-library/svelte";
import Tel from ".";

describe("Tel", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(Tel);
    expect(getByTestId("tel")).toBeInTheDocument();
  });
});
