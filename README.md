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

    <div class="main">
            <div style="width:20%">...</div>
            <div style="width:80%">...</div>
    </div>

最后发现在很多情况下不能真的大道自适应，特别是有大量的图片元素时高度缩放不好处理，即固定尺寸元素出现时百分比布局显得有点力不从心。
问题来了，那就解决问题。
查阅相关资料————用 'rem'：

贴链接： [web app变革之rem](http://isux.tencent.com/web-app-rem.html)

rem实现原理上面链接有详细论述<br/>

+ 1单位rem(1rem)等于根元素设置的字体大小(即html元素的font-size值)，所以当html的font-size等于20px时，设div的width等于2rem即 div的width等于2*20px= 40px；

+ 改变html元素字体大小即改变了页面所用应用了rem为单位的元素相关样式实际尺寸；

如html的font-size:20px, img元素 的实际尺寸为宽120px,高60px<br/>
 即源码中应为:

    <img src="logo.png" style="width: 6rem; height: 3rem">

改变根元素字大小就可以很轻松的实现不同尺寸屏幕的适配：

1.媒体查询：

    @media only screen and (min-width: 401px){
        html {
            font-size: 25px !important;
        }
    }
    @media only screen and (min-width: 428px){
        html {
            font-size: 26.75px !important;
        }
    }
    @media only screen and (min-width: 481px){
        html {
            font-size: 30px !important;
        }
    }
    @media only screen and (min-width: 569px){
        html {
            font-size: 35px !important;
        }
    }
    @media only screen and (min-width: 641px){
        html {
            font-size: 40px !important;
        }
    }

2.JS根据屏幕宽度自动计算出****当前****终端页面合适的字体大小：

    //自适应REM设置
    !function(){
        var isChange= false, oldScreenWidth= 375, oldRem= 50;   // 默认iPhone6为基准[屏款375，默认根字体大小50px]
        var html= document.getElementsByTagName('html')[0];
        var getStyle = function (element,attr) {
            if(typeof window.getComputedStyle!='undefined'){
                    return parseFloat(window.getComputedStyle(element,null)[attr]);
                }else if(element.currentStyle){
                    return parseFloat(element.currentStyle[attr]);
                }
        };
        function initRem(){
            html.style.fontSize= document.body.clientWidth*oldRem/oldScreenWidth+'px';
            oldScreenWidth= document.body.clientWidth;
            oldRem= getStyle(html, 'font-size');
            isChange= false;
        }
        document.addEventListener('DOMContentLoaded', function(){
            initRem();
        });
        window.addEventListener('resize', function(){
            if(!isChange){
                isChange= true;
                setTimeout(initRem, 700);
            }
        })
    }()


>发了几个小时在不同屏幕大小下实现了JS的自适应调整功能

>默认标准宽度为375px, 这个数值是iphone6的屏幕宽度，所以Chrome的调试工具Device需选择iphone6

>根字体大小默认设为50px,所以屏幕100%宽度就是7.5rem。 美团触屏版使用的是100px

>使用时代码直接粘贴到页面


参考
---------------
[Markdown 入门参考](https://github.com/LearnShare/Learning-Markdown)
[Mobile Web Favorites || 移动前端开发收藏夹](https://github.com/hoosin/mobile-web-favorites)

