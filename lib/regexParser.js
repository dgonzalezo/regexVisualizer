// Generated from /Users/eliangonzalez/Documents/Semestres/2023-02/Lenguajes/regexVisualizer/jstest/regexParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import regexParserListener from './regexParserListener.js';
import regexParserVisitor from './regexParserVisitor.js';

const serializedATN = [4,1,37,154,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,1,1,1,1,1,1,5,1,47,8,1,10,1,12,1,50,9,1,1,2,5,2,53,8,2,10,2,12,
2,56,9,2,1,3,1,3,3,3,60,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,69,8,4,1,5,1,
5,1,5,3,5,74,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,
89,8,8,1,9,1,9,1,9,3,9,94,8,9,1,10,1,10,1,10,1,10,1,11,3,11,101,8,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,112,8,11,1,11,3,11,115,8,11,
1,12,3,12,118,8,12,1,12,1,12,4,12,122,8,12,11,12,12,12,123,1,13,1,13,3,13,
128,8,13,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,
142,8,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,0,0,20,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,5,2,0,14,15,33,34,
2,0,10,10,37,37,2,0,12,12,31,31,2,0,13,13,32,32,2,0,20,20,28,28,159,0,40,
1,0,0,0,2,43,1,0,0,0,4,54,1,0,0,0,6,57,1,0,0,0,8,68,1,0,0,0,10,73,1,0,0,
0,12,75,1,0,0,0,14,79,1,0,0,0,16,88,1,0,0,0,18,93,1,0,0,0,20,95,1,0,0,0,
22,114,1,0,0,0,24,117,1,0,0,0,26,127,1,0,0,0,28,129,1,0,0,0,30,133,1,0,0,
0,32,141,1,0,0,0,34,143,1,0,0,0,36,147,1,0,0,0,38,151,1,0,0,0,40,41,3,2,
1,0,41,42,5,0,0,1,42,1,1,0,0,0,43,48,3,4,2,0,44,45,5,3,0,0,45,47,3,4,2,0,
46,44,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,3,1,0,0,0,50,
48,1,0,0,0,51,53,3,6,3,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,
1,0,0,0,55,5,1,0,0,0,56,54,1,0,0,0,57,59,3,16,8,0,58,60,3,8,4,0,59,58,1,
0,0,0,59,60,1,0,0,0,60,7,1,0,0,0,61,69,5,5,0,0,62,69,5,6,0,0,63,69,5,4,0,
0,64,65,5,9,0,0,65,66,3,10,5,0,66,67,5,16,0,0,67,69,1,0,0,0,68,61,1,0,0,
0,68,62,1,0,0,0,68,63,1,0,0,0,68,64,1,0,0,0,69,9,1,0,0,0,70,74,3,12,6,0,
71,74,3,14,7,0,72,74,5,17,0,0,73,70,1,0,0,0,73,71,1,0,0,0,73,72,1,0,0,0,
74,11,1,0,0,0,75,76,5,17,0,0,76,77,5,18,0,0,77,78,5,17,0,0,78,13,1,0,0,0,
79,80,5,17,0,0,80,81,5,18,0,0,81,15,1,0,0,0,82,89,5,8,0,0,83,89,3,18,9,0,
84,85,5,1,0,0,85,86,3,2,1,0,86,87,5,2,0,0,87,89,1,0,0,0,88,82,1,0,0,0,88,
83,1,0,0,0,88,84,1,0,0,0,89,17,1,0,0,0,90,94,3,32,16,0,91,94,3,20,10,0,92,
94,5,7,0,0,93,90,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,19,1,0,0,0,95,96,
7,0,0,0,96,97,3,22,11,0,97,98,5,35,0,0,98,21,1,0,0,0,99,101,3,24,12,0,100,
99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,103,5,36,0,0,103,104,5,36,
0,0,104,115,3,20,10,0,105,106,3,24,12,0,106,107,5,36,0,0,107,108,3,20,10,
0,108,115,1,0,0,0,109,111,3,24,12,0,110,112,5,36,0,0,111,110,1,0,0,0,111,
112,1,0,0,0,112,115,1,0,0,0,113,115,5,36,0,0,114,100,1,0,0,0,114,105,1,0,
0,0,114,109,1,0,0,0,114,113,1,0,0,0,115,23,1,0,0,0,116,118,5,36,0,0,117,
116,1,0,0,0,117,118,1,0,0,0,118,121,1,0,0,0,119,122,3,26,13,0,120,122,3,
32,16,0,121,119,1,0,0,0,121,120,1,0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,
123,124,1,0,0,0,124,25,1,0,0,0,125,128,3,28,14,0,126,128,5,37,0,0,127,125,
1,0,0,0,127,126,1,0,0,0,128,27,1,0,0,0,129,130,3,30,15,0,130,131,5,36,0,
0,131,132,3,30,15,0,132,29,1,0,0,0,133,134,7,1,0,0,134,31,1,0,0,0,135,142,
5,10,0,0,136,142,5,29,0,0,137,142,5,11,0,0,138,142,5,30,0,0,139,142,3,34,
17,0,140,142,3,36,18,0,141,135,1,0,0,0,141,136,1,0,0,0,141,137,1,0,0,0,141,
138,1,0,0,0,141,139,1,0,0,0,141,140,1,0,0,0,142,33,1,0,0,0,143,144,7,2,0,
0,144,145,3,38,19,0,145,146,5,19,0,0,146,35,1,0,0,0,147,148,7,3,0,0,148,
149,3,38,19,0,149,150,5,19,0,0,150,37,1,0,0,0,151,152,7,4,0,0,152,39,1,0,
0,0,15,48,54,59,68,73,88,93,100,111,114,117,121,123,127,141];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class regexParser extends antlr4.Parser {

    static grammarFileName = "regexParser.g4";
    static literalNames = [ null, "'('", "')'", "'|'", "'+'", "'?'", "'*'", 
                            "'.'", null, "'{'", null, null, null, null, 
                            null, null, null, null, "','", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "']'", "'-'" ];
    static symbolicNames = [ null, "LPAREN", "RPAREN", "PIPE", "PLUS", "QUESTION", 
                             "STAR", "WildcardEsc", "Char", "StartQuantity", 
                             "SingleCharEsc", "MultiCharEsc", "CatEsc", 
                             "ComplEsc", "NegCharGroup", "PosCharGroup", 
                             "EndQuantity", "QuantExact", "COMMA", "EndCategory", 
                             "IsCategory", "Letters", "Marks", "Numbers", 
                             "Punctuation", "Separators", "Symbols", "Others", 
                             "IsBlock", "NestedSingleCharEsc", "NestedMultiCharEsc", 
                             "NestedCatEsc", "NestedComplEsc", "NestedNegCharGroup", 
                             "NestedPosCharGroup", "EndCharGroup", "DASH", 
                             "XmlChar" ];
    static ruleNames = [ "root", "regExp", "branch", "piece", "quantifier", 
                         "quantity", "quantRange", "quantMin", "atom", "charClass", 
                         "charClassExpr", "charGroup", "posCharGroup", "charRange", 
                         "seRange", "charOrEsc", "charClassEsc", "catEsc", 
                         "complEsc", "charProp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = regexParser.ruleNames;
        this.literalNames = regexParser.literalNames;
        this.symbolicNames = regexParser.symbolicNames;
    }



	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, regexParser.RULE_root);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.regExp();
	        this.state = 41;
	        this.match(regexParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regExp() {
	    let localctx = new RegExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, regexParser.RULE_regExp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.branch();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 44;
	            this.match(regexParser.PIPE);
	            this.state = 45;
	            this.branch();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	branch() {
	    let localctx = new BranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, regexParser.RULE_branch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758161282) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 51;
	            this.piece();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	piece() {
	    let localctx = new PieceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, regexParser.RULE_piece);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.atom();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 624) !== 0)) {
	            this.state = 58;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, regexParser.RULE_quantifier);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.match(regexParser.QUESTION);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.match(regexParser.STAR);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 63;
	            this.match(regexParser.PLUS);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 64;
	            this.match(regexParser.StartQuantity);
	            this.state = 65;
	            this.quantity();
	            this.state = 66;
	            this.match(regexParser.EndQuantity);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantity() {
	    let localctx = new QuantityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, regexParser.RULE_quantity);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.quantRange();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.quantMin();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.match(regexParser.QuantExact);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantRange() {
	    let localctx = new QuantRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, regexParser.RULE_quantRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(regexParser.QuantExact);
	        this.state = 76;
	        this.match(regexParser.COMMA);
	        this.state = 77;
	        this.match(regexParser.QuantExact);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantMin() {
	    let localctx = new QuantMinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, regexParser.RULE_quantMin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(regexParser.QuantExact);
	        this.state = 80;
	        this.match(regexParser.COMMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, regexParser.RULE_atom);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.match(regexParser.Char);
	            break;
	        case 7:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.charClass();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.match(regexParser.LPAREN);
	            this.state = 85;
	            this.regExp();
	            this.state = 86;
	            this.match(regexParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charClass() {
	    let localctx = new CharClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, regexParser.RULE_charClass);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.charClassEsc();
	            break;
	        case 14:
	        case 15:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.charClassExpr();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.match(regexParser.WildcardEsc);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charClassExpr() {
	    let localctx = new CharClassExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, regexParser.RULE_charClassExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        _la = this._input.LA(1);
	        if(!(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1572867) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 96;
	        this.charGroup();
	        this.state = 97;
	        this.match(regexParser.EndCharGroup);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charGroup() {
	    let localctx = new CharGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, regexParser.RULE_charGroup);
	    var _la = 0;
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            if(la_===1) {
	                this.state = 99;
	                this.posCharGroup();

	            }
	            this.state = 102;
	            this.match(regexParser.DASH);
	            this.state = 103;
	            this.match(regexParser.DASH);
	            this.state = 104;
	            this.charClassExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.posCharGroup();
	            this.state = 106;
	            this.match(regexParser.DASH);
	            this.state = 107;
	            this.charClassExpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.posCharGroup();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 110;
	                this.match(regexParser.DASH);
	            }

	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 113;
	            this.match(regexParser.DASH);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	posCharGroup() {
	    let localctx = new PosCharGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, regexParser.RULE_posCharGroup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 116;
	            this.match(regexParser.DASH);
	        }

	        this.state = 121; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 121;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 119;
	                this.charRange();
	                break;

	            case 2:
	                this.state = 120;
	                this.charClassEsc();
	                break;

	            }
	            this.state = 123; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 142082063) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charRange() {
	    let localctx = new CharRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, regexParser.RULE_charRange);
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 125;
	            this.seRange();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(regexParser.XmlChar);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seRange() {
	    let localctx = new SeRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, regexParser.RULE_seRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.charOrEsc();
	        this.state = 130;
	        this.match(regexParser.DASH);
	        this.state = 131;
	        this.charOrEsc();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charOrEsc() {
	    let localctx = new CharOrEscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, regexParser.RULE_charOrEsc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charClassEsc() {
	    let localctx = new CharClassEscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, regexParser.RULE_charClassEsc);
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            this.match(regexParser.SingleCharEsc);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.match(regexParser.NestedSingleCharEsc);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 137;
	            this.match(regexParser.MultiCharEsc);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 138;
	            this.match(regexParser.NestedMultiCharEsc);
	            break;
	        case 12:
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 139;
	            this.catEsc();
	            break;
	        case 13:
	        case 32:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 140;
	            this.complEsc();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catEsc() {
	    let localctx = new CatEscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, regexParser.RULE_catEsc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===31)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 144;
	        this.charProp();
	        this.state = 145;
	        this.match(regexParser.EndCategory);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	complEsc() {
	    let localctx = new ComplEscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, regexParser.RULE_complEsc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===32)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 148;
	        this.charProp();
	        this.state = 149;
	        this.match(regexParser.EndCategory);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charProp() {
	    let localctx = new CharPropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, regexParser.RULE_charProp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

regexParser.EOF = antlr4.Token.EOF;
regexParser.LPAREN = 1;
regexParser.RPAREN = 2;
regexParser.PIPE = 3;
regexParser.PLUS = 4;
regexParser.QUESTION = 5;
regexParser.STAR = 6;
regexParser.WildcardEsc = 7;
regexParser.Char = 8;
regexParser.StartQuantity = 9;
regexParser.SingleCharEsc = 10;
regexParser.MultiCharEsc = 11;
regexParser.CatEsc = 12;
regexParser.ComplEsc = 13;
regexParser.NegCharGroup = 14;
regexParser.PosCharGroup = 15;
regexParser.EndQuantity = 16;
regexParser.QuantExact = 17;
regexParser.COMMA = 18;
regexParser.EndCategory = 19;
regexParser.IsCategory = 20;
regexParser.Letters = 21;
regexParser.Marks = 22;
regexParser.Numbers = 23;
regexParser.Punctuation = 24;
regexParser.Separators = 25;
regexParser.Symbols = 26;
regexParser.Others = 27;
regexParser.IsBlock = 28;
regexParser.NestedSingleCharEsc = 29;
regexParser.NestedMultiCharEsc = 30;
regexParser.NestedCatEsc = 31;
regexParser.NestedComplEsc = 32;
regexParser.NestedNegCharGroup = 33;
regexParser.NestedPosCharGroup = 34;
regexParser.EndCharGroup = 35;
regexParser.DASH = 36;
regexParser.XmlChar = 37;

regexParser.RULE_root = 0;
regexParser.RULE_regExp = 1;
regexParser.RULE_branch = 2;
regexParser.RULE_piece = 3;
regexParser.RULE_quantifier = 4;
regexParser.RULE_quantity = 5;
regexParser.RULE_quantRange = 6;
regexParser.RULE_quantMin = 7;
regexParser.RULE_atom = 8;
regexParser.RULE_charClass = 9;
regexParser.RULE_charClassExpr = 10;
regexParser.RULE_charGroup = 11;
regexParser.RULE_posCharGroup = 12;
regexParser.RULE_charRange = 13;
regexParser.RULE_seRange = 14;
regexParser.RULE_charOrEsc = 15;
regexParser.RULE_charClassEsc = 16;
regexParser.RULE_catEsc = 17;
regexParser.RULE_complEsc = 18;
regexParser.RULE_charProp = 19;

class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_root;
    }

	regExp() {
	    return this.getTypedRuleContext(RegExpContext,0);
	};

	EOF() {
	    return this.getToken(regexParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitRoot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitRoot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RegExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_regExp;
    }

	branch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BranchContext);
	    } else {
	        return this.getTypedRuleContext(BranchContext,i);
	    }
	};

	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(regexParser.PIPE);
	    } else {
	        return this.getToken(regexParser.PIPE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterRegExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitRegExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitRegExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_branch;
    }

	piece = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PieceContext);
	    } else {
	        return this.getTypedRuleContext(PieceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitBranch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PieceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_piece;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterPiece(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitPiece(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitPiece(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_quantifier;
    }

	QUESTION() {
	    return this.getToken(regexParser.QUESTION, 0);
	};

	STAR() {
	    return this.getToken(regexParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(regexParser.PLUS, 0);
	};

	StartQuantity() {
	    return this.getToken(regexParser.StartQuantity, 0);
	};

	quantity() {
	    return this.getTypedRuleContext(QuantityContext,0);
	};

	EndQuantity() {
	    return this.getToken(regexParser.EndQuantity, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_quantity;
    }

	quantRange() {
	    return this.getTypedRuleContext(QuantRangeContext,0);
	};

	quantMin() {
	    return this.getTypedRuleContext(QuantMinContext,0);
	};

	QuantExact() {
	    return this.getToken(regexParser.QuantExact, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterQuantity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitQuantity(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitQuantity(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_quantRange;
    }

	QuantExact = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(regexParser.QuantExact);
	    } else {
	        return this.getToken(regexParser.QuantExact, i);
	    }
	};


	COMMA() {
	    return this.getToken(regexParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterQuantRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitQuantRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitQuantRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantMinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_quantMin;
    }

	QuantExact() {
	    return this.getToken(regexParser.QuantExact, 0);
	};

	COMMA() {
	    return this.getToken(regexParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterQuantMin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitQuantMin(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitQuantMin(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_atom;
    }

	Char() {
	    return this.getToken(regexParser.Char, 0);
	};

	charClass() {
	    return this.getTypedRuleContext(CharClassContext,0);
	};

	LPAREN() {
	    return this.getToken(regexParser.LPAREN, 0);
	};

	regExp() {
	    return this.getTypedRuleContext(RegExpContext,0);
	};

	RPAREN() {
	    return this.getToken(regexParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_charClass;
    }

	charClassEsc() {
	    return this.getTypedRuleContext(CharClassEscContext,0);
	};

	charClassExpr() {
	    return this.getTypedRuleContext(CharClassExprContext,0);
	};

	WildcardEsc() {
	    return this.getToken(regexParser.WildcardEsc, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCharClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCharClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCharClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharClassExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_charClassExpr;
    }

	charGroup() {
	    return this.getTypedRuleContext(CharGroupContext,0);
	};

	EndCharGroup() {
	    return this.getToken(regexParser.EndCharGroup, 0);
	};

	NegCharGroup() {
	    return this.getToken(regexParser.NegCharGroup, 0);
	};

	NestedNegCharGroup() {
	    return this.getToken(regexParser.NestedNegCharGroup, 0);
	};

	PosCharGroup() {
	    return this.getToken(regexParser.PosCharGroup, 0);
	};

	NestedPosCharGroup() {
	    return this.getToken(regexParser.NestedPosCharGroup, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCharClassExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCharClassExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCharClassExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_charGroup;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(regexParser.DASH);
	    } else {
	        return this.getToken(regexParser.DASH, i);
	    }
	};


	charClassExpr() {
	    return this.getTypedRuleContext(CharClassExprContext,0);
	};

	posCharGroup() {
	    return this.getTypedRuleContext(PosCharGroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCharGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCharGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCharGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PosCharGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_posCharGroup;
    }

	DASH() {
	    return this.getToken(regexParser.DASH, 0);
	};

	charRange = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharRangeContext);
	    } else {
	        return this.getTypedRuleContext(CharRangeContext,i);
	    }
	};

	charClassEsc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharClassEscContext);
	    } else {
	        return this.getTypedRuleContext(CharClassEscContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterPosCharGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitPosCharGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitPosCharGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_charRange;
    }

	seRange() {
	    return this.getTypedRuleContext(SeRangeContext,0);
	};

	XmlChar() {
	    return this.getToken(regexParser.XmlChar, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCharRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCharRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCharRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_seRange;
    }

	charOrEsc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharOrEscContext);
	    } else {
	        return this.getTypedRuleContext(CharOrEscContext,i);
	    }
	};

	DASH() {
	    return this.getToken(regexParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterSeRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitSeRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitSeRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharOrEscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_charOrEsc;
    }

	XmlChar() {
	    return this.getToken(regexParser.XmlChar, 0);
	};

	SingleCharEsc() {
	    return this.getToken(regexParser.SingleCharEsc, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCharOrEsc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCharOrEsc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCharOrEsc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharClassEscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_charClassEsc;
    }

	SingleCharEsc() {
	    return this.getToken(regexParser.SingleCharEsc, 0);
	};

	NestedSingleCharEsc() {
	    return this.getToken(regexParser.NestedSingleCharEsc, 0);
	};

	MultiCharEsc() {
	    return this.getToken(regexParser.MultiCharEsc, 0);
	};

	NestedMultiCharEsc() {
	    return this.getToken(regexParser.NestedMultiCharEsc, 0);
	};

	catEsc() {
	    return this.getTypedRuleContext(CatEscContext,0);
	};

	complEsc() {
	    return this.getTypedRuleContext(ComplEscContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCharClassEsc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCharClassEsc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCharClassEsc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatEscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_catEsc;
    }

	charProp() {
	    return this.getTypedRuleContext(CharPropContext,0);
	};

	EndCategory() {
	    return this.getToken(regexParser.EndCategory, 0);
	};

	CatEsc() {
	    return this.getToken(regexParser.CatEsc, 0);
	};

	NestedCatEsc() {
	    return this.getToken(regexParser.NestedCatEsc, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCatEsc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCatEsc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCatEsc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComplEscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_complEsc;
    }

	charProp() {
	    return this.getTypedRuleContext(CharPropContext,0);
	};

	EndCategory() {
	    return this.getToken(regexParser.EndCategory, 0);
	};

	ComplEsc() {
	    return this.getToken(regexParser.ComplEsc, 0);
	};

	NestedComplEsc() {
	    return this.getToken(regexParser.NestedComplEsc, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterComplEsc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitComplEsc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitComplEsc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharPropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_charProp;
    }

	IsCategory() {
	    return this.getToken(regexParser.IsCategory, 0);
	};

	IsBlock() {
	    return this.getToken(regexParser.IsBlock, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.enterCharProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexParserListener ) {
	        listener.exitCharProp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexParserVisitor ) {
	        return visitor.visitCharProp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




regexParser.RootContext = RootContext; 
regexParser.RegExpContext = RegExpContext; 
regexParser.BranchContext = BranchContext; 
regexParser.PieceContext = PieceContext; 
regexParser.QuantifierContext = QuantifierContext; 
regexParser.QuantityContext = QuantityContext; 
regexParser.QuantRangeContext = QuantRangeContext; 
regexParser.QuantMinContext = QuantMinContext; 
regexParser.AtomContext = AtomContext; 
regexParser.CharClassContext = CharClassContext; 
regexParser.CharClassExprContext = CharClassExprContext; 
regexParser.CharGroupContext = CharGroupContext; 
regexParser.PosCharGroupContext = PosCharGroupContext; 
regexParser.CharRangeContext = CharRangeContext; 
regexParser.SeRangeContext = SeRangeContext; 
regexParser.CharOrEscContext = CharOrEscContext; 
regexParser.CharClassEscContext = CharClassEscContext; 
regexParser.CatEscContext = CatEscContext; 
regexParser.ComplEscContext = ComplEscContext; 
regexParser.CharPropContext = CharPropContext; 
