import { RootContext } from "./regexParser";
import { regexParserListener } from "./regexParserListener";

export class RegexToDiagram implements regexParserListener {
  enterRoot(ctx: RootContext) {
    console.log("test")
  }
}
