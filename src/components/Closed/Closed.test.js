import { render } from "@testing-library/svelte";
import Closed from ".";

describe("Closed", () => {
  it("shows the correct heading", () => {
    const { getByText } = render(Closed, {
      header: "Custom Title",
      lineText: "",
    });
    expect(getByText("Custom Title")).toBeInTheDocument();
  });

  it("shows the correct paragraph text", () => {
    const { getByText } = render(Closed, {
      header: "",
      lineText: "Custom Paragraph",
    });
    expect(getByText("Custom Paragraph")).toBeInTheDocument();
  });
});
