import { Queue } from "./queue";

const graph: { [key: string]: string[] } = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

function condition(node: string): boolean {
  return node === "F";
}

export default function bfSearch(
  graph: { [key: string]: Array<string> },
  firstKey: string,
  condition: (node: string) => boolean
) {
  const queue = new Queue<string>();
  const checked = new Set<string>();

  if (condition(firstKey)) return true;

  graph[firstKey].forEach((person) => {
    checked.add(person);
    queue.enqueue(person);
  });

  while (!queue.isEmpty()) {
    const person = queue.dequeue();

    if (condition(person)) {
      return true;
    } else {
      graph[person] &&
        graph[person].forEach((neighbor) => {
          if (!checked.has(neighbor)) {
            queue.enqueue(neighbor);
            checked.add(neighbor);
          }
        });
    }
  }

  return false;
}
