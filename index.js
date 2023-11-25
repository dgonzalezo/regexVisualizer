import antlr4 from 'antlr4';
import regexLexer from "./lib/regexLexer.js";
import regexParser from "./lib/regexParser.js";
const { CommonTokenStream, InputStream, ParseTree } = antlr4;

const input = "4+4"
var chars = new InputStream(input, true)
var lexer = new regexLexer(chars);
lexer.strictMode = false;
const tokens = new antlr4.CommonTokenStream(lexer);
let parser = new regexParser(tokens);
const tree = parser.regExp();
console.log(tree.toStringTree(parser.ruleNames))