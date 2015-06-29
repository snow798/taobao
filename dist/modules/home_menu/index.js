/**
 * Created by snow on 2015/6/18.
 */
!function(){
    hoverBtn= document.querySelectorAll('.circle a');
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
}();