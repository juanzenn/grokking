/**
 * Search an item in a sorted array.
 * @constructor
 * @param {T[]} input - The sorted array.
 * @param {T} target - The item you are looking for.
 */
export default function binarySearch<T>(input: Array<T>, target: T) {
  let low = 0;
  let high = input.length - 1;

  while (low <= high) {
    let middle = Math.round((low + high) / 2);
    let guess = input[middle];

    if (guess === target) {
      return middle;
    } else if (guess > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
}
