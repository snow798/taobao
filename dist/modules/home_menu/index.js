/**
 * Created by snow on 2015/6/18.
 */
!function(){
    var circleShowed= false;
    var hoverBtn= document.querySelectorAll('.circle a');
    var mask= document.querySelector('.menu_mask');
    var menu_btn_bg= document.querySelector('.menu_btn ul');
    var menu_btn= document.querySelector('.menu_btn ul li');
    var menu_centent= document.querySelector('.menu_centent');
    for( var i in hoverBtn){
        var ele= hoverBtn[i];
        if(ele.nodeType === 1){
            ele.addEventListener('mouseover', function(e){
                var bg= this.nextElementSibling;
                if(bg.nodeType === 1){
                    bg.style.display= 'block';
                }
            }, true);
            ele.addEventListener('mouseout', function(e){
                var bg= this.nextElementSibling;
                if(bg.nodeType === 1){
                    bg.style.display= 'none';
                }
            }, false)
        }
    }

    menu_btn.addEventListener('click', function(){
        if(circleShowed){
            removeClass(mask, 'menu_mask_on');
            removeClass(menu_btn_bg, 'menu_btn_off');
            removeClass(menu_centent, 'menu_centent_show');
            addClass(menu_centent, 'menu_centent_hide');
            circleShowed= false;
        }else{
            addClass(mask, 'menu_mask_on');
            addClass(menu_btn_bg, 'menu_btn_off');
            removeClass(menu_centent, 'menu_centent_hide');
            addClass(menu_centent, 'menu_centent_show');
            circleShowed= true;
        }
    }, false)

}();