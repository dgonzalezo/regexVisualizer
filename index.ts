import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { regexLexer } from './lib/regexLexer';
import { regexParser } from './lib/regexParser';

import { MyRegexVisitor} from "./lib/MyRegexVisitor";

let pipeExample = "(w3)?a*b";
let oldExample = "(w3)*(Sa)?4";

let inputStream = new ANTLRInputStream(pipeExample);

let lexer = new regexLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new regexParser(tokenStream);
let result = parser.root();

let treeString = result.toStringTree(parser.ruleNames);
console.log(treeString);

const visitor = new MyRegexVisitor();

visitor.visitRoot(result);
visitor.graph.toString();
