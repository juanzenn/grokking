/**
 * Quicksort is one of the most common algos to learn.
 * The base case is: every array that has less than 2 elements are sorted by definition.
 * The "inductive" case: you can sort any array by picking up a pivot in the array.
 * This pivot will create a left and right array. These arrays can also be sorted by Quicksort (this is why it's recursive).
 * The only case you don't need to "choose a pivot" is for arrays of size 2. These are just simply sorted
 * by picking the highest number and swaping them accodingly.
 *
 *
 * @param arr - The array of numbers to sort
 * @returns The sorted array
 */
export default function quicksort<T>(arr: T[]) {
  if (arr.length < 2) return arr;

  const pivotIdx = Math.ceil((arr.length - 1) / 2);
  const pivot = arr[pivotIdx];

  const left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (pivotIdx === i) continue;

    if (number > pivot) right.push(number);
    else left.push(number);
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}
