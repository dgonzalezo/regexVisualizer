// Generated from regexLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class regexLexer extends Lexer {
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly PIPE = 3;
	public static readonly PLUS = 4;
	public static readonly QUESTION = 5;
	public static readonly STAR = 6;
	public static readonly WildcardEsc = 7;
	public static readonly Char = 8;
	public static readonly StartQuantity = 9;
	public static readonly SingleCharEsc = 10;
	public static readonly MultiCharEsc = 11;
	public static readonly CatEsc = 12;
	public static readonly ComplEsc = 13;
	public static readonly NegCharGroup = 14;
	public static readonly PosCharGroup = 15;
	public static readonly EndQuantity = 16;
	public static readonly QuantExact = 17;
	public static readonly COMMA = 18;
	public static readonly EndCategory = 19;
	public static readonly IsCategory = 20;
	public static readonly Letters = 21;
	public static readonly Marks = 22;
	public static readonly Numbers = 23;
	public static readonly Punctuation = 24;
	public static readonly Separators = 25;
	public static readonly Symbols = 26;
	public static readonly Others = 27;
	public static readonly IsBlock = 28;
	public static readonly NestedSingleCharEsc = 29;
	public static readonly NestedMultiCharEsc = 30;
	public static readonly NestedCatEsc = 31;
	public static readonly NestedComplEsc = 32;
	public static readonly NestedNegCharGroup = 33;
	public static readonly NestedPosCharGroup = 34;
	public static readonly EndCharGroup = 35;
	public static readonly DASH = 36;
	public static readonly XmlChar = 37;
	public static readonly EOF = Token.EOF;
	public static readonly QUANTITY = 1;
	public static readonly CATEGORY = 2;
	public static readonly CHARGROUP = 3;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'|'", 
                                                            "'+'", "'?'", 
                                                            "'*'", "'.'", 
                                                            null, "'{'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "','", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "']'", 
                                                            "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LPAREN", 
                                                             "RPAREN", "PIPE", 
                                                             "PLUS", "QUESTION", 
                                                             "STAR", "WildcardEsc", 
                                                             "Char", "StartQuantity", 
                                                             "SingleCharEsc", 
                                                             "MultiCharEsc", 
                                                             "CatEsc", "ComplEsc", 
                                                             "NegCharGroup", 
                                                             "PosCharGroup", 
                                                             "EndQuantity", 
                                                             "QuantExact", 
                                                             "COMMA", "EndCategory", 
                                                             "IsCategory", 
                                                             "Letters", 
                                                             "Marks", "Numbers", 
                                                             "Punctuation", 
                                                             "Separators", 
                                                             "Symbols", 
                                                             "Others", "IsBlock", 
                                                             "NestedSingleCharEsc", 
                                                             "NestedMultiCharEsc", 
                                                             "NestedCatEsc", 
                                                             "NestedComplEsc", 
                                                             "NestedNegCharGroup", 
                                                             "NestedPosCharGroup", 
                                                             "EndCharGroup", 
                                                             "DASH", "XmlChar" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "QUANTITY", 
                                                "CATEGORY", "CHARGROUP", ];

	public static readonly ruleNames: string[] = [
		"LPAREN", "RPAREN", "PIPE", "PLUS", "QUESTION", "STAR", "WildcardEsc", 
		"Char", "StartQuantity", "SingleCharEsc", "MultiCharEsc", "CatEsc", "ComplEsc", 
		"NegCharGroup", "PosCharGroup", "EndQuantity", "QuantExact", "COMMA", 
		"EndCategory", "IsCategory", "Letters", "Marks", "Numbers", "Punctuation", 
		"Separators", "Symbols", "Others", "IsBlock", "NestedSingleCharEsc", "NestedMultiCharEsc", 
		"NestedCatEsc", "NestedComplEsc", "NestedNegCharGroup", "NestedPosCharGroup", 
		"EndCharGroup", "DASH", "XmlChar", "CAT_ESC", "COMPL_ESC", "MULTI_ESC", 
		"SINGLE_ESC",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, regexLexer._ATN, regexLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "regexLexer.g4"; }

	public get literalNames(): (string | null)[] { return regexLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return regexLexer.symbolicNames; }
	public get ruleNames(): string[] { return regexLexer.ruleNames; }

	public get serializedATN(): number[] { return regexLexer._serializedATN; }

	public get channelNames(): string[] { return regexLexer.channelNames; }

	public get modeNames(): string[] { return regexLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,37,230,6,-1,6,-1,
	6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,
	7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,
	7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,
	22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,
	2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,
	37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,
	4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,
	11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,
	1,14,1,15,1,15,1,15,1,15,1,16,4,16,133,8,16,11,16,12,16,134,1,17,1,17,1,
	18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,150,8,19,1,20,
	1,20,3,20,154,8,20,1,21,1,21,3,21,158,8,21,1,22,1,22,3,22,162,8,22,1,23,
	1,23,3,23,166,8,23,1,24,1,24,3,24,170,8,24,1,25,1,25,3,25,174,8,25,1,26,
	1,26,3,26,178,8,26,1,27,1,27,1,27,1,27,4,27,184,8,27,11,27,12,27,185,1,
	28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,
	1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,35,1,35,1,36,1,36,1,
	37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,0,0,
	41,4,1,6,2,8,3,10,4,12,5,14,6,16,7,18,8,20,9,22,10,24,11,26,12,28,13,30,
	14,32,15,34,16,36,17,38,18,40,19,42,20,44,21,46,22,48,23,50,24,52,25,54,
	26,56,27,58,28,60,29,62,30,64,31,66,32,68,33,70,34,72,35,74,36,76,37,78,
	0,80,0,82,0,84,0,4,0,1,2,3,13,5,0,40,43,46,46,63,63,91,93,124,124,1,0,48,
	57,3,0,108,109,111,111,116,117,3,0,99,99,101,101,110,110,3,0,100,100,108,
	108,111,111,4,0,99,102,105,105,111,111,115,115,3,0,108,108,112,112,115,
	115,4,0,99,99,107,107,109,109,111,111,3,0,99,99,102,102,110,111,4,0,45,
	45,48,57,65,90,97,122,3,0,45,45,91,91,93,93,8,0,67,68,73,73,83,83,87,87,
	99,100,105,105,115,115,119,119,8,0,40,43,45,46,63,63,91,94,110,110,114,
	114,116,116,123,125,237,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,
	0,0,12,1,0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,0,0,0,0,22,
	1,0,0,0,0,24,1,0,0,0,0,26,1,0,0,0,0,28,1,0,0,0,0,30,1,0,0,0,0,32,1,0,0,
	0,1,34,1,0,0,0,1,36,1,0,0,0,1,38,1,0,0,0,2,40,1,0,0,0,2,42,1,0,0,0,2,44,
	1,0,0,0,2,46,1,0,0,0,2,48,1,0,0,0,2,50,1,0,0,0,2,52,1,0,0,0,2,54,1,0,0,
	0,2,56,1,0,0,0,2,58,1,0,0,0,3,60,1,0,0,0,3,62,1,0,0,0,3,64,1,0,0,0,3,66,
	1,0,0,0,3,68,1,0,0,0,3,70,1,0,0,0,3,72,1,0,0,0,3,74,1,0,0,0,3,76,1,0,0,
	0,4,86,1,0,0,0,6,88,1,0,0,0,8,90,1,0,0,0,10,92,1,0,0,0,12,94,1,0,0,0,14,
	96,1,0,0,0,16,98,1,0,0,0,18,100,1,0,0,0,20,102,1,0,0,0,22,106,1,0,0,0,24,
	108,1,0,0,0,26,110,1,0,0,0,28,114,1,0,0,0,30,118,1,0,0,0,32,123,1,0,0,0,
	34,127,1,0,0,0,36,132,1,0,0,0,38,136,1,0,0,0,40,138,1,0,0,0,42,149,1,0,
	0,0,44,151,1,0,0,0,46,155,1,0,0,0,48,159,1,0,0,0,50,163,1,0,0,0,52,167,
	1,0,0,0,54,171,1,0,0,0,56,175,1,0,0,0,58,179,1,0,0,0,60,187,1,0,0,0,62,
	189,1,0,0,0,64,191,1,0,0,0,66,195,1,0,0,0,68,199,1,0,0,0,70,204,1,0,0,0,
	72,208,1,0,0,0,74,212,1,0,0,0,76,214,1,0,0,0,78,216,1,0,0,0,80,220,1,0,
	0,0,82,224,1,0,0,0,84,227,1,0,0,0,86,87,5,40,0,0,87,5,1,0,0,0,88,89,5,41,
	0,0,89,7,1,0,0,0,90,91,5,124,0,0,91,9,1,0,0,0,92,93,5,43,0,0,93,11,1,0,
	0,0,94,95,5,63,0,0,95,13,1,0,0,0,96,97,5,42,0,0,97,15,1,0,0,0,98,99,5,46,
	0,0,99,17,1,0,0,0,100,101,8,0,0,0,101,19,1,0,0,0,102,103,5,123,0,0,103,
	104,1,0,0,0,104,105,6,8,0,0,105,21,1,0,0,0,106,107,3,84,40,0,107,23,1,0,
	0,0,108,109,3,82,39,0,109,25,1,0,0,0,110,111,3,78,37,0,111,112,1,0,0,0,
	112,113,6,11,1,0,113,27,1,0,0,0,114,115,3,80,38,0,115,116,1,0,0,0,116,117,
	6,12,1,0,117,29,1,0,0,0,118,119,5,91,0,0,119,120,5,94,0,0,120,121,1,0,0,
	0,121,122,6,13,2,0,122,31,1,0,0,0,123,124,5,91,0,0,124,125,1,0,0,0,125,
	126,6,14,2,0,126,33,1,0,0,0,127,128,5,125,0,0,128,129,1,0,0,0,129,130,6,
	15,3,0,130,35,1,0,0,0,131,133,7,1,0,0,132,131,1,0,0,0,133,134,1,0,0,0,134,
	132,1,0,0,0,134,135,1,0,0,0,135,37,1,0,0,0,136,137,5,44,0,0,137,39,1,0,
	0,0,138,139,5,125,0,0,139,140,1,0,0,0,140,141,6,18,3,0,141,41,1,0,0,0,142,
	150,3,44,20,0,143,150,3,46,21,0,144,150,3,48,22,0,145,150,3,50,23,0,146,
	150,3,52,24,0,147,150,3,54,25,0,148,150,3,56,26,0,149,142,1,0,0,0,149,143,
	1,0,0,0,149,144,1,0,0,0,149,145,1,0,0,0,149,146,1,0,0,0,149,147,1,0,0,0,
	149,148,1,0,0,0,150,43,1,0,0,0,151,153,5,76,0,0,152,154,7,2,0,0,153,152,
	1,0,0,0,153,154,1,0,0,0,154,45,1,0,0,0,155,157,5,77,0,0,156,158,7,3,0,0,
	157,156,1,0,0,0,157,158,1,0,0,0,158,47,1,0,0,0,159,161,5,78,0,0,160,162,
	7,4,0,0,161,160,1,0,0,0,161,162,1,0,0,0,162,49,1,0,0,0,163,165,5,80,0,0,
	164,166,7,5,0,0,165,164,1,0,0,0,165,166,1,0,0,0,166,51,1,0,0,0,167,169,
	5,90,0,0,168,170,7,6,0,0,169,168,1,0,0,0,169,170,1,0,0,0,170,53,1,0,0,0,
	171,173,5,83,0,0,172,174,7,7,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,55,
	1,0,0,0,175,177,5,67,0,0,176,178,7,8,0,0,177,176,1,0,0,0,177,178,1,0,0,
	0,178,57,1,0,0,0,179,180,5,73,0,0,180,181,5,115,0,0,181,183,1,0,0,0,182,
	184,7,9,0,0,183,182,1,0,0,0,184,185,1,0,0,0,185,183,1,0,0,0,185,186,1,0,
	0,0,186,59,1,0,0,0,187,188,3,84,40,0,188,61,1,0,0,0,189,190,3,82,39,0,190,
	63,1,0,0,0,191,192,3,78,37,0,192,193,1,0,0,0,193,194,6,30,1,0,194,65,1,
	0,0,0,195,196,3,80,38,0,196,197,1,0,0,0,197,198,6,31,1,0,198,67,1,0,0,0,
	199,200,5,91,0,0,200,201,5,94,0,0,201,202,1,0,0,0,202,203,6,32,2,0,203,
	69,1,0,0,0,204,205,5,91,0,0,205,206,1,0,0,0,206,207,6,33,2,0,207,71,1,0,
	0,0,208,209,5,93,0,0,209,210,1,0,0,0,210,211,6,34,3,0,211,73,1,0,0,0,212,
	213,5,45,0,0,213,75,1,0,0,0,214,215,8,10,0,0,215,77,1,0,0,0,216,217,5,92,
	0,0,217,218,5,112,0,0,218,219,5,123,0,0,219,79,1,0,0,0,220,221,5,92,0,0,
	221,222,5,80,0,0,222,223,5,123,0,0,223,81,1,0,0,0,224,225,5,92,0,0,225,
	226,7,11,0,0,226,83,1,0,0,0,227,228,5,92,0,0,228,229,7,12,0,0,229,85,1,
	0,0,0,15,0,1,2,3,134,149,153,157,161,165,169,173,177,183,185,4,5,1,0,5,
	2,0,5,3,0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!regexLexer.__ATN) {
			regexLexer.__ATN = new ATNDeserializer().deserialize(regexLexer._serializedATN);
		}

		return regexLexer.__ATN;
	}


	static DecisionsToDFA = regexLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}