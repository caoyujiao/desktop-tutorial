$(function (){

   //首页
       //手机端菜单
       $("#navbar").click(function (){
           var bool = $(".header").hasClass('header-toggled');
           if(!bool){
               $(".header").addClass('header-toggled')
           }else{
               $(".header").removeClass('header-toggled')
           }
       })

       $(".overlay").click(function (){
           $(".header").removeClass('header-toggled')
       })

       //首页-第二块
       $(".home-list").on("mouseover",'.home-items',function (){
            if(!$(this).hasClass('active')){
                $(".home-list .home-items").removeClass('active')
                $(this).addClass('active');
            }
        })
       $(".home-list").on("click",'.home-items',function (){
            if(!$(this).hasClass('active')){
                $(".home-list .home-items").removeClass('active')
                $(this).addClass('active');
            }
        })


       /*页面关键词全局标红*/
        var cpText = function (arr) {
          if(arr && arr.length>0){
            var str ="("+ arr.join("|") +")";
            var regStr = new RegExp(str,'g');
            var elemList = [];
            var domTraverse = function(dom){
                for( var i in dom){
                    if(typeof parseInt(i) === 'number' && !isNaN(parseInt(i))){
                        if(dom[i].nodeType == "3" && dom[i].nodeValue && dom[i].nodeValue.trim() != ""){
                            var _nodeVal = dom[i].nodeValue;
                            arr.forEach(function (item) {
                                if(_nodeVal.indexOf(item) != -1){
                                    dom[i].nodeValue = _nodeVal.replace(regStr,'<zwKey>$1</zwKey>');
                                    elemList.push(dom[i].parentNode)
                                }
                            });
                        }
                        if(dom[i].childNodes && dom[i].childNodes.length >0 && !(dom[i].nodeType == "1" && dom[i].nodeName == "ZWKEY" ) && dom[i].nodeName != 'ZHTML' ){
                            domTraverse(dom[i].childNodes)
                        }
                    }
                }
            };
            domTraverse(document.getElementsByTagName('BODY'));
            if(elemList.length > 0){
                elemList.forEach(function (item) {
                    item.innerHTML = item.innerHTML.replace(/(&lt;zwKey&gt;)/g,'<zwKey>').replace(/(&lt;\/zwKey&gt;)/g,'</zwKey>');
                })
            }
        }
        };
        /*页面关键词全局去掉标红*/
        var cancleText = function () {
            var elemList = [];
            var domCancle = function(dom){
                for( var i in dom){
                    if(typeof parseInt(i) === 'number' && !isNaN(parseInt(i))){
                        if(dom[i].nodeType == "1" && dom[i].nodeName == "ZWKEY"){
                            elemList.push(dom[i].parentNode);
                        }
                        if(dom[i].childNodes && dom[i].childNodes.length >0 && dom[i].nodeName != 'ZHTML' ){
                            domCancle(dom[i].childNodes)
                        }
                    }
                }
            };
            domCancle(document.getElementsByTagName('BODY'));
            if(elemList.length > 0){
                elemList.forEach(function (item) {
                    item.innerHTML = item.innerHTML.replace(/<zwkey>/g,'').replace(/<\/zwkey>/g,'');
                })
            }
        };

        $(".header .header-search .hsearch-icon").click(function (){
            cancleText();
            var value = $('.header .header-search [name="value"]').val();
            if(value){
                cpText([value])
            }
        })





    //风控科技
    //风控科技-产品与服务
    $(".product .p-server .ps-list").on("mouseover",'.ps-items',function (){
        if(!$(this).hasClass('active')){
            $(".product .p-server .ps-list .ps-items").removeClass('active')
            $(this).addClass('active');
        }
    })
    $(".product .p-server .ps-list").on("click",'.ps-items',function (){
        if(!$(this).hasClass('active')){
            $(".product .p-server .ps-list .ps-items").removeClass('active')
            $(this).addClass('active');
        }
    })
    //风控科技-解决方案
    $(window).resize(function() {
        setLeft();
    });
    var setLeft = function (){
        var left = 0;
        if(window.innerWidth > 980){
            setTimeout(function (){
                if($("#pd-block")[0]){
                    left =  $("#pd-block")[0].offsetLeft || 0;
                    $("body .product .p-resolve").css('padding-left',left+'px')
                }
            },500)
        }else{
            left = 0;
            $("body .product .p-resolve").css('padding-left',left+'px')
        }
    }
    setLeft();

    $(".product .p-resolve .pr-list").on("mouseover",'.pr-items',function (){
        if(!$(this).hasClass('active')){
            $(".product .p-resolve .pr-list .pr-items").removeClass('active')
            $(this).addClass('active');
        }
    })







});
