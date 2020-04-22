# BNF

	编程语言的范式
	https://www.jianshu.com/p/15efcb0c06c8

	数字
	<Number> = "0" | "1" | "2" | ..... | "9"
	
	所有整数
	<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )
	
	四则运算
	<PrimaryExpression> = <DecimalNumber> |
	    "(" <LogicalExpression> ")"
	
	乘除法
	<MultiplicativeExpression> = <PrimaryExpression> | 
	    <MultiplicativeExpression> "*" <PrimaryExpression>| 
	    <MultiplicativeExpression> "/" <PrimaryExpression>
	
	加减法
	<AdditiveExpression> = <MultiplicativeExpression> | 
	    <AdditiveExpression> "+" <MultiplicativeExpression>| 
	    <AdditiveExpression> "-" <MultiplicativeExpression>
	
	逻辑运算
	<LogicalExpression> = <AdditiveExpression> | 
	    <LogicalExpression> "||" <AdditiveExpression> | 
	    <LogicalExpression> "&&" <AdditiveExpression>

# 图灵完备性
	https://www.jianshu.com/p/a04b16c5bbda
 	命令式->图灵机（有以下关键字）
   		   goto
   	       if和while
 	声明式->lambda
   		   递归

#  命令式编程
	Atom -> Expression -> Statement -> Structure -> Program

# 常用Unicode
	U+000A LINE FEED
 	U+000D CARRIAGE RETURN
 	U+0020 SPACE//unicode中所有space都是合法space

 	一般判断中文方法
 		->  判断中文 4E00 ~ 9FFF  考虑增补

 # JavaScript类型
	WhiteSpace
 		<TAB>
 		<VT>
 		<FF>
 		<SP>
 		<NBSP> -> no break space
 		<ZWNNSP> -> U+FEFF(BOM) Zero Width no break space 淘汰技术
 		<USP>
 	LineTerminator
 		<LF> \n
 		<CR> \r
 		<LS> -> 不推荐用
 		<PS> -> 不推荐用
 	Comment
 		/* */
 		//
 	Token
 		IdentifierName
 			Keywords
 			Identifier
 			Future reserved
 		Punctuator
 		Literal
 			Number 
 				-> IEEE 754 Double Float
 				-> 8进制 0oxx
 				-> 0b 二进制
 				-> 0x 16进制
 				-> 10进制 12.3e10
 			String
 				UCS U+0000 ~ U+FFFF
 				encoding -> utf-8 utf-16
 			Boolean
 			Object
 			Null
 			Symbol
 			undefined