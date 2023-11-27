import { Node } from './Node';

export class Graph {
  nodes: Node[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: string, quantifier?: string) {
    const newNode = new Node(value, quantifier);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(nodeA: Node, nodeB: Node) {
    nodeA.addNeighbor(nodeB);
    nodeB.addNeighbor(nodeA);
  }
  toString() {

    let nodesWithSymbol = new Map();

    console.log("start(start)")

    for (let i = 0; i < this.nodes.length; i++) {
      console.log(`n${i}(${this.nodes[i].text})`);
      nodesWithSymbol.set(`n${i}`, this.nodes[i]);
    }

    console.log("start --> n1");

    let keys = Array.from(nodesWithSymbol.keys());

    for (let i = 0; i < keys.length; i++) {
      let currentNode = keys[i];
      let nextNode = keys[i + 1]

      let quantifier = this.nodes[i].quantifier;
      //for later use

      switch (quantifier) {
        //Quant text defined here
        case '*': {
          break;
        }
      }

      if (quantifier != null) {
        //Must have an arrow to itself
        console.log(`${currentNode} --> |quant_defined_above| ${currentNode}`)
      }
      if (i == keys.length - 1) {
        console.log(`${currentNode} --> end()o como sea`);
      } else {
        console.log(`${currentNode} --> ${nextNode}`);
      }

    }
  }
}
