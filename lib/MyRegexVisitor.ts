export class MyRegexVisitor implements regexParserVisitor<any>{

    graph = new Graph();

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
        }
    }

    visitPiece(ctx: PieceContext){
        // This will return an object with attributes "value/text" and  "quantifier" to the visitBranch method

        let atomText = this.visitAtom(ctx.atom());
        let quantifierText = ctx.quantifier()?.text || undefined;
        this.graph.addNode(atomText, quantifierText);

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


import {AtomContext, BranchContext, PieceContext, RegExpContext, RootContext} from "@/lib/regexParser";import { Graph } from "./Graph";

