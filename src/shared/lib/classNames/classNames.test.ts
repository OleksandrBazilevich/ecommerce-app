import { describe, expect, test } from "vitest";

import { classNames } from "./classNames";

describe("classNames", () => {
  test("with 1 argument", () => {
    expect(classNames("class1")).toBe("class1");
  });

  test("with conditional class", () => {
    expect(classNames("class1", { class2: true })).toBe("class1 class2");
    expect(classNames("class1", { class2: false })).toBe("class1");
  });

  test("with empty strings and undefined values", () => {
    expect(classNames("class1", "", undefined, "class2")).toBe("class1 class2");
    expect(classNames("class1", { class2: true }, "", undefined)).toBe(
      "class1 class2"
    );
  });
});
