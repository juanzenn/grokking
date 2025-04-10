const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
};
const costs = { a: 6, b: 2, fin: Infinity };
const parents = {
  a: "start",
  b: "start",
  fin: undefined,
};
const processed = [];

function findSmallestNode() {
  let smallest = Infinity;
  let item = undefined;
  const entries = Object.entries(costs);

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    if (value < smallest && !processed.includes(key)) {
      smallest = value;
      item = key;
    }
  }

  return item;
}

export default function dijktra() {
  let smallest = findSmallestNode();

  while (smallest) {
    const cost = costs[smallest];
    const neighbords = graph[smallest];

    Object.keys(neighbords).forEach((n) => {
      const newCost = cost + neighbords[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = smallest;
      }
    });

    processed.push(smallest);
    smallest = findSmallestNode();
  }
}

dijktra();
console.table(parents);
console.table(costs);
