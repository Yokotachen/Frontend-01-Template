# 每周总结可以写在这里

->JavaScript 中除了开发者自己可以实现的对象之外，还存在一类特殊的对象，这些对象由于内置了特殊的方法，所以无法有开发者自己实现，以下是一览
1.Function Object => [[call]]
2.Array => [[length]]
3.String => [[StringData]]
4.Arguments => [[ParameterMap]]
5.Integer-Indexed => [[ArrayLength]]
6.Module Namespace => [[IsExtensible]] [[PreventExtensions]]
7.Immutable Prototype => [[SetPrototypeOf]]

# 课堂内容

->Float
在确认各种数据结构在内存中的分布时，需要注意大端小端的问题

->Expressions 表达式
四则运算的内部实现算法就是树
Member
a.b
a[b]
super.b
super['b']
foo`string`
new.target
new Foo()

    	new new a() -> 括号代表高优先级
    	new a()()

    	Member运算
    		->delete assign

    	函数调用
    		foo()
    		super()
    		foo()['b']
    		foo().b
    		foo()`abc`

    	Left Handside = Right Handside
    	->极限是call     ->a++
    	                  a--
    	                  --a
    	                  ++a

    	单目运算法
    		-> void foo() => undefined  void 0 <=> undefined
    		   delete a.b

    	逻辑运算
    		->短路逻辑

    	Symbol
    	bigint

->Completion Record
[[type]]:normal, break, continue, return, throw
[[value]]:Types
[[target]]:label

    简单语句
    	ExpressionStatement -> a = 1 + 2;
    	EmptyStatement -> ;
    	DebuggerStatement -> 产生调试中断 debugger;
    	ThrowStatement -> throw a;
    	ContinueStatement -> continue label1;
    	BreakStatement -> break label2;
    	RetrunStatement -> return 1 + 2;

    复合语句
    	BlockStatement
    		->{
    			a:1
    		  }
    		  [[type]]:normal
    		  [[value]]:--
    		  [[target]]:--
    	LterationStatement
    		->while()
    		  do while()
    		  for(;;)
    		  for(in)
    		  for(of)
    	LabelledStatement
    		->不常用
    	try
    		->try{

    		  }catch(){

    		  }finally{

    		  }

    声明
    	FunctionDeclaration
    	GeneratorDeclaration
    	AsyncFunctionDeclaration
    	......

    	var x = 0;
    	function foo() {
    		var o = {x: 1};
    		x = 2;
    		with(o) {
    		   var x = 3;
    		}
    		console.log(x);
    	}

    	foo();
    	console.log(x);

    	有var写在function范围内，至少写在变量第一次出现的地方，不要写在子结构里
    	let, const全面代替var

->Object
唯一标示性
有状态
行为->状态的改变

\*\*\*\*改变自身状态的行为

key：symbol, String
value: Data, Accessor
->Data:[[value]] writable enumerable configurable
->Accessor get set enumerabale configurable

Object API/Grammar
1 {} . [] object.defineProperty
2 Object.create/Object.setPrototypeOf/Object.getPrototypeOf -> 不和 3 混用
3 new/class/extends -> 不和 2 混用
4 new/function/prototype -> 抛弃

Object.prototype[[setPrototypeOf]]
