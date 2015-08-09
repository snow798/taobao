/**
 * Created by snow on 2015/7/5.
 */
!function(){
    var loaded= false;
    window.scrollPage= {};
    //下拉刷新
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    document.addEventListener('DOMContentLoaded', function(){
        scrollPage = new IScroll('#wrapper', {
            scrollbars: false,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            deceleration: 0.003
        });
        lazyImage();
        console.log(scrollPage)
    }, false);
    function initData(){
        /*util.loadJs('http://gw.alicdn.com/L1/584/183486/74a6066df1.js',function(){
            console.log(smartbannerJSON)
        });*/


        if(!mainData) return false;

        var setData= {
            banner: function (data) {
                var slide_container_ele= document.querySelector('.swiper-container');
                var tpl= '';
                for(var item in data.items){
                    var sel= data.items[item];
                    tpl += '<div class="swiper-slide"><a href="#"data-href="'+sel.targetUrl+'"data-type="'+sel.bizType+'"><img src="'+sel.imageUrl[0].imgUrl+'"></a></div>';
                }
                var wrapper= document.createElement('div');
                wrapper.className= 'swiper-wrapper';
                wrapper.innerHTML= tpl;
                slide_container_ele.appendChild(wrapper);
                var mySwiper = new Swiper('.swiper-container',{
                    pagination: '.pagination',
                    paginationClickable: true,
                    autoplay: 3000,
                    loop: true
                })
            },
            tentrance: function(data){
                var list_container_ele= document.querySelector('.menu_list');
                var tpl= '';
                for(var item in data.items){
                var sel= data.items[item];
                    tpl +='<div class="menu_item" data-Type="'+sel.bizType+'" data-href="'+sel.targetUrl+'" style="background-image: url('+sel.imageUrl[0]["imgUrl"]+');">'+sel.title[0]["valueDesc"]+'</div>';
                }
                list_container_ele.innerHTML= tpl;
            },
            rushbuy41: function(data){
                var ad= document.querySelector('.ad');
                var tpl= '';
                var sel= data.items[0];
                    var left= document.createElement('div');
                    left.className= 'ad_left';
                    left.style.backgroundImage= 'url('+sel['imageUrl'][0].imgUrl+')';
                    left.setAttribute('data-href',sel.targetUrl);
                    ad.appendChild(left);
                var right_cont= document.createElement('div');
                right_cont.className= 'ad_right';
                sel= data.items[1];
                var right_top= document.createElement('div');
                right_top.className= 'ad_right_top';
                right_top.style.backgroundImage= 'url('+sel['imageUrl'][0].imgUrl+')';
                right_top.setAttribute('data-href', sel.targetUrl);
                var right_bottom= document.createElement('div');
                right_bottom.className= 'ad_right_botton';
                sel= data.items[2];
                var right_bottom_left= document.createElement('div');
                right_bottom_left.style.borderRight= '1px solid #eee;';
                right_bottom_left.style.backgroundImage= 'url('+sel['imageUrl'][0].imgUrl+')';
                right_bottom_left.setAttribute('data-href', sel.targetUrl);
                sel= data.items[3];
                var right_bottom_right= document.createElement('div');
                right_bottom_right.style.backgroundImage= 'url('+sel['imageUrl'][0].imgUrl+')';
                right_bottom_right.setAttribute('data-href', sel.targetUrl);
                right_bottom.appendChild(right_bottom_left);
                right_bottom.appendChild(right_bottom_right);
                right_cont.appendChild(right_top);
                right_cont.appendChild(right_bottom);
                ad.appendChild(right_cont);
            },
            tSpecialGuide1: function(data){
                var ts= document.querySelector('.ts');
                var tpl= '';
                //title
                var sel= data.items[0];
                ts_title= document.createElement('div');
                ts_title.className= 'title';
                ts_title.setAttribute('data-href', sel.targetUrl);
                ts_title.innerHTML= '<span class="context"></span>';

                tpl= '<div class="ts_links_left" data-href="'+data.items[1].targetUrl+'" style="background-image: url('+data.items[1].imageUrl[0].imgUrl+')"></div><div class="ts_links_right"><div data-href="'+data.items[2].targetUrl+'" style="background-image: url('+data.items[2].imageUrl[0].imgUrl+');"></div><div data-href="'+data.items[2].targetUrl+'" style="border-top: 1px solid #eee;background-image: url('+data.items[3].imageUrl[0].imgUrl+');"></div></div>';
                var ts_links= document.createElement('div');
                ts_links.className= 'ts_links';
                ts_links.innerHTML= tpl;
                ts.appendChild(ts_title);
                ts.appendChild(ts_links);

            },
            tSpecialGuide2: function(data){
                var ts= document.querySelector('.ts');
                var tpl= '';
                var data= data.items;
                var ts_two= document.createElement('div');
                ts_two.className= 'ts_two';
                for(var item in data){
                    sel= data[item];
                    var style= '';
                    switch(item)
                    {
                        case 0:
                            style= ' border-left: 0; margin-left: 0.14rem;';
                            break;
                        case 4:
                            style= 'border-right: 0;';
                            break;
                    }
                    tpl += '<div data-href="'+sel.targetUrl+'" class="ts_two_context" style="'+style+'background-image: url('+sel.imageUrl[0].imgUrl+');"><div>'+sel.title[0].valueDesc+'</div><p>'+sel.title[1].valueDesc+'</p></div>';
                }
                ts_two.innerHTML= tpl;
                ts.appendChild(ts_two);
            },
            tSpecialGuide3: function(data){
                var ts= document.querySelector('.ts');
                var tpl= '';
                var ts_three= document.querySelector('.ts_three');
                var ts_three_line= document.createElement('div');
                ts_three_line.className= 'ts_three_line';
                if(!ts_three){
                    var ts_three_el= document.createElement('div');
                    ts_three_el.className= 'ts_three';
                    ts.appendChild(ts_three_el);
                    ts_three= document.querySelector('.ts_three');
                }
                data= data.items;
                for(var item in data){
                    var sel= data[item];
                    var it_el= document.createElement('div');
                    it_el.className= 'ts_three_item';
                    switch(item)
                    {
                        case '0':
                            it_el.style.marginLeft= '0.15rem';
                            it_el.style.borderLeft= '0';
                            tpl= '<span style="color: #9766c1;">&bull;</span>';
                            break;
                        case '1':
                            tpl= '<span style="color: #9b6cc3;">&bull;</span>';
                            break;
                        case '2':
                            tpl= '<span style="color: #29b159;">&bull;</span>';
                            break;
                        case '3':
                            it_el.style.borderRight= '0';
                            tpl= '<span style="color: #e90911;">&bull;</span>';
                            break;
                    }
                    it_el.innerHTML= tpl+ sel.title[0].valueDesc;
                    it_el.setAttribute('data-href', sel.targetUrl);
                    ts_three.appendChild(it_el);
                    ts_three.appendChild(ts_three_line);
                }
            },
            tSpecialGuide4: function(data){
                var ts= document.querySelector('.ts');
                var tpl= '';
                var ts_three= document.querySelector('.ts_three');
                data= data.items;
                for(var item in data){
                    var sel= data[item];
                    var it_el= document.createElement('div');
                    it_el.className= 'ts_three_item';
                    switch(item)
                    {
                        case '0':
                            it_el.style.marginLeft= '0.15rem';
                            it_el.style.borderLeft= '0';
                            tpl= '<span style="color: #0061f0;">&bull;</span>';
                            break;
                        case '1':
                            tpl= '<span style="color: #e90911;">&bull;</span>';
                            break;
                        case '2':
                            tpl= '<span style="color: #ffd109;">&bull;</span>';
                            break;
                        case '3':
                            it_el.style.borderRight= '0';
                            tpl= '<span style="color: #ff3e00;">&bull;</span>';
                            break;
                    }
                    it_el.innerHTML= tpl+ sel.title[0].valueDesc;
                    it_el.setAttribute('data-href', sel.targetUrl);
                    ts_three.appendChild(it_el);
                }
            },
            tbanner2: function(data){
                var md_ad_1= document.querySelector('.md_ad_1');
                md_ad_1.style.backgroundImage= 'url('+data.items[0].imageUrl[0].imgUrl+')';
                md_ad_1.setAttribute('data-href', data.items[0].targetUrl);
            },
            tIndustry1: function(data){
                var hotMarket= document.querySelector('.hotMarket');
                var tpl= '';
                var sel= '';
                var s_class= '';
                var s_style= '';
                data= data.items;
                for(var item in data){
                    sel= data[item];
                    switch(item)
                    {
                        case '0':
                            tpl += '<div class="title" data-href="'+sel.targetUrl+'"></div>';
                            break;
                        case '1':
                            tpl += '<div class="hotMarket_one"><div class="left"><div class="tip">'+sel.title[0].valueDesc+'</div> <div class="pub">'+sel.title[1].valueDesc+'</div></div>';
                            break;
                        case '2':
                            tpl += '<div class="right"><div class="tip">'+sel.title[0].valueDesc+'</div><div class="pub">'+sel.title[1].valueDesc+'</div></div></div>';
                            break;
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '7':
                        case '8':
                        case '9':
                        case '10':
                            if(item == 3){
                                tpl += '<div class="hotMarket_two layout">';
                                s_class= 'item item_left';
                                s_style= ' margin-left: 0.15rem; ';
                            }

                            if(item == 7){
                                tpl += '<div class="hotMarket_three layout">';
                                s_class= 'item item_left';
                                s_style= ' margin-left: 0.15rem; ';
                            }

                            if(item == 4 || item == 8){
                                s_class= 'item item_left';
                                s_style= '';
                            }
                            if(item == 5 || item == 9){
                                s_class= 'item';
                                s_style= '';
                            }
                            if(item == 6 || item == 10){
                                s_class= 'item';
                                s_style= '';
                            }
                            tpl += '<div data-href="'+sel.targetUrl+'" class="'+ s_class+'"style="'+s_style+' background-image: url('+sel.imageUrl[0].imgUrl+');"><div class="tip">'+sel.title[0].valueDesc+'</div><div class="pub">'+sel.title[1].valueDesc+'</div></div>';

                            tpl+= (item==6 || item==10) ? '</div>': '' ;    //外围标签闭合
                            break;
                    }
                }
                hotMarket.innerHTML= tpl;
            },
            tbanner3: function(data){
                var md_ad_2= document.querySelector('.md_ad_2');
                md_ad_2.style.backgroundImage= 'url('+data.items[0].imageUrl[0].imgUrl+')';
                md_ad_2.setAttribute('data-href', data.items[0].targetUrl);
            },
            titem: function(data){
                var guess_context= document.querySelector('.guess_context');
                var tpl= '';
                var sel= {};
                for(var item in data.items){
                    sel= data.items[item];
                    var item_el= document.createElement('div');
                    item_el.className= 'guess_item';
                    item_el.innerHTML= '<div lazyload="true" class="guess_item_image" data-image="'+sel.imageUrl[0].imgUrl+'" style="background-image: url();"></div><div class="text">'+sel.title[0].valueDesc+'</div><div class="price">'+sel.title[1].valueDesc+'</div>';
                    guess_context.appendChild(item_el);
                }

            }
        };

        var section= mainData.data.section;
        for(var i in section){
            //console.log(section[i].type);
            var cello= section[i];
            switch (cello.template)
            {
                case 'tbanner':
                    setData.banner(cello);
                    break;
                case 'tentrance':
                    setData.tentrance(cello);
                    break;
                case 'rushbuy41':
                    setData.rushbuy41(cello);
                    break;
                case 'tSpecialGuide1':
                    setData.tSpecialGuide1(cello);
                    break;
                case 'tSpecialGuide2':
                    setData.tSpecialGuide2(cello);
                    break;
                case 'tSpecialGuide3':
                    setData.tSpecialGuide3(cello);
                    break;
                case 'tSpecialGuide4':
                    setData.tSpecialGuide4(cello);
                    break;
                case 'tbanner2':
                    setData.tbanner2(cello);
                    break;
                case 'tIndustry1':
                    setData.tIndustry1(cello);
                    break;
                case 'tbanner3':
                    setData.tbanner3(cello);
                    break;
                case 'titem':
                    setData.titem(cello);
                    break;

            }
        }
    }
    function lazyImage(){
        var setT= 0;
        var loadImg= function(){
            var allDiv= document.querySelectorAll('.guess_item_image');
            var scrolly= Math.abs(scrollPage.y);
            for(var i in allDiv){
                var ele= allDiv[i];
                if(ele.nodeType == 1 && Boolean(ele.getAttribute('lazyload')) ){
                    var isload= ele.getAttribute('lazyload');
                    if(isload == 'true'){
                        //console.log(ele)
                        if(ele.offsetTop< document.documentElement.clientHeight+scrolly ){
                            ele.setAttribute('lazyload', 'false');
                            var imgtag= 'image'+ i;
                             imgtag= new Image();
                             imgtag.deImg= ele;
                             imgtag.src= ele.getAttribute('data-image');
                             imgtag.onload= function(){
                             this.deImg.style.backgroundImage= 'url('+this.src+')';
                             }
                        }
                    }else{
                       // console.log(ele,'no')
                    }

                }
            }
        };
        scrollPage.on('scrollStart', function(ev){
            if(setT>0){
                clearTimeout(setT);
            }
        });
        scrollPage.on('scrollEnd', function(ev){
                setT=setTimeout(loadImg, 100);
        });
    }
    function init(){
        initData();   //数据填充
    }

    if(!loaded){
        init();
    }

}();
