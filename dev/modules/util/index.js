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
