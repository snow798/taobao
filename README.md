Ya淘宝移动端网站(学习)
===================================
编辑/整理：[snow798](https://github.com/snow798/)
---

**提醒：** 你可以访问 [m.taobao.com](http://m.taobao.com/) 查看淘宝移动版官方网站。*chromeF12浏览体验更好*<br/>
本项目主要做个人移动端开发技术、优化、性能方面的积累和探索。<br/>
向牛掰大牛致敬。也欢迎[lssues](https://github.com/snow798/taobao/issues)探索，各种喷~~

关于Yataobao
---------------

阿里淘宝是一个全平台移动端项目，相关页面会嵌入到Android、ios客服端里

一、起步，CSS自适应
---------------
不管干嘛就是起步难，不是吗。以前大部分时间在前端开发上主要做的是PC端，真正做的WAP都不是很复杂，当然了市场上绝大多数也是不复杂的，有m.taobao.com这样复杂的也不多。

刚开始考虑的是用半分比(%)尺寸布局:
---<div class="main">
---        <div style="width:20%">...</div>
---        <div style="width:80%">...</div>
---</div>

特点：简单快捷， 适合于纯文字元素内容的显示。<br/>
缺点是，当布局中需要包含固定尺寸大小元素时前端实现会变复杂：<br/>
1、在不同尺寸终端上 固定尺寸元素与周围元素实际距离不确定，不能真正的还原设计图<br/>


参考
---------------
[Mobile Web Favorites || 移动前端开发收藏夹](https://github.com/hoosin/mobile-web-favorites)
