import { expect, test } from "vitest";
import selectionSort from "../src/2-selection-sort";

const NORMAL_INPUT = [1, 3, 5, 7, 2];
const INPUT_WITH_EMPTY = [4, 1, 2, null];
const EQUAL_LIST = [1, 1, 1, 1, 1];

test("Orders the array correctly", () => {
  expect(selectionSort(NORMAL_INPUT)).toStrictEqual([1, 2, 3, 5, 7]);
});

test("Returns null when item doesn't exist in the array", () => {
  expect(selectionSort(INPUT_WITH_EMPTY)).toStrictEqual([null, 1, 2, 4]);
});

test("Returns the same array", () => {
  expect(selectionSort(EQUAL_LIST)).toStrictEqual(EQUAL_LIST);
});
