# Regex Visualizer
El proposito de este proyecto es crear un traductor de Regex a sintaxis [Mermaid](https://mermaid.js.org/),
para esto se hace uso de una gramatica definida en Antlr y se usa visitors para 
hacer la traduccion.

## Antlr Tool
Para generar el codigo de antlr se usa la herramienta [Antlr Tool](https://github.com/antlr/antlr4-tools), primero debes instalar la herramienta:

```bash
$ pip install antlr4-tools
```
Despues puedes generar el codigo de esta mannera:

```bash
$ antlr4 -Dlanguage=TypeScript -listener -visitor -o ./lib regexLexer.g4
```
O tambien puedes hacer:

```bash
$ npm run lexer
$ npm run parser
```
Para esto la gramatica .g4 debe estar definida en el root del proyecto.




