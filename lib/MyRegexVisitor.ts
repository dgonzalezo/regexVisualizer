import { Graph } from './Graph';

export class MyRegexVisitor implements regexParserVisitor<any>{

    graph = new Graph();

    visitRoot(ctx: RootContext): any {
        this.visitRegExp(ctx.regExp());
    }
    visitRegExp(ctx: RegExpContext){

        let branches = [];

        for(let i = 0; i<ctx.branch().length; i++){
            let branch = this.visitBranch(ctx.branch(i));

            for(let j=0; j<branch.length; j++){
                // @ts-ignore
                console.log(branch[j].text);
            }
            branch.forEach((item) => {
                // @ts-ignore
                item.branch =i;
            });
            branches.push(branch);
        }
        return branches;
    }

    visitBranch(ctx: BranchContext){

        let pieceList = [];
        for(let i=0; i <ctx.piece().length; i++) {
            let pieceObject = this.visitPiece(ctx.piece(i));

            // @ts-ignore
            pieceObject.piece = i;
            pieceList.push(pieceObject);
        }
        return pieceList;
    }

    visitPiece(ctx: PieceContext){
        // This will return an object with attributes "value/text" and  "quantifier" to the visitBranch method

        let atomText = this.visitAtom(ctx.atom());
        let quantifierText = ctx.quantifier()?.text || undefined;

        return this.graph.addNode(atomText, quantifierText);

    }

    visitAtom(ctx: AtomContext): any {

        //un char, un charClass, un (RegExp).


        //is it a (Regexp)?
        if(ctx.LPAREN()!=null){
            //this.visitRegExp(ctx.regExp()!)
        }
        let atom = ctx.text;
        return atom;


    }

    visitCharClass(ctx: CharClassContext){
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


import {
    AtomContext,
    BranchContext,
    CharClassContext,
    PieceContext,
    RegExpContext,
    RootContext
} from "@/lib/regexParser";
