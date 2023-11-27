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

let mermaidString = visitor.graph.toString();
console.log(mermaidString);


// Server
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req, res) {
    res.render('index.ejs', { mermaidString: mermaidString });
});



const PORT = 3000;
app.listen(PORT, () =>{
    console.log("Serving");
})