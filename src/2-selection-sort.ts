/**
 * Sort an array of items from smallest to largest
 * @constructor
 * @param input - An array to sort
 */
export default function selectionSort<T>(input: T[]) {
  const result: T[] = [];
  // Copy the input into a local array (don't mutate the input!!!)
  const copiedInput = input.slice();

  for (let i = 0; i < input.length; i++) {
    const smallestIndex = findSmallestIndex(copiedInput);
    result.push(copiedInput[smallestIndex]);

    // Remove the smallest item from the copy.
    // This ensures we don't constantly add the same item over and over again.
    copiedInput.splice(smallestIndex, 1);
  }

  return result;
}

/**
 * Find the smallest item in an array. Returns the index of said item.
 * @constructor
 * @param input - An array to look the smaller item in
 */
function findSmallestIndex<T>(input: T[]) {
  let smallest = input[0];
  let smallest_index = 0;

  for (let i = 1; i < input.length; i++) {
    const nextItem = input[i];
    if (nextItem < smallest) {
      smallest = input[i];
      smallest_index = i;
    }
  }

  return smallest_index;
}
