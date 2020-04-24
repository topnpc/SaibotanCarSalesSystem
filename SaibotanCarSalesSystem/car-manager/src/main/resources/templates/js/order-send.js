(function (angular) {
    var a = angular.module("ordersend", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("orderSendCon", function ($scope, $http, $location) {
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
            {typename:'已结束'},
        ];

        $scope.orderitems = [];//全部数据

        $scope.suborders = [];//分页数据

        $scope.searchname ='';

        $scope.totalPages =0;
        $scope.currentPage =1;
        $scope.totalCount = 0;
        $scope.pagesize=3;//一页显示3条

        $scope.begintime = '2019-11-09 00:00:00';
        $scope.endtime = '2019-11-09 23:59:59';

        $scope.state='待发货';
        $scope.fuhu = '待收货';

        //发货之前判断一下状态为待发货 且 收货人 收货电话 收货地址不为空
        $scope.fahuoone = function(ind,obj,orderid){
            //发货逻辑
            alert('执行发货逻辑');
            var flag = true;
            if($scope.suborders[ind].shouhuoren==null || $scope.suborders[ind].shouhuophone==null
            || $scope.suborders[ind].shouhuodizi==null ){
                flag = false;
                alert("用户收货信息还没有完善呢，还不能发货哟");

            }
            if($scope.suborders[ind].wuliuname == null || $scope.suborders[ind].wuliu==null){
                flag = false;
                alert("快递信息还没录入呢，还不能发货");
            }
            if(flag){
                layer.confirm('确认要发货吗？',function(index){
                    $.ajax({
                        type: 'get',
                        url: "/order/fahuoone?status="+$scope.fuhu+"&id="+orderid,
                        dataType: 'json',
                        success: function(data){
                            if(data.code==1){
                                $(obj).parents("tr").remove();
                                layer.msg(data.msg,{icon:1,time:1000});
                                layer.alert("<span style='color: green'>发货成功</span>");
                                $scope.selectOrderByStatus('待发货');
                            }else{
                                layer.alert("<span style='color: red'>发货失败,请稍后再试</span>");
                            }
                        },
                        error:function(data) {
                            layer.alert("<span style='color: red'>发货失败,请稍后再试</span>");
                        },
                    });
                });
            }
        }

        $scope.selectOrderByStatus = function (status) {
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

        //根据时间段查询订单
        $scope.selectByTime = function () {
            var flag = 1;
            if($scope.begintime.length>9 && $scope.begintime.length<19){$scope.begintime = $scope.begintime+" 00:00:00";}
            if($scope.endtime.length>9 && $scope.endtime.length<19){$scope.endtime =$scope.endtime+" 23:59:59";}
            if($scope.begintime.length<9 || $scope.begintime.length>19){flag=-1;}
            if($scope.endtime.length<9 || $scope.endtime.length>19){flag=-1;}
            if(flag!=1){
                alert("输入时间格式错误");
            }else{
                alert('根据时间查询订单，开始时间='+$scope.begintime+'，结束时间='+$scope.endtime);
                var f = $http.get("/order/time/status?status="+ $scope.state+"&begintime="+$scope.begintime+"&endtime="+$scope.endtime);
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


        $scope.fahuoall = function () {
            layer.confirm('确认要一键发货吗',function(index){
                var f = $http.get("/order/fahuoall");
                f.success(function (result) {
                    if(result.code==1){
                        layer.alert("<span style='color: green'>恭喜你清除成功</span>");
                        $scope.selectOrderByStatus('待发货');
                    }else{
                        layer.alert("<span style='color: red'>清除失败，请稍后再试</span>");
                    }
                })
                f.error(function (result) {
                    layer.alert("<span style='color: red'>清除失败，请稍后再试</span>");
                })
                $scope.selectOrderByStatus('待发货');
            })
        }

        /**
         * 刷新
         */
        $scope.navrefresh1=function () {
            $scope.selectOrderByStatus('待发货');
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
        $scope.selectOrderByStatus('待发货');

    });
})(angular)
