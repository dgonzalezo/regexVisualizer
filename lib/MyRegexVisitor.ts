export class MyRegexVisitor implements regexParserVisitor<any>{

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
            console.log("Theres a PIPE here, so it has more than one branch");
        }
        for(let i = 0; i<ctx.branch().length; i++){
            this.visitBranch(ctx.branch(i));
        }
    }

    visitBranch(ctx: BranchContext){
        //Branch is compose of 0 or more pieces
        console.log(`Got into this branch ${ctx.text} that has ${ctx.piece().length} pieces `);
        console.log(`These pieces are:`);
        ctx.piece().forEach((piece): void  => {
            console.log(piece.text)
        });

        for(let i=0; i <ctx.piece().length; i++) {
            this.visitPiece(ctx.piece(i));
        }
    }

    visitPiece(ctx: PieceContext){
        let atomText, quantifierText = '';

        if(ctx.quantifier()!=null){
            let quantifier = ctx.quantifier()?.text;

            switch(quantifier){
                case '+': {

                    break;
                }
                case '*': {
                    quantifierText = "Zero or more times";
                    break;
                }
                case '?': {
                    break;
                }
            }
        }

        atomText = this.visitAtom(ctx.atom());

        console.log(`${atomText} has quantifier ${quantifierText}`);

    }

    visitAtom(ctx: AtomContext): any {

        // El atomo puede ser un simple caracter, un regex en parentesis, o un charclass que es ams complejo. Un chargroup
        // esta dentro de los charclass

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
