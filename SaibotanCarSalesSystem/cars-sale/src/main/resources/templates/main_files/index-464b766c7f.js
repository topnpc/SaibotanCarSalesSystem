"use strict";$(function(e){var s="https://img.dongfeng-nissan.com.cn/Content/car/altima/highlight_video/vc-turbo.mp4",t={f:s,c:0,i:phpData.videoImg,wh:"16:9"};CKobject.embed("https://s.chebaba.com/other/ckplayer/1.0.0/ckplayer/ckplayer.swf","video_main","ckplayer_video_main","1200","675",!0,t,[s+"->video/mp4"],{bgcolor:"#FFF",allowFullScreen:!0,allowScriptAccess:"always",wmode:"transparent",loop:!0,menu:!1,quality:"best"}),$(".J-video-bg").click(function(){CKobject.getObjectById("ckplayer_video_main").playOrPause(),$(".J-video-play").removeClass("none"),$(this).addClass("none")}),$(".flexslider").flexslider({animation:"slide",directionNav:!1,controlNav:!0,slideshowSpeed:4e3});var i,c=dndc.getRouteUrl(BASE_API_URL.get_adv_space,[{key:"cityId",value:e.city.id},{key:"spaceId",value:"100"}]);function o(e,s,t,i){$(".survey__block-text1").text(e),$(".survey__block-text2").text(s),t.css("display","none"),i.css("display","block")}CBB.resultfulRequest({url:c,isCheckStatus:!1}).then(function(e){CBB.adSystem(".J-ad-system",e,GLOBAL_VARS.image_oss_host)}),$(".newcar").Switchable({panelCls:".newcar__item",triggerCls:".newcar__icon__span",trigger:"click",activeIndex:0,effect:"fade",autoPlay:!0,interval:3e3,delay:3e3}),$(".survey__block").on("click","li",function(){$(this).addClass("activity-survey").siblings().removeClass("activity-survey")}),$("#J-scroll-top").on("click",function(){CBB.scrollTo()}),layui.use("slider",function(){var s=layui.$;layui.slider.render({elem:"#slideTest",min:0,max:60,theme:"#D9213A",value:40,range:!0,input:!0,change:function(e){s("#test-slider-tips2").html(e[0]+"-"+e[1]+"万")}})}),i=["","",""],$(".survey__block-item").on("click",function(){var e=$(this).find("span").html();i.splice(0,1,e),o("2","购车预算",$(".first-process"),$(".second-process"))}),$(".second-process-button.next").on("click",function(){var e=$("#test-slider-tips2").html();i.splice(1,1,e),o("3","选择座位数",$(".second-process"),$(".third-process"))}),$(".second-process-button.prev").on("click",function(){o("1","选择您最需要的特点",$(".second-process"),$(".first-process"))}),$(".third-process>ul li").on("click",function(){$(this).addClass("active"),$(this).siblings().removeClass("active");var e=$(".third-process>ul .active").html();i.splice(2,1,e),window.location.href=phpData.car_index_url}),$(".third-process-button.prev").on("click",function(){o("2","购车预算",$(".third-process"),$(".second-process"))})});