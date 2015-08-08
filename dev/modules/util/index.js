/**
 * Created by snow on 2015/6/16.
 */
function extend(pa, ch){
    if(pa instanceof Object && ch instanceof Object){
        for(var i in ch){
            pa[i]= ch[i]
        }
        return pa;
    }else{
        return false
    }
}
var hasClass, addClass, removeClass;  //基本样式操作直接暴露到全局
function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
        return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
        elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
        elem.classList.remove( c );
    };
}
else {
    hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
        }
    };
    removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
    };
}
function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
}

function loadJs(url, fn){
    var head= document.head;
    var ele= document.createElement('script');
    ele.src= url;
    head.appendChild(ele);
    if(fn instanceof Function){
        ele.addEventListener('load', function(){
            fn()
        }, false)
    }
}

var util = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
    loadJs: loadJs
};

window.util= util;

function a(){
    document.write(
        "屏幕分辨率为："+screen.width+"*"+screen.height
        +"<br />"+
        "屏幕可用大小："+screen.availWidth+"*"+screen.availHeight
        +"<br />"+
        "网页可见区域宽："+document.body.clientWidth
        +"<br />"+
        "网页可见区域高："+document.body.clientHeight
        +"<br />"+
        "网页可见区域宽(包括边线的宽)："+document.body.offsetWidth
        +"<br />"+
        "网页可见区域高(包括边线的宽)："+document.body.offsetHeight
        +"<br />"+
        "网页正文全文宽："+document.body.scrollWidth
        +"<br />"+
        "网页正文全文高："+document.body.scrollHeight
        +"<br />"+
        "网页被卷去的高："+document.body.scrollTop
        +"<br />"+
        "网页被卷去的左："+document.body.scrollLeft
        +"<br />"+
        "网页正文部分上："+window.screenTop
        +"<br />"+
        "网页正文部分左："+window.screenLeft
        +"<br />"+
        "屏幕分辨率的高："+window.screen.height
        +"<br />"+
        "屏幕分辨率的宽："+window.screen.width
        +"<br />"+
        "屏幕可用工作区高度："+window.screen.availHeight
        +"<br />"+
        "屏幕可用工作区宽度："+window.screen.availWidth
        +"<br />"+
        "物理像素 / 独立像素比:"+ devicePixelRatio
    );
}
