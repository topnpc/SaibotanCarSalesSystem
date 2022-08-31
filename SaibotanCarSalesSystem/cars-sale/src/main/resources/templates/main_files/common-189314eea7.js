"use strict";var application={settings:{getLocationServer:BASE_API_URL.get_city_info,origin:{is_popular:1,regionalism_code:110100,name:"北京",sort_order:0,is_municipality:1,province_id:1,is_capital:1,id:36,is_limited:1,modified_date:1541742184e3,created_date:1541742184e3,alias:"beijing",province_name:"北京"},cookieLocationKey:"appLocation",cookieIsOpenKey:"cityFlag"},getLocation:function(){var i=this.settings,o=jQuery.Deferred(),e=dndc.getCookie(i.cookieLocationKey),t=e&&JSON.parse(e);return CBB.isObject(t)&&t.id?($(".J-city-name").html(t.name),o.resolve({city:t})):dndc.request({url:i.getLocationServer}).then(function(e){$(".J-city-name").html(e.name),dndc.setCookie(i.cookieLocationKey,JSON.stringify(e),{expired:30}),o.resolve({city:e})},function(){$(".J-city-name").html(i.origin.name),o.resolve({city:i.origin})}),o.promise()},getPosition:function(){var e=new BMap.Geolocation,i="appPosition",o=jQuery.Deferred();if(dndc.getCookie(i)){var t=JSON.parse(dndc.getCookie(i));o.resolve(t)}else e.getCurrentPosition(function(e){0===this.getStatus()?(dndc.setCookie(i,JSON.stringify(e),{expired:30}),o.resolve(e),console.log("定位成功",e)):(console.log("定位失败，原因："+this.getStatus()),o.resolve({point:{lng:0,lat:0},address:{city:"北京市"}}))},{enableHighAccuracy:!0});return o.promise()}};!function(n){n.fn.ready=function(e){return n.ready.promise().done(application.getLocation().then(e)),this},!dndc.getCookie(application.settings.cookieIsOpenKey)&&GLOBAL_VARS.enable_location&&application.getPosition().done(function(i){var e=dndc.getCookie(application.settings.cookieLocationKey);if(e&&i.point.lat){var o=JSON.parse(e);if(0!==i.address.city.indexOf(o.name))var t=layer.confirm("重新获取定位信息？",{btn:["确定","取消"]},function(){layer.close(t);var e=BASE_API_URL.get_open_api_domain+"/api/map/parse-address?lat="+i.point.lat+"&lng="+i.point.lng;dndc.request({url:e}).then(function(e){dndc.setCookie("appLocation",JSON.stringify(e),{expired:30}),window.location.reload()})},function(){dndc.setCookie(application.settings.cookieIsOpenKey,1,{expired:30})})}}),n(".city-nav a").click(function(){var e=n(this).text(),i=n(".city-content"),o=i.find("span:contains("+e+")").first().offset().top+i.scrollTop()-i.first().offset().top-11;i.animate({scrollTop:o},500,"swing")}),n(".J-search-city").click(function(){n(".J-header-city").removeClass("active__city-color");var e=n("input[name='search_city_name']").val();if(""===n.trim(e))return!1;var i=n(".city-content"),o=i.find("span:contains("+e+")"),t=o.first().offset().top+i.scrollTop()-i.first().offset().top-11;return o.addClass("active__city-color"),i.animate({scrollTop:t},500,"swing"),!1});var e=dndc.getCookie("isReadPrivacy"),i=n(".header-cookie"),o=i.attr("data-body-id"),t=navigator.userAgent.toLowerCase();e?(n(".set-cookie").remove(),"2"===o?n(document.body).css({"padding-top":"0"}):"0"===o?n(document.body).css({"padding-top":"56px"}):"1"===o&&(n(document.body).css({"padding-top":"70px"}),n(".about-bg").css({top:"60px"}))):(i.prepend('\n                <div class="set-cookie">\n                    <div class="cookie-content">\n                        <p>您好！我们使用 Cookie 来创建尽可能安全、有效的网站。如果您使用此站点，即表示您同意使用 Cookie。新版<a href="https://cms.chebaba.com/show/1588" target="_blank" data-track="click:gtm|cbb_header_privacy_policy">《车巴巴隐私政策》</a>已上线<span class="cookie-btn J-agree" data-track="click:gtm|cbb_header_privacy_agree">我同意</span></p>\n                    </div>\n                </div>\n            '),"2"===o?n(document.body).css({"padding-top":"0"}):"0"===o?n(document.body).css({"padding-top":"104px"}):"1"===o&&(n(document.body).css({"padding-top":"118px"}),n(".about-bg").css({top:"107px"}),n(".dealer-none").css("top","64px"))),n(".J-agree").on("click",function(){0<t.indexOf("safari")?dndc.setCookie("isReadPrivacy","true",{expired:1920}):dndc.setCookie("isReadPrivacy","true",{expired:1440}),n(".set-cookie").slideUp("slow"),"2"===o?n(document.body).css({"padding-top":"0"}):"0"===o?n(document.body).css({"padding-top":"56px"}):"1"===o&&(n(document.body).css({"padding-top":"70px"}),n(".about-bg").css({top:"60px"}),n(".dealer-none").css("top","18px")),setTimeout(function(){n(".set-cookie").remove()},500)});var a=null,c="";function s(){n("#identifyInfoCode").val("");var e=(new Date).getTime();n("#identify_info_code img").attr("src",BASE_API_URL.passport_domain+"/sso/api/sendchartcode?t="+e)}function r(e){e?n("#J-check-info-num").attr("disabled",!0).html("加载中..."):n("#J-check-info-num").attr("disabled",!1).html("获取验证码")}function d(e){e?n("#infoSubmit").attr("disabled",!0).html("提交申请中..."):n("#infoSubmit").attr("disabled",!1).html("提交申请")}function l(e){r(!0);var i={url:BASE_API_URL.passport_domain+"/sso/api/sms/send-with-captcha",type:"post",data:e};CBB.resultfulRequest(i).then(function(e){r(!1),function(e){if(!a){var i=n(".info-font-color");i.show(),n("#J-check-info-num").hide(),a=setInterval(function(){(e-=1)<0?(clearInterval(a),i.hide(),n("#J-check-info-num").show(),r(!1)):i.html(e+"s")},1e3)}}(119)}).fail(function(e){r(!1),s()})}function p(){return{name:n.trim(n("#infoPetName").val()),cellphone:n.trim(n("#infoPhone").val()),captcha:n.trim(n("#identifyInfoCode").val()),verify_code:n.trim(n("#SMSInfoCode").val())}}n(".J-delete-info").on("click",function(){var e=n("#J-user-info__chartcode");n(".J-user-info").addClass("block"),e.attr("src",e.attr("data-src"))}),n(".J-info-close").on("click",function(){n(".J-user-info").removeClass("block")}),n(".updateIdentifyInfoCode").on("click",function(){s()}),n("#J-check-info-num").click(function(){var e=p();if(/^\d{11}$/.test(e.cellphone)&&e.captcha){l({cellphone:e.cellphone,captcha:e.captcha})}else{if(!/^\d{11}$/.test(e.cellphone))return n('input[name="infoPhone"]').focus().addClass("error"),void layer.msg("请填写正确手机号码");if(!e.captcha)return n('input[name="identifyInfoCode"]').focus().addClass("error"),void layer.msg("请填写正确图形验证码")}}),n(".J-info__type-list li").on("click",function(){n(this).toggleClass("active");var e=[];n(".J-info__type-list li").each(function(){n(this).hasClass("active")&&(e=e.concat(n(this).attr("data-id")))}),c=e.sort().join(",")});var f=n("#J-userinfo-form").validate({rules:{infoPetName:{required:!0,maxlength:10},infoPhone:{required:!0,number:!0,minlength:11},sms_info_captcha:{required:!0,minlength:4,maxlength:4}},messages:{infoPetName:{required:'<i class="iconfont">&#xe696;</i>请输入昵称',maxlength:'<i class="iconfont">&#xe696;</i>申请人姓名不超过10'},infoPhone:{required:'<i class="iconfont">&#xe696;</i>请输入正确的手机号',number:'<i class="iconfont">&#xe696;</i>请输入正确的手机号',minlength:'<i class="iconfont">&#xe696;</i>请输入正确的手机号'},sms_info_captcha:{required:'<i class="iconfont">&#xe696;</i>请输入四位短信动态码',minlength:'<i class="iconfont">&#xe696;</i>请输入四位短信动态码',maxlength:'<i class="iconfont">&#xe696;</i>请输入四位短信动态码'}},errorPlacement:function(e,i){e.appendTo(i.parents(".info-input").find(".error-tips-content"))},submitHandler:function(e){if(c){d(!0);var i=p(),o={url:BASE_API_URL.passport_domain+"/sso/api/account/submit-close",type:"post",data:{cellphone:i.cellphone,name:i.name,verify_code:i.verify_code,clue_history_type:c}};CBB.resultfulRequest(o).then(function(e){layer.msg(e.message),setTimeout(function(){d(!1),n(".J-user-info").removeClass("block"),n("#infoPetName").val(""),n("#infoPhone").val(""),n("#identifyInfoCode").val(""),n("#SMSInfoCode").val(""),n(".J-info__type-list li").removeClass("active")},1500)}).fail(function(e){layer.msg(e.responseJSON.message),d(!1)})}else layer.msg("请至少选择一项留资历史")},onkeyup:!1});n("#infoSubmit").click(function(){f.form()})}(jQuery);