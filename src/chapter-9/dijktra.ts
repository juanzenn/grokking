// Graph definition:
const graph = {
  start: { A: 10, B: 3 },
  A: { C: 3 },
  B: { A: 1, C: 8, D: 2 },
  C: { fin: 2, D: 7 },
  D: { fin: 5 },
  fin: {},
};

// Initial costs:
const costs = {
  A: 10,
  B: 3,
  C: Infinity,
  D: Infinity,
  fin: Infinity,
};

// Initial parents:
const parents = {
  A: "start",
  B: "start",
  C: undefined,
  D: undefined,
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
console.log(costs["fin"]);
console.table(parents);
