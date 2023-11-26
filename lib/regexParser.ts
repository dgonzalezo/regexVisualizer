// Generated from ./regexParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { regexParserListener } from "./regexParserListener";
import { regexParserVisitor } from "./regexParserVisitor";


export class regexParser extends Parser {
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
	public static readonly RULE_root = 0;
	public static readonly RULE_regExp = 1;
	public static readonly RULE_branch = 2;
	public static readonly RULE_piece = 3;
	public static readonly RULE_quantifier = 4;
	public static readonly RULE_quantity = 5;
	public static readonly RULE_quantRange = 6;
	public static readonly RULE_quantMin = 7;
	public static readonly RULE_atom = 8;
	public static readonly RULE_charClass = 9;
	public static readonly RULE_charClassExpr = 10;
	public static readonly RULE_charGroup = 11;
	public static readonly RULE_posCharGroup = 12;
	public static readonly RULE_charRange = 13;
	public static readonly RULE_seRange = 14;
	public static readonly RULE_charOrEsc = 15;
	public static readonly RULE_charClassEsc = 16;
	public static readonly RULE_catEsc = 17;
	public static readonly RULE_complEsc = 18;
	public static readonly RULE_charProp = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "regExp", "branch", "piece", "quantifier", "quantity", "quantRange", 
		"quantMin", "atom", "charClass", "charClassExpr", "charGroup", "posCharGroup", 
		"charRange", "seRange", "charOrEsc", "charClassEsc", "catEsc", "complEsc", 
		"charProp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'|'", "'+'", "'?'", "'*'", "'.'", undefined, 
		"'{'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "','", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "']'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAREN", "RPAREN", "PIPE", "PLUS", "QUESTION", "STAR", "WildcardEsc", 
		"Char", "StartQuantity", "SingleCharEsc", "MultiCharEsc", "CatEsc", "ComplEsc", 
		"NegCharGroup", "PosCharGroup", "EndQuantity", "QuantExact", "COMMA", 
		"EndCategory", "IsCategory", "Letters", "Marks", "Numbers", "Punctuation", 
		"Separators", "Symbols", "Others", "IsBlock", "NestedSingleCharEsc", "NestedMultiCharEsc", 
		"NestedCatEsc", "NestedComplEsc", "NestedNegCharGroup", "NestedPosCharGroup", 
		"EndCharGroup", "DASH", "XmlChar",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(regexParser._LITERAL_NAMES, regexParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return regexParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "regexParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return regexParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return regexParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(regexParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, regexParser.RULE_root);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.regExp();
			this.state = 41;
			this.match(regexParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public regExp(): RegExpContext {
		let _localctx: RegExpContext = new RegExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, regexParser.RULE_regExp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.branch();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === regexParser.PIPE) {
				{
				{
				this.state = 44;
				this.match(regexParser.PIPE);
				this.state = 45;
				this.branch();
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public branch(): BranchContext {
		let _localctx: BranchContext = new BranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, regexParser.RULE_branch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << regexParser.LPAREN) | (1 << regexParser.WildcardEsc) | (1 << regexParser.Char) | (1 << regexParser.SingleCharEsc) | (1 << regexParser.MultiCharEsc) | (1 << regexParser.CatEsc) | (1 << regexParser.ComplEsc) | (1 << regexParser.NegCharGroup) | (1 << regexParser.PosCharGroup) | (1 << regexParser.NestedSingleCharEsc) | (1 << regexParser.NestedMultiCharEsc) | (1 << regexParser.NestedCatEsc))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (regexParser.NestedComplEsc - 32)) | (1 << (regexParser.NestedNegCharGroup - 32)) | (1 << (regexParser.NestedPosCharGroup - 32)))) !== 0)) {
				{
				{
				this.state = 51;
				this.piece();
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public piece(): PieceContext {
		let _localctx: PieceContext = new PieceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, regexParser.RULE_piece);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.atom();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << regexParser.PLUS) | (1 << regexParser.QUESTION) | (1 << regexParser.STAR) | (1 << regexParser.StartQuantity))) !== 0)) {
				{
				this.state = 58;
				this.quantifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifier(): QuantifierContext {
		let _localctx: QuantifierContext = new QuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, regexParser.RULE_quantifier);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case regexParser.QUESTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.match(regexParser.QUESTION);
				}
				break;
			case regexParser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.match(regexParser.STAR);
				}
				break;
			case regexParser.PLUS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 63;
				this.match(regexParser.PLUS);
				}
				break;
			case regexParser.StartQuantity:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 64;
				this.match(regexParser.StartQuantity);
				this.state = 65;
				this.quantity();
				this.state = 66;
				this.match(regexParser.EndQuantity);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity(): QuantityContext {
		let _localctx: QuantityContext = new QuantityContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, regexParser.RULE_quantity);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				this.quantRange();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.quantMin();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 72;
				this.match(regexParser.QuantExact);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantRange(): QuantRangeContext {
		let _localctx: QuantRangeContext = new QuantRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, regexParser.RULE_quantRange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(regexParser.QuantExact);
			this.state = 76;
			this.match(regexParser.COMMA);
			this.state = 77;
			this.match(regexParser.QuantExact);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantMin(): QuantMinContext {
		let _localctx: QuantMinContext = new QuantMinContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, regexParser.RULE_quantMin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(regexParser.QuantExact);
			this.state = 80;
			this.match(regexParser.COMMA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, regexParser.RULE_atom);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case regexParser.Char:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(regexParser.Char);
				}
				break;
			case regexParser.WildcardEsc:
			case regexParser.SingleCharEsc:
			case regexParser.MultiCharEsc:
			case regexParser.CatEsc:
			case regexParser.ComplEsc:
			case regexParser.NegCharGroup:
			case regexParser.PosCharGroup:
			case regexParser.NestedSingleCharEsc:
			case regexParser.NestedMultiCharEsc:
			case regexParser.NestedCatEsc:
			case regexParser.NestedComplEsc:
			case regexParser.NestedNegCharGroup:
			case regexParser.NestedPosCharGroup:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.charClass();
				}
				break;
			case regexParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 84;
				this.match(regexParser.LPAREN);
				this.state = 85;
				this.regExp();
				this.state = 86;
				this.match(regexParser.RPAREN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charClass(): CharClassContext {
		let _localctx: CharClassContext = new CharClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, regexParser.RULE_charClass);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case regexParser.SingleCharEsc:
			case regexParser.MultiCharEsc:
			case regexParser.CatEsc:
			case regexParser.ComplEsc:
			case regexParser.NestedSingleCharEsc:
			case regexParser.NestedMultiCharEsc:
			case regexParser.NestedCatEsc:
			case regexParser.NestedComplEsc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.charClassEsc();
				}
				break;
			case regexParser.NegCharGroup:
			case regexParser.PosCharGroup:
			case regexParser.NestedNegCharGroup:
			case regexParser.NestedPosCharGroup:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.charClassExpr();
				}
				break;
			case regexParser.WildcardEsc:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 92;
				this.match(regexParser.WildcardEsc);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charClassExpr(): CharClassExprContext {
		let _localctx: CharClassExprContext = new CharClassExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, regexParser.RULE_charClassExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (regexParser.NegCharGroup - 14)) | (1 << (regexParser.PosCharGroup - 14)) | (1 << (regexParser.NestedNegCharGroup - 14)) | (1 << (regexParser.NestedPosCharGroup - 14)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 96;
			this.charGroup();
			this.state = 97;
			this.match(regexParser.EndCharGroup);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charGroup(): CharGroupContext {
		let _localctx: CharGroupContext = new CharGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, regexParser.RULE_charGroup);
		let _la: number;
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 99;
					this.posCharGroup();
					}
					break;
				}
				this.state = 102;
				this.match(regexParser.DASH);
				this.state = 103;
				this.match(regexParser.DASH);
				this.state = 104;
				this.charClassExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.posCharGroup();
				this.state = 106;
				this.match(regexParser.DASH);
				this.state = 107;
				this.charClassExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.posCharGroup();
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === regexParser.DASH) {
					{
					this.state = 110;
					this.match(regexParser.DASH);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 113;
				this.match(regexParser.DASH);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public posCharGroup(): PosCharGroupContext {
		let _localctx: PosCharGroupContext = new PosCharGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, regexParser.RULE_posCharGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === regexParser.DASH) {
				{
				this.state = 116;
				this.match(regexParser.DASH);
				}
			}

			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 121;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 119;
					this.charRange();
					}
					break;

				case 2:
					{
					this.state = 120;
					this.charClassEsc();
					}
					break;
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (regexParser.SingleCharEsc - 10)) | (1 << (regexParser.MultiCharEsc - 10)) | (1 << (regexParser.CatEsc - 10)) | (1 << (regexParser.ComplEsc - 10)) | (1 << (regexParser.NestedSingleCharEsc - 10)) | (1 << (regexParser.NestedMultiCharEsc - 10)) | (1 << (regexParser.NestedCatEsc - 10)) | (1 << (regexParser.NestedComplEsc - 10)) | (1 << (regexParser.XmlChar - 10)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charRange(): CharRangeContext {
		let _localctx: CharRangeContext = new CharRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, regexParser.RULE_charRange);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.seRange();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.match(regexParser.XmlChar);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seRange(): SeRangeContext {
		let _localctx: SeRangeContext = new SeRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, regexParser.RULE_seRange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.charOrEsc();
			this.state = 130;
			this.match(regexParser.DASH);
			this.state = 131;
			this.charOrEsc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charOrEsc(): CharOrEscContext {
		let _localctx: CharOrEscContext = new CharOrEscContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, regexParser.RULE_charOrEsc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			_la = this._input.LA(1);
			if (!(_la === regexParser.SingleCharEsc || _la === regexParser.XmlChar)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charClassEsc(): CharClassEscContext {
		let _localctx: CharClassEscContext = new CharClassEscContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, regexParser.RULE_charClassEsc);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case regexParser.SingleCharEsc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.match(regexParser.SingleCharEsc);
				}
				break;
			case regexParser.NestedSingleCharEsc:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.match(regexParser.NestedSingleCharEsc);
				}
				break;
			case regexParser.MultiCharEsc:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.match(regexParser.MultiCharEsc);
				}
				break;
			case regexParser.NestedMultiCharEsc:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 138;
				this.match(regexParser.NestedMultiCharEsc);
				}
				break;
			case regexParser.CatEsc:
			case regexParser.NestedCatEsc:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 139;
				this.catEsc();
				}
				break;
			case regexParser.ComplEsc:
			case regexParser.NestedComplEsc:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 140;
				this.complEsc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catEsc(): CatEscContext {
		let _localctx: CatEscContext = new CatEscContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, regexParser.RULE_catEsc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			_la = this._input.LA(1);
			if (!(_la === regexParser.CatEsc || _la === regexParser.NestedCatEsc)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 144;
			this.charProp();
			this.state = 145;
			this.match(regexParser.EndCategory);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public complEsc(): ComplEscContext {
		let _localctx: ComplEscContext = new ComplEscContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, regexParser.RULE_complEsc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if (!(_la === regexParser.ComplEsc || _la === regexParser.NestedComplEsc)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 148;
			this.charProp();
			this.state = 149;
			this.match(regexParser.EndCategory);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charProp(): CharPropContext {
		let _localctx: CharPropContext = new CharPropContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, regexParser.RULE_charProp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if (!(_la === regexParser.IsCategory || _la === regexParser.IsBlock)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\x9C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x07\x031\n\x03\f\x03\x0E\x034\v\x03\x03\x04\x07\x047" +
		"\n\x04\f\x04\x0E\x04:\v\x04\x03\x05\x03\x05\x05\x05>\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06G\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x05\x07L\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n[\n\n\x03\v\x03\v\x03\v\x05" +
		"\v`\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x05\rg\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\rr\n\r\x03\r\x05\ru\n\r\x03\x0E\x05" +
		"\x0Ex\n\x0E\x03\x0E\x03\x0E\x06\x0E|\n\x0E\r\x0E\x0E\x0E}\x03\x0F\x03" +
		"\x0F\x05\x0F\x82\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x90\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02\x02\x07\x04\x02\x10\x11#$\x04\x02\f\f\'\'\x04" +
		"\x02\x0E\x0E!!\x04\x02\x0F\x0F\"\"\x04\x02\x16\x16\x1E\x1E\x02\xA1\x02" +
		"*\x03\x02\x02\x02\x04-\x03\x02\x02\x02\x068\x03\x02\x02\x02\b;\x03\x02" +
		"\x02\x02\nF\x03\x02\x02\x02\fK\x03\x02\x02\x02\x0EM\x03\x02\x02\x02\x10" +
		"Q\x03\x02\x02\x02\x12Z\x03\x02\x02\x02\x14_\x03\x02\x02\x02\x16a\x03\x02" +
		"\x02\x02\x18t\x03\x02\x02\x02\x1Aw\x03\x02\x02\x02\x1C\x81\x03\x02\x02" +
		"\x02\x1E\x83\x03\x02\x02\x02 \x87\x03\x02\x02\x02\"\x8F\x03\x02\x02\x02" +
		"$\x91\x03\x02\x02\x02&\x95\x03\x02\x02\x02(\x99\x03\x02\x02\x02*+\x05" +
		"\x04\x03\x02+,\x07\x02\x02\x03,\x03\x03\x02\x02\x02-2\x05\x06\x04\x02" +
		"./\x07\x05\x02\x02/1\x05\x06\x04\x020.\x03\x02\x02\x0214\x03\x02\x02\x02" +
		"20\x03\x02\x02\x0223\x03\x02\x02\x023\x05\x03\x02\x02\x0242\x03\x02\x02" +
		"\x0257\x05\b\x05\x0265\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02" +
		"\x0289\x03\x02\x02\x029\x07\x03\x02\x02\x02:8\x03\x02\x02\x02;=\x05\x12" +
		"\n\x02<>\x05\n\x06\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02>\t\x03\x02" +
		"\x02\x02?G\x07\x07\x02\x02@G\x07\b\x02\x02AG\x07\x06\x02\x02BC\x07\v\x02" +
		"\x02CD\x05\f\x07\x02DE\x07\x12\x02\x02EG\x03\x02\x02\x02F?\x03\x02\x02" +
		"\x02F@\x03\x02\x02\x02FA\x03\x02\x02\x02FB\x03\x02\x02\x02G\v\x03\x02" +
		"\x02\x02HL\x05\x0E\b\x02IL\x05\x10\t\x02JL\x07\x13\x02\x02KH\x03\x02\x02" +
		"\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02L\r\x03\x02\x02\x02MN\x07\x13" +
		"\x02\x02NO\x07\x14\x02\x02OP\x07\x13\x02\x02P\x0F\x03\x02\x02\x02QR\x07" +
		"\x13\x02\x02RS\x07\x14\x02\x02S\x11\x03\x02\x02\x02T[\x07\n\x02\x02U[" +
		"\x05\x14\v\x02VW\x07\x03\x02\x02WX\x05\x04\x03\x02XY\x07\x04\x02\x02Y" +
		"[\x03\x02\x02\x02ZT\x03\x02\x02\x02ZU\x03\x02\x02\x02ZV\x03\x02\x02\x02" +
		"[\x13\x03\x02\x02\x02\\`\x05\"\x12\x02]`\x05\x16\f\x02^`\x07\t\x02\x02" +
		"_\\\x03\x02\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`\x15\x03\x02\x02" +
		"\x02ab\t\x02\x02\x02bc\x05\x18\r\x02cd\x07%\x02\x02d\x17\x03\x02\x02\x02" +
		"eg\x05\x1A\x0E\x02fe\x03\x02\x02\x02fg\x03\x02\x02\x02gh\x03\x02\x02\x02" +
		"hi\x07&\x02\x02ij\x07&\x02\x02ju\x05\x16\f\x02kl\x05\x1A\x0E\x02lm\x07" +
		"&\x02\x02mn\x05\x16\f\x02nu\x03\x02\x02\x02oq\x05\x1A\x0E\x02pr\x07&\x02" +
		"\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02ru\x03\x02\x02\x02su\x07&\x02" +
		"\x02tf\x03\x02\x02\x02tk\x03\x02\x02\x02to\x03\x02\x02\x02ts\x03\x02\x02" +
		"\x02u\x19\x03\x02\x02\x02vx\x07&\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02" +
		"\x02x{\x03\x02\x02\x02y|\x05\x1C\x0F\x02z|\x05\"\x12\x02{y\x03\x02\x02" +
		"\x02{z\x03\x02\x02\x02|}\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x1B\x03\x02\x02\x02\x7F\x82\x05\x1E\x10\x02\x80\x82\x07\'\x02\x02" +
		"\x81\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\x1D\x03\x02\x02\x02" +
		"\x83\x84\x05 \x11\x02\x84\x85\x07&\x02\x02\x85\x86\x05 \x11\x02\x86\x1F" +
		"\x03\x02\x02\x02\x87\x88\t\x03\x02\x02\x88!\x03\x02\x02\x02\x89\x90\x07" +
		"\f\x02\x02\x8A\x90\x07\x1F\x02\x02\x8B\x90\x07\r\x02\x02\x8C\x90\x07 " +
		"\x02\x02\x8D\x90\x05$\x13\x02\x8E\x90\x05&\x14\x02\x8F\x89\x03\x02\x02" +
		"\x02\x8F\x8A\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x8F\x8C\x03\x02\x02" +
		"\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90#\x03\x02\x02" +
		"\x02\x91\x92\t\x04\x02\x02\x92\x93\x05(\x15\x02\x93\x94\x07\x15\x02\x02" +
		"\x94%\x03\x02\x02\x02\x95\x96\t\x05\x02\x02\x96\x97\x05(\x15\x02\x97\x98" +
		"\x07\x15\x02\x02\x98\'\x03\x02\x02\x02\x99\x9A\t\x06\x02\x02\x9A)\x03" +
		"\x02\x02\x02\x1128=FKZ_fqtw{}\x81\x8F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!regexParser.__ATN) {
			regexParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(regexParser._serializedATN));
		}

		return regexParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public regExp(): RegExpContext {
		return this.getRuleContext(0, RegExpContext);
	}
	public EOF(): TerminalNode { return this.getToken(regexParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_root; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegExpContext extends ParserRuleContext {
	public branch(): BranchContext[];
	public branch(i: number): BranchContext;
	public branch(i?: number): BranchContext | BranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BranchContext);
		} else {
			return this.getRuleContext(i, BranchContext);
		}
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(regexParser.PIPE);
		} else {
			return this.getToken(regexParser.PIPE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_regExp; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterRegExp) {
			listener.enterRegExp(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitRegExp) {
			listener.exitRegExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitRegExp) {
			return visitor.visitRegExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	public piece(): PieceContext[];
	public piece(i: number): PieceContext;
	public piece(i?: number): PieceContext | PieceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PieceContext);
		} else {
			return this.getRuleContext(i, PieceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_branch; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterBranch) {
			listener.enterBranch(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitBranch) {
			listener.exitBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitBranch) {
			return visitor.visitBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PieceContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public quantifier(): QuantifierContext | undefined {
		return this.tryGetRuleContext(0, QuantifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_piece; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterPiece) {
			listener.enterPiece(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitPiece) {
			listener.exitPiece(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitPiece) {
			return visitor.visitPiece(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifierContext extends ParserRuleContext {
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(regexParser.QUESTION, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(regexParser.STAR, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(regexParser.PLUS, 0); }
	public StartQuantity(): TerminalNode | undefined { return this.tryGetToken(regexParser.StartQuantity, 0); }
	public quantity(): QuantityContext | undefined {
		return this.tryGetRuleContext(0, QuantityContext);
	}
	public EndQuantity(): TerminalNode | undefined { return this.tryGetToken(regexParser.EndQuantity, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_quantifier; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterQuantifier) {
			listener.enterQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitQuantifier) {
			listener.exitQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantifier) {
			return visitor.visitQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantityContext extends ParserRuleContext {
	public quantRange(): QuantRangeContext | undefined {
		return this.tryGetRuleContext(0, QuantRangeContext);
	}
	public quantMin(): QuantMinContext | undefined {
		return this.tryGetRuleContext(0, QuantMinContext);
	}
	public QuantExact(): TerminalNode | undefined { return this.tryGetToken(regexParser.QuantExact, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_quantity; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterQuantity) {
			listener.enterQuantity(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitQuantity) {
			listener.exitQuantity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantity) {
			return visitor.visitQuantity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantRangeContext extends ParserRuleContext {
	public QuantExact(): TerminalNode[];
	public QuantExact(i: number): TerminalNode;
	public QuantExact(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(regexParser.QuantExact);
		} else {
			return this.getToken(regexParser.QuantExact, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(regexParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_quantRange; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterQuantRange) {
			listener.enterQuantRange(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitQuantRange) {
			listener.exitQuantRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantRange) {
			return visitor.visitQuantRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantMinContext extends ParserRuleContext {
	public QuantExact(): TerminalNode { return this.getToken(regexParser.QuantExact, 0); }
	public COMMA(): TerminalNode { return this.getToken(regexParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_quantMin; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterQuantMin) {
			listener.enterQuantMin(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitQuantMin) {
			listener.exitQuantMin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantMin) {
			return visitor.visitQuantMin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public Char(): TerminalNode | undefined { return this.tryGetToken(regexParser.Char, 0); }
	public charClass(): CharClassContext | undefined {
		return this.tryGetRuleContext(0, CharClassContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(regexParser.LPAREN, 0); }
	public regExp(): RegExpContext | undefined {
		return this.tryGetRuleContext(0, RegExpContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(regexParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_atom; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharClassContext extends ParserRuleContext {
	public charClassEsc(): CharClassEscContext | undefined {
		return this.tryGetRuleContext(0, CharClassEscContext);
	}
	public charClassExpr(): CharClassExprContext | undefined {
		return this.tryGetRuleContext(0, CharClassExprContext);
	}
	public WildcardEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.WildcardEsc, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_charClass; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCharClass) {
			listener.enterCharClass(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCharClass) {
			listener.exitCharClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharClass) {
			return visitor.visitCharClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharClassExprContext extends ParserRuleContext {
	public charGroup(): CharGroupContext {
		return this.getRuleContext(0, CharGroupContext);
	}
	public EndCharGroup(): TerminalNode { return this.getToken(regexParser.EndCharGroup, 0); }
	public NegCharGroup(): TerminalNode | undefined { return this.tryGetToken(regexParser.NegCharGroup, 0); }
	public NestedNegCharGroup(): TerminalNode | undefined { return this.tryGetToken(regexParser.NestedNegCharGroup, 0); }
	public PosCharGroup(): TerminalNode | undefined { return this.tryGetToken(regexParser.PosCharGroup, 0); }
	public NestedPosCharGroup(): TerminalNode | undefined { return this.tryGetToken(regexParser.NestedPosCharGroup, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_charClassExpr; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCharClassExpr) {
			listener.enterCharClassExpr(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCharClassExpr) {
			listener.exitCharClassExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharClassExpr) {
			return visitor.visitCharClassExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharGroupContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(regexParser.DASH);
		} else {
			return this.getToken(regexParser.DASH, i);
		}
	}
	public charClassExpr(): CharClassExprContext | undefined {
		return this.tryGetRuleContext(0, CharClassExprContext);
	}
	public posCharGroup(): PosCharGroupContext | undefined {
		return this.tryGetRuleContext(0, PosCharGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_charGroup; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCharGroup) {
			listener.enterCharGroup(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCharGroup) {
			listener.exitCharGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharGroup) {
			return visitor.visitCharGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PosCharGroupContext extends ParserRuleContext {
	public DASH(): TerminalNode | undefined { return this.tryGetToken(regexParser.DASH, 0); }
	public charRange(): CharRangeContext[];
	public charRange(i: number): CharRangeContext;
	public charRange(i?: number): CharRangeContext | CharRangeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CharRangeContext);
		} else {
			return this.getRuleContext(i, CharRangeContext);
		}
	}
	public charClassEsc(): CharClassEscContext[];
	public charClassEsc(i: number): CharClassEscContext;
	public charClassEsc(i?: number): CharClassEscContext | CharClassEscContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CharClassEscContext);
		} else {
			return this.getRuleContext(i, CharClassEscContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_posCharGroup; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterPosCharGroup) {
			listener.enterPosCharGroup(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitPosCharGroup) {
			listener.exitPosCharGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitPosCharGroup) {
			return visitor.visitPosCharGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharRangeContext extends ParserRuleContext {
	public seRange(): SeRangeContext | undefined {
		return this.tryGetRuleContext(0, SeRangeContext);
	}
	public XmlChar(): TerminalNode | undefined { return this.tryGetToken(regexParser.XmlChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_charRange; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCharRange) {
			listener.enterCharRange(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCharRange) {
			listener.exitCharRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharRange) {
			return visitor.visitCharRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeRangeContext extends ParserRuleContext {
	public charOrEsc(): CharOrEscContext[];
	public charOrEsc(i: number): CharOrEscContext;
	public charOrEsc(i?: number): CharOrEscContext | CharOrEscContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CharOrEscContext);
		} else {
			return this.getRuleContext(i, CharOrEscContext);
		}
	}
	public DASH(): TerminalNode { return this.getToken(regexParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_seRange; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterSeRange) {
			listener.enterSeRange(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitSeRange) {
			listener.exitSeRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitSeRange) {
			return visitor.visitSeRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharOrEscContext extends ParserRuleContext {
	public XmlChar(): TerminalNode | undefined { return this.tryGetToken(regexParser.XmlChar, 0); }
	public SingleCharEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.SingleCharEsc, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_charOrEsc; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCharOrEsc) {
			listener.enterCharOrEsc(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCharOrEsc) {
			listener.exitCharOrEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharOrEsc) {
			return visitor.visitCharOrEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharClassEscContext extends ParserRuleContext {
	public SingleCharEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.SingleCharEsc, 0); }
	public NestedSingleCharEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.NestedSingleCharEsc, 0); }
	public MultiCharEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.MultiCharEsc, 0); }
	public NestedMultiCharEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.NestedMultiCharEsc, 0); }
	public catEsc(): CatEscContext | undefined {
		return this.tryGetRuleContext(0, CatEscContext);
	}
	public complEsc(): ComplEscContext | undefined {
		return this.tryGetRuleContext(0, ComplEscContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_charClassEsc; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCharClassEsc) {
			listener.enterCharClassEsc(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCharClassEsc) {
			listener.exitCharClassEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharClassEsc) {
			return visitor.visitCharClassEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatEscContext extends ParserRuleContext {
	public charProp(): CharPropContext {
		return this.getRuleContext(0, CharPropContext);
	}
	public EndCategory(): TerminalNode { return this.getToken(regexParser.EndCategory, 0); }
	public CatEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.CatEsc, 0); }
	public NestedCatEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.NestedCatEsc, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_catEsc; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCatEsc) {
			listener.enterCatEsc(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCatEsc) {
			listener.exitCatEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCatEsc) {
			return visitor.visitCatEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplEscContext extends ParserRuleContext {
	public charProp(): CharPropContext {
		return this.getRuleContext(0, CharPropContext);
	}
	public EndCategory(): TerminalNode { return this.getToken(regexParser.EndCategory, 0); }
	public ComplEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.ComplEsc, 0); }
	public NestedComplEsc(): TerminalNode | undefined { return this.tryGetToken(regexParser.NestedComplEsc, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_complEsc; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterComplEsc) {
			listener.enterComplEsc(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitComplEsc) {
			listener.exitComplEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitComplEsc) {
			return visitor.visitComplEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharPropContext extends ParserRuleContext {
	public IsCategory(): TerminalNode | undefined { return this.tryGetToken(regexParser.IsCategory, 0); }
	public IsBlock(): TerminalNode | undefined { return this.tryGetToken(regexParser.IsBlock, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return regexParser.RULE_charProp; }
	// @Override
	public enterRule(listener: regexParserListener): void {
		if (listener.enterCharProp) {
			listener.enterCharProp(this);
		}
	}
	// @Override
	public exitRule(listener: regexParserListener): void {
		if (listener.exitCharProp) {
			listener.exitCharProp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharProp) {
			return visitor.visitCharProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


