# 有限状态机
## 所有机器接收的状态时一致的
## 每个机器都有确定的下一个状态（Moore）
## 每个机器根据输入可以确定下一个状态（Mealy）

## 通用模板
	function state(input){
		return next
	}

	while(input){
		state = state(input)
	}