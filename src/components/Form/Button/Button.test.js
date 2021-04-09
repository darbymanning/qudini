import { render } from "@testing-library/svelte";
import Button from ".";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByRole } = render(Button);
    expect(getByRole("button")).toBeInTheDocument();
  });
});
