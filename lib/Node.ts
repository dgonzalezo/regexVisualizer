export class Node {
  text: string;
  neighbors: Node[];
  quantifier?: string;

  constructor(value: string, quantifier?: string) {
    this.text = value;
    this.quantifier = quantifier;
    this.neighbors = [];
  }

  addNeighbor(node: Node) {
    this.neighbors.push(node);
  }
}
