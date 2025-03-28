export function sumArr(arr: number[]) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArr(arr.slice(1));
}

export function findLens(arr: any[]) {
  if (arr.length === 0) return 0;
  return 1 + findLens(arr.slice(1));
}

export function findMaximum(arr: number[]) {
  const current = arr[0];
  if (arr.length === 0) return current || 0;
  const next = findMaximum(arr.slice(1));
  return next > current ? next : current;
}

export function linearSearchRecursive<T>(arr: T[], target: T) {
  const index = arr.length - 1;
  const current = arr[index];
  if (arr.length === 1) return current === target ? index : undefined;
  return current === target
    ? index
    : linearSearchRecursive(arr.slice(0, -1), target);
}

export function binarySearchRecursive<T>(arr: T[], target: T) {
  const index = arr.length - 1;
  const current = arr[index];
  if (arr.length <= 1) return current === target ? index : undefined;
  if (current === target) return index;
  else if (current > target)
    return binarySearchRecursive(arr.slice(0, index), target);
  else return binarySearchRecursive(arr.slice(index), target);
}
