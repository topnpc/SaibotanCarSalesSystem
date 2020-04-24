(function (angular) {
    var a = angular.module("orderupdate", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("orderupContro", function ($scope, $http, $location) {
        $scope.orderid = window.localStorage.getItem("orderid");
        $scope.orderitem = '';

        //修改订单,因为这里不好使用数据绑定ng-bind不起作用
        //商家可以帮用户修改 商品 收货地址 电话 收货人 数量 总价
        $scope.ordermodf = function () {
           var carid = $("#carid").val();
           var carnum = $("#carnum").val();
           var totalprice = $("#totalprice").val();
            var shouhuoren= $("#shouhuoren").val();
            var shouhuophone= $("#shouhuophone").val();
            var shouhuodizi= $("#shouhuodizi").val();
            var wuliuname= $("#wuliuname").val();
            var wuliu= $("#wuliu").val();

            console.log('carid='+carid+",carnum="+carnum+",totalprice="+totalprice
            +",shouhuoren="+shouhuoren+",shouhuophone="+shouhuophone+"," +
                "shouhuodizi="+shouhuodizi+",wuliuname"+wuliuname+",wuliu="+wuliu
            +",id="+$scope.orderitem.id);
            var truthBeTold = window.confirm("确定要修改吗？");
            if (truthBeTold) {
                alert('订单修改执行了');
                var f = $http({
                    method: "post",
                    params:{carid:carid,carnum:carnum,totalprice:totalprice,
                        shouhuoren:shouhuoren,shouhuophone:shouhuophone,
                        shouhuodizi:shouhuodizi,wuliuname:wuliuname,
                        wuliu:wuliu,id:$scope.orderitem.id},
                    url:"/order/modify"
                })
                f.success(function(result){
                    if (result.code==1){
                        layer.alert("<span style='color: green'>恭喜你修改成功，刷新下看看吧</span>");
                        $scope.layer_close2();
                    }else{
                        layer.alert("<span style='color: red'>服务器繁忙，请稍后再试</span>");
                    }
                });
                f.error(function (result) {
                    alert('网络不好，请稍后再试');
                })
            }
        }

        //信息初始化
        $scope.load = function () {
            var f = $http.get("/order/id?id="+$scope.orderid);
            f.success(function (result) {
                if(result.code==1){
                    $scope.orderitem=result.data;
                    console.log('order find by id ok');
                }else{
                    console.log('服务器繁忙，请稍后重试');
                }
            })
            f.error(function (result) {
                console.log("网络错误，请稍后重试");
            })
        }


        /*关闭弹出框口*/
        $scope.layer_close2 = function(){
            var index = parent.layer.getFrameIndex(window.name);
            parent.layer.close(index);
        }

        $scope.load();
    });
})(angular)

