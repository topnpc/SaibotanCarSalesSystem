(function (angular) {
    'use strict';

    //创建首页banner模块
    var module = angular.module('banner',[]);

    //创建控制器
    module.controller('BannerController',[
        '$scope',
        '$http',
        '$location',
        function ($scope,$http,$location) {
            $scope.bannes =[];
            $scope.bannerName='';
            $scope.load = function () {
                var p = $http({
                    method: 'GET',
                    url: '/banner/list.do'
                });
                p.success(function(result){
                   if(result.code == 1){
                       console.log('轮番图查询成功');
                       $scope.bannes = result.data;
                   }

                });

            };
            $scope.load();

            $scope.search = function(bannerName){
                console.log('正在搜索图片名'+bannerName);
                if(bannerName=='' || bannerName==null){
                    window.alert('不输入，默认显示全部数据');
                    $scope.load();
                }
                var p = $http({
                    method: 'GET',
                    url: '/banner/findByName.do?bannerName='+bannerName
                });
                p.success(function(result){
                    if(result.code == 1){
                        console.log('通过Name查询成功');
                        $scope.bannes = result.data;
                    }

                });
            }

            /*图片-删除*/
            $scope.picture_del = function (obj,id){
                console.log('正在请求删除banner,id为'+id);
                layer.confirm('确认要删除吗？',function(index){
                    $.ajax({
                        type: 'POST',
                        url: '/banner/id/del.do?bannerId='+id,
                        dataType: 'json',
                        success: function(data){
                            if(data.code==1){
                                $(obj).parents("tr").remove();
                                layer.msg('已删除!',{icon:1,time:1000});
                                $scope.load();
                            }

                        },
                        error:function(data) {
                            console.log(data.msg);
                        },
                    });
                });
            }

            /*图片-添加*/
            $scope.banner_add = function (title,url){
                var index = layer.open({
                    type: 2,
                    title: title,
                    content: url
                });
                layer.full(index);
            }

            /*图片-编辑*/
            $scope.picture_edit = function (title,url,id){
                window.localStorage.setItem("bannerId",id);
                var index = layer.open({
                    type: 2,
                    title: title,
                    content: url
                });
                layer.full(index);
            }


        }
    ])
})(angular)
