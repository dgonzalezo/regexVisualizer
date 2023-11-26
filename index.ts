import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { regexLexer } from './lib/regexLexer';
import { regexParser } from './lib/regexParser';
import { regexParserListener } from './lib/regexParserListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { RegexToDiagram } from './lib/regexToDiagram';

let inputStream = new ANTLRInputStream("(w3)*S");
let lexer = new regexLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new regexParser(tokenStream);
let result = parser.root();

const listener: regexParserListener = new RegexToDiagram();
ParseTreeWalker.DEFAULT.walk(listener, result);
console.log(result.toStringTree())
console.log("hello")
