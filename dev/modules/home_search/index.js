/**
 * Created by snow on 2015/6/15.
 * 首页--商品搜索
 * depend: util
 */
!function(){
    var search_ipt= document.getElementById('search');
    var search_close_btn= document.getElementsByClassName('close_search')[0];
    var search_content= document.getElementsByClassName('home_search')[0];
    var search_item_btn= document.getElementsByClassName('search_type_item');
    search_ipt.addEventListener('click', function(){
        search_content.style.display= 'block'
    }, false);
    search_close_btn.addEventListener('click', function(){
        search_content.style.display= 'none';
    }, false);

    var focusId= 0;
    function searchItemEvent(e){
        if(hasClass(this, 'action')){
            return false
        }else{
            removeClass(search_item_btn[focusId],'action');
            addClass(this, 'action')
        }{
            focusId= this.getAttribute('data-typeID');  //储存当前类型值攻下次使用
        }
    }
    for(var item in search_item_btn){
        itemElement= search_item_btn[item];
        if(itemElement.nodeType === 1){
            itemElement.addEventListener('click', searchItemEvent, false)
        }
    }
}();