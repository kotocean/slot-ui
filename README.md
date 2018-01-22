## slot-ui
使用js在页面嵌入ui和逻辑代码

### 注意事项
为了保证可用性，这里使用了http server保存js代码以及ui所需的素材。也可以自定义素材和ico。

在需要引用的页面body末尾添加一下代码：
```html
<script type="text/javascript" src='http://localhost/slot-ui/js/jquery-3.2.1.min.js'></script>
<!-- <script type="text/javascript" src='js/slot.js'></script> -->
<script type="text/javascript" src='http://localhost/slot-ui/js/myObj.js'></script>
<script type="text/javascript">
    //该部分放到document末尾就是加载好文档之后执行
    //使用window.onload确保函数内容必须在document加载完成之后执行
    var myTester = new myObj("royals", 26, "#chan_newsDetail")
    // alert(myTester.sayHi())
    myTester.show("我的家在东北", "http://localhost/slot-ui/images/real-money-slot.jpg")
    //myTester.getText("article") //立即执行article文本内容的获取
</script>
```