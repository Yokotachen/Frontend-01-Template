# 每周总结可以写在这里

## 基本概念
	HTML代码中可以书写开始标签，结束标签，和自封闭标签
	一对起止标签，表示一个元素
	DOM树中存储的是元素和其他类型的节点（Node）
	CSS选择器选中的是元素
	CSS选择器选中的元素，在排版时可能产生多个盒
	排版盒渲染的基本单位是盒

## 正常流
### IFC -> inline formatting context
	一个LineBox中在没有任何元素的时候，基线在盒子的下沿
	vertical-align推荐使用属性值：top middle bottom

	<div style="font-size:50px;line-height:100px;background-color:pink;">
	<div style="vertical-align:text-bottom;overflow:visible;display:inline-block;width:1px;height:1px;">
	    <div style="width:1000px;;height:1px;background:red;"></div>
	</div>
	<div style="vertical-align:text-top;overflow:visible;display:inline-block;width:1px;height:1px;">
	    <div style="width:1000px;;height:1px;background:red;"></div>
	</div>
	<span>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </span>
	<div style="vertical-align:text-bottom;line-height:70px;width:100px;height:150px;background-color:aqua;display:inline-block">1</div>
	<div style="vertical-align:top;line-height:70px;width:100px;height:50px;background-color:aqua;display:inline-block">1</div>
	<div style="vertical-align:base-line;line-height:70px;width:100px;height:550px;background-color:plum;display:inline-block">1</div>
	</div>

### BFC -> block formatting context
	解决边距折叠的问题
	
	flex  inline-flex
	table inline-table
	grid  inline-grid
	block inline-

	inline-block
	可以当两部分看，对外面的它的兄弟节点来说，他是一个inline元素
	对它包含的元素来说，他是一个可以包含block的container，建立BFC

	block-level 表示可以被放入bfc
	block-container 表示可以容纳bfc
	block-box = block-level + block-container
	block-box 如果 overflow 是 visible， 那么就跟父bfc合并

## flex
