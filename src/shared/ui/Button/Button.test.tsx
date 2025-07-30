import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("renders with children", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("calls onClick handler", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>click me</Button>);
    fireEvent.click(screen.getByText("click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies disabled attribute", () => {
    render(<Button disabled>disabled</Button>);
    expect(screen.getByText("disabled")).toBeDisabled();
  });

  test("applies variant class", () => {
    render(<Button variant="primary">primary</Button>);
    const btn = screen.getByText("primary");
    expect(btn.className).toMatch(/primary/);
  });
});
