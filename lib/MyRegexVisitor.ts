class Graph {
    nodes: any = []
    constructor(nodes: []) {
        this.nodes = nodes;
    }


    /*
    flowchart LR
    start(start)
    n1(w3)
    n2(S)
    start --> n1
    direction LR
       n1 --> |0 - fa:fa-infinity| n1
       n1 --> n2
    end
     */
    toString(){

        let nodesWithSymbol = new Map();

        console.log("start(start)")
        for(let i=0; i<this.nodes.length; i++){
            console.log(`n${i}(${this.nodes[i].value})`);
            nodesWithSymbol.set(`n${i}`, this.nodes[i]);
        }

        console.log("start --> n1");

        let keys = Array.from(nodesWithSymbol.keys());

        for(let i=0; i<keys.length; i++){
            let currentNode = keys[i];
            let nextNode = keys[i+1]

            let quantifier = this.nodes[i].quantifier;
            //for later use

            switch(quantifier){
                //Quant text defined here
                case '*': {
                    break;
                }
            }

            if (quantifier!=null){
                //Must have an arrow to itself
                console.log(`${currentNode} --> |quant_defined_above| ${currentNode}`)
            }
            if(i==keys.length-1){
                console.log(`${currentNode} --> end()o como sea`);
            } else {
                console.log(`${currentNode} --> ${nextNode}`);
            }

        }

    }
}

export class MyRegexVisitor implements regexParserVisitor<any>{

    graph = new Graph([]);

    visitRoot(ctx: RootContext): any {
        console.log("Print root");
        for(let i=0; i< ctx.regExp().childCount; i++){
            this.visitRegExp(ctx.regExp());
        }
        return 0;
    }
    visitRegExp(ctx: RegExpContext){
        console.log(ctx.text);
        if (!ctx.PIPE()) {
            console.log("");
        }
        for(let i = 0; i<ctx.branch().length; i++){
            this.visitBranch(ctx.branch(i));
        }
    }

    visitBranch(ctx: BranchContext){
        console.log(`Got into this branch ${ctx.text} that has ${ctx.piece().length} pieces `);
        let pieceList = [];

        for(let i=0; i <ctx.piece().length; i++) {
            let pieceObject = this.visitPiece(ctx.piece(i));
            this.graph.nodes.push(pieceObject);
        }
    }

    visitPiece(ctx: PieceContext){
        // This will return an object with attributes "value/text" and  "quantifier" to the visitBranch method

        let atomText = this.visitAtom(ctx.atom());
        let quantifierText = ctx.quantifier()?.text || null;

        return { value: atomText, quantifier: quantifierText }

    }

    visitAtom(ctx: AtomContext): any {

        let atom = '';
        atom = ctx.text;
        return atom;

    }


    visit(tree: ParseTree): any {
        return undefined;
    }

    visitChildren(node: RuleNode): any {
        return undefined;
    }

    visitErrorNode(node: ErrorNode): any {
        return undefined;
    }

    visitTerminal(node: TerminalNode): any {
        return undefined;
    }

}

import {regexParserVisitor} from "@/lib/regexParserVisitor";
import {ErrorNode, ParseTree, RuleNode} from "antlr4ts/tree";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";


import {AtomContext, BranchContext, PieceContext, RegExpContext, RootContext} from "@/lib/regexParser";
