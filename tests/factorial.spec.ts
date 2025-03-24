import { expect, test } from "vitest";
import factorial from "../src/3-factorial";

test("Factorial of 5 equals 120", () => {
  expect(factorial(5)).toBe(120);
});

test("Factorial of 0 equals 1", () => {
  expect(factorial(0)).toBe(1);
});

test("Factorial of 1 equals 1", () => {
  expect(factorial(1)).toBe(1);
});

test("Factorial doesn't exist for negative numbers", () => {
  expect(factorial(-1)).toBe(undefined);
});
