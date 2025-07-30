import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  test("renders with value", () => {
    render(<Input value="hello" onChange={() => {}} />);
    expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
  });

  test("calls onChange handler", () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  test("applies disabled attribute", () => {
    render(<Input value="" disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  test("renders icon if provided", () => {
    render(<Input value="" Icon={<span data-testid="icon" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    render(<Input value="secret" type="password" />);
    const button = screen.getByRole("button");

    const input = screen.getByDisplayValue("secret");
    expect(input).toHaveAttribute("type", "password");
    fireEvent.click(button);

    expect(input).toHaveAttribute("type", "text");
  });

  test("applies rounded class", () => {
    render(<Input value="" rounded />);
    const container = screen.getByRole("textbox").parentElement;
    expect(container?.className).toMatch(/rounded/);
  });
});
