import { expect, test } from "vitest";
import binarySearch from "../src/1-binary-search";

const TEST_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("Finds the number 5 in the array", () => {
  expect(binarySearch(TEST_ARRAY, 5)).toBe(4);
});

test("Returns null when item doesn't exist in the array", () => {
  expect(binarySearch(TEST_ARRAY, 11)).toBe(null);
});
