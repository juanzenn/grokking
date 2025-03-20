import { expect, test } from "vitest";
import selectionSort from "../src/2-selection-sort";

const NORMAL_INPUT = [1, 3, 5, 7, 2];
const INPUT_WITH_EMPTY = [4, 1, 2, null];
const INPUT_WITH_NAN = [4, 1, 2, NaN];
const EQUAL_LIST = [1, 1, 1, 1, 1];

test("Orders the array correctly", () => {
  expect(selectionSort(NORMAL_INPUT)).toStrictEqual([1, 2, 3, 5, 7]);
});

test("Orders the array with null first", () => {
  expect(selectionSort(INPUT_WITH_EMPTY)).toStrictEqual([null, 1, 2, 4]);
});

test("Orders the array with NaN first", () => {
  expect(selectionSort(INPUT_WITH_NAN)).toStrictEqual([1, 2, 4, NaN]);
});

test("Returns the same array", () => {
  expect(selectionSort(EQUAL_LIST)).toStrictEqual(EQUAL_LIST);
});
