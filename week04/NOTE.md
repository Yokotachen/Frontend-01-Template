# 每周总结可以写在这里

# 事件循环
  类似死循环

  宏任务，微任务
    其实所有(有待考证)的JS代码都是一个微任务，只是哪些微任务构成了一个宏任务；执行在JS引擎里的就是微任务，执行在JS引擎之外的就是宏任务，循环宏任务的工作就是事件循环

    拿浏览器举例：setTimeout、setInterval 这种其实不是 JS 语法本身的 API，是 JS 的宿主浏览器提供的 API， 所以是宏任务。
    而 Promise 是 JS 本身自带的 API，这种就是微任务。
    总结：宿主提供的方法是宏任务，JS 自带的是微任务

# 自主练习
  <script>
    async function async1() {
      console.log('async1 start')
      await async2()
      console.log('async1 end')
    }
  
    async function async2() {
      console.log('async2')
    }
  
    console.log('script start')
  
    setTimeout(function () {
      console.log('setTimeout')
    }, 0)
  
    async1()
  
    new Promise(function (resolve) {
      console.log('promise1')
      resolve()
    }).then(function () {
      console.log('promise2')
    })
  
    console.log('script end')
  </script>

  输出顺序：
  script start -> async1 start -> async2 -> promise1 -> script end -> async1 end -> promise2 -> setTimeout

  入队顺序：
  宏任务1
  1.script start
  2.async1 start
  3.async2
    3.1 微任务 async1 end
  4.promise1
    4.1 微任务 promise2
  5.script end
  宏任务2
  6.setTimeout