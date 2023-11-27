import { Node } from './Node';

export class Graph {
  nodes: Node[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: string, quantifier?: string, piece?: number, branch?: number) {
    const newNode = new Node(value, quantifier, piece, branch);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(nodeA: Node, nodeB: Node) {
    nodeA.addNeighbor(nodeB);
    nodeB.addNeighbor(nodeA);
  }
  toString() {

    let nodesWithSymbol = new Map();
    console.log("graph LR");
    console.log("start(start)")

    for (let i = 0; i < this.nodes.length; i++) {
      console.log(`n${i}(${this.nodes[i].text})`);
      nodesWithSymbol.set(`n${i}`, this.nodes[i]);
    }

    console.log("end1(end)");

    console.log("start --> n0");

    let keys = Array.from(nodesWithSymbol.keys());

    for (let i = 0; i < keys.length; i++) {
      let currentNode = keys[i];
      let nextNode = keys[i + 1]

      let quantifier = this.nodes[i].quantifier;
      //for later use
      let quantifierText = '';
      if(quantifier!=undefined){
        switch(quantifier){
          case '*': {
            quantifierText = "0-n";
            break;
          }
          case '+': {
            quantifierText = "1-n";
            break;
          }
          case '?': {
            quantifierText = "0-1";
            break;
          }
          default:{
            console.log("Another quantifier?")
            break;
          }
        }
      }

      if (quantifier !== undefined) {

        console.log(`${currentNode} --> |${quantifierText}| ${currentNode}`)
      }
      if (i == keys.length - 1) {
        console.log(`${currentNode} --> end1`);
      } else {
        console.log(`${currentNode} --> ${nextNode}`);
      }

    }
  }
}
