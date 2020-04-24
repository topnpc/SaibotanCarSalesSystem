(function (angular) {
    var a = angular.module("order", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("order_Controller", function ($scope, $http, $location) {
        //所有订单里边只有查询
        //订单发货，是查询订单表状态为 已付款 的订单
        //订单退货，是查询订单状态为 待退货 的订单
        //订单退款， 是查询订单状态为 待退款 的订单
        //订单关闭 是当订单状态 为 退货成功 退款成功 收货成功 才能关闭订单
        $scope.status= [
            {typename:'待付款'},
            {typename:'待发货'},
            {typename:'待收货'},
            {typename:'待评价'},
            {typename:'待退款'},
            {typename:'待退货退款'},
            {typename:'已退款'},
            {typename:'已退货退款'},
            {typename:'已评价'},
            {typename:'已取消'},
            {typename:'已结束'},
        ];

        $scope.currentStatus = '所有订单';

        //默认把所有订单查出来

        $scope.orderitems = [];//全部数据

        $scope.suborders = [];//分页数据

        $scope.searchname ='';

        $scope.totalPages =0;
        $scope.currentPage =1;
        $scope.totalCount = 0;
        $scope.pagesize=3;//一页显示3条

        $scope.begintime = '2019-11-09 00:00:00';
        $scope.endtime = '2019-11-09 23:59:59';

        $scope.selectOrderByStatus = function (status) {
            $scope.currentStatus=status;
            console.log('currentstatus='+$scope.currentStatus);
            var f = $http.get("/order/status?status="+status);
            f.success(function (result) {
                if (result.code==1){
                    $scope.orderitems=result.data;
                    $scope.countPage();
                    $scope.suborders = $scope.pagination(1,$scope.pagesize,$scope.orderitems);
                    console.log('orders find by status ok');
                }
            });
            f.error(function () {
                alert('网络不好，数据查询失败');
            })
        }

        $scope.findall = function(){
            $scope.currentStatus = '所有订单';
            var f = $http.get("/order/findall");
            f.success(function (result) {
                if (result.code==1){
                    $scope.orderitems=result.data;
                    $scope.countPage();
                    $scope.suborders = $scope.pagination(1,$scope.pagesize,$scope.orderitems);
                    console.log('orders find all ok');
                }
            });
            f.error(function () {
                alert('网络不好，数据查询失败');
            })
        }

        //根据时间段查询订单
        $scope.selectByTime = function () {
            $scope.currentStatus = '所有订单';
            var flag = 1;
            if($scope.begintime.length>9 && $scope.begintime.length<19){$scope.begintime = $scope.begintime+" 00:00:00";}
            if($scope.endtime.length>9 && $scope.endtime.length<19){$scope.endtime =$scope.endtime+" 23:59:59";}
            if($scope.begintime.length<9 || $scope.begintime.length>19){flag=-1;}
            if($scope.endtime.length<9 || $scope.endtime.length>19){flag=-1;}
            if(flag!=1){
                alert("输入时间格式错误");
            }else{
                alert('根据时间查询订单，开始时间='+$scope.begintime+'，结束时间='+$scope.endtime);
                var f = $http.get("/order/time?begintime="+$scope.begintime+"&endtime="+$scope.endtime);
                f.success(function (result) {
                    if(result.code==1){
                        $scope.orderitems=result.data;
                        $scope.countPage();
                        $scope.suborders = $scope.pagination(1,$scope.pagesize,$scope.orderitems);
                        console.log('orders find by time ok');
                    }
                })
                f.error(function (result) {
                    console.log("错误");
                })
            }
        }

        //用于分页
        $scope.pagination=function(pageNo, pageSize, array) {
            var offset = (pageNo - 1) * pageSize;
            return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
        }

        //用于计算当前页 总页数 总个数
        $scope.countPage = function(){
            $scope.totalCount = $scope.orderitems.length;
            if($scope.totalCount%$scope.pagesize==0){
                $scope.totalPages = $scope.totalCount/$scope.pagesize;
            }else{
                $scope.totalPages = $scope.totalCount/$scope.pagesize + 1;
            }
        }


        $scope.orderdel = function () {
            layer.confirm('确认要清除已结束订单吗',function(index){
                var f = $http.get("/order/delallfinal");
                f.success(function (result) {
                    if(result.code==1){
                        layer.alert("<span style='color: green'>恭喜你清除成功</span>");
                        $scope.findall();
                    }else{
                        layer.alert("<span style='color: red'>清除失败，请稍后再试</span>");
                    }
                })
                f.error(function (result) {
                    layer.alert("<span style='color: red'>清除失败，请稍后再试</span>");
                })
            })
        }



        /**
         * 刷新
         */
        $scope.navrefresh1=function () {
            $scope.findall();
        }


        /*产品-编辑*/
        //这一页的修改,只有在待发货，待付款状态下可以修改商品信息，物流信息..
        $scope.order_edit=function(title,url,orderid,inde){
            if($scope.suborders[inde].status == '待付款' || $scope.suborders[inde].status =='待发货'){
                alert('跳转编辑页');
                window.localStorage.setItem("orderid",orderid);
                var index = layer.open({
                    type: 2,
                    title: title,
                    content: url
                });
                layer.full(index);
            }else{
                alert('只有待付款 和 待发货 的订单才可以修改');
            }
        }

        $scope.order_del=function (ind,obj,orderid) {
            //一般不让执行，只有订单完成才能删除
            console.log('index='+ind);
            console.log("finaltime="+$scope.suborders[ind].finaltime);
            console.log('closetime='+$scope.suborders[ind].closetime!=null);
            if($scope.suborders[ind].status=="已结束" && $scope.suborders[ind].finaltime!=null && $scope.suborders[ind].closetime!=null){
                layer.confirm('确认要删除吗？',function(index){
                    $.ajax({
                        type: 'get',
                        url: '/order/del?id='+orderid,
                        dataType: 'json',
                        success: function(data){
                            if(data.code==1){
                                $(obj).parents("tr").remove();
                                layer.msg(data.msg,{icon:1,time:1000});
                                layer.alert("<span style='color: green'>恭喜你删除成功</span>");
                                $scope.findall();
                            }else{
                                layer.alert("<span style='color: red'>删除失败,请稍后再试</span>");
                            }
                        },
                        error:function(data) {
                            layer.alert("<span style='color: red'>删除失败,请稍后再试</span>");
                        },
                    });
                });
            }else{
                alert('订单还没结束呢，还不可以删除哟');
            }
        }

        // 暴露一个上一页下一页的行为
        $scope.go = function (page) {
            if (page >= 1 && page <= $scope.totalPages){
                 $scope.currentPage = page;
                 $scope.suborders = $scope.pagination(page,$scope.pagesize,$scope.orderitems);
            }
                //$location.search({pageNum:page});//修改get请求里参数的值
        }


        //默认显示待发货的订单
       // $scope.selectOrderByStatus('待发货');

        //默认显示全部订单
        $scope.findall();

    });
})(angular)
