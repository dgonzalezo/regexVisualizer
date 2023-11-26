import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { regexLexer } from './lib/regexLexer';
import { regexParser } from './lib/regexParser';

import { MyRegexVisitor} from "./lib/MyRegexVisitor";

let inputStream = new ANTLRInputStream("(w3)*S");
let lexer = new regexLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new regexParser(tokenStream);
let result = parser.root();

let treeString = result.toStringTree(parser.ruleNames);
console.log(treeString);

const visitor = new MyRegexVisitor();
visitor.visitRoot(result);

console.log("Printing from main "+visitor.graph.nodes);
visitor.graph.toString();