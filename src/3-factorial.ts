/**
 * Gets the factorial value of X. This is an exercise to practice Recursion.
 * @constructor
 * @param x - A number to which calculates the factorial value
 */
export default function factorial(x: number) {
  if (x < 0) return undefined;

  // Base case
  if (x === 1 || x === 0) {
    return 1;
  }

  // Recursive case
  return x * factorial(x - 1);
}
