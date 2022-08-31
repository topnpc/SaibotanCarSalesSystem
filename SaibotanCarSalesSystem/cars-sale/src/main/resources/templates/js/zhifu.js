(function (angular) {
    var a = angular.module("zhifu", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("zhifu_Controller", function ($scope, $http, $location) {
        var prepageurl = window.localStorage.getItem("pagepathurl");

        $scope.orderone = '';
        $scope.paypassword = '';

        //多个订单
        $scope.orderItems = [];

        $scope.totalprice = 0;

        $scope.userid = window.localStorage.getItem("userid");

        $scope.user = '';

        //查询用户信息
        $scope.getuser = function () {
            var f = $http.get("http://localhost:8081/user/id?id=" + $scope.userid);
            f.success(function (result) {
                if (result.code == 1) {
                    $scope.user = result.data;
                    console.log('user find ok,name=' + result.data.name);
                }
            });
        }

        //从详情页跳转过来的只有一个订单
        $scope.loadone = function () {
            var prepageurl = window.localStorage.getItem("pagepathurl");
            //如果是从详情页跳转过来的
            if (prepageurl == "/car_detail.html") {
                var orderid = $location.search().orderid;
                console.log('orderid is ' + orderid);
                //通过订单id查询订单
                var f = $http.get("http://localhost:8081/order/id?id=" + orderid);
                f.success(function (result) {
                    if (result.code == 1) {
                        console.log("订单数据查询成功");
                        $scope.orderone = result.data;
                        $scope.orderItems.push($scope.orderone);
                        $scope.totalprice = $scope.orderone.totalprice;
                        //console.log($scope.orderItems[0].user.phone);
                    } else {
                        console.log("服务器繁忙，数据保存失败");
                        alert("服务器繁忙，数据保存失败");
                    }

                });
                f.error(function (result) {
                    alert("网络不好，数据保存失败");
                });
            }
        }


        $scope.loadmore = function () {
            var prepageurl = window.localStorage.getItem("pagepathurl");
            //如果是从购物车跳转过来的
            if (prepageurl == "/shopcar.html") {
                $scope.totalprice = window.localStorage.getItem("price");
            }
        }


        //付款的时候，如果是由详情页过来就只有一个订单
        //如果是从购物车页面过来就有多个订单
        $scope.fukuan = function () {
            alert('开始付款啦');
            //首先判断密码是不是正确
            if ($scope.user.paypassword != $scope.paypassword) {
                alert('密码输入错误');
            } else {
                //余额不足的话，不让它进行支付
                if ($scope.user.money < $scope.totalprice) {
                    alert('账户余额不足啦，赶快进行充值吧');
                    //跳转到充值余额的页面
                } else {
                    var prepageurl = window.localStorage.getItem("pagepathurl");
                    //如果是从详情页跳转过来的
                    if (prepageurl == "/car_detail.html") {
                        var f = $http.get("http://localhost:8081/order/fukaun?id=" + $scope.orderItems[0].id
                            + "&money=" + $scope.orderItems[0].totalprice + "&userid=" + $scope.userid);
                        f.success(function (result) {
                            if (result.code == 1) {
                                alert('订单支付成功');
                                window.location.href = "fukuanok.html?money=" + $scope.totalprice + "&uid="
                                    + $scope.orderItems[0].user.id;
                                console.log("订单支付成功");
                            } else {
                                alert("服务器繁忙，订单付款失败");
                            }

                        });
                        f.error(function (result) {
                            alert("网络不好，订单付款失败");
                        });

                    } else if (prepageurl == "/shopcar.html") {
                        var strid = window.localStorage.getItem("orderids");
                        var ids = [];
                        ids = JSON.parse(strid);
                        //ids = window.localStorage.getItem("orderids");
                        for (var i = 0; i < ids.length; i++) {
                            console.log('id=' + ids[i]);
                        }
                        alert('订单支付成功');
                        window.location.href = "fukuanok.html?money=" + $scope.totalprice + "&uid="
                            + $scope.userid;

                        //alert('功能还在完善中');
                        // $.ajax({
                        //     url:"http://localhost:8081/order/fukaunmore",
                        //     type:"post",
                        //     dateType:'json',
                        //     data:{
                        //         ids:ids,
                        //         userid:$scope.userid
                        //     },
                        //     success:function(res){
                        //         //var objs=eval(res); //解析json对象
                        //         console.log("数据=="+JSON.stringify(objs));
                        //         //console.log("数据=="+objs);
                        //     },
                        //     error:function(err){
                        //         alert("网络连接失败,稍后重试",err);
                        //     }
                        // })
                    }
                }
            }

        }

        $scope.getuser();
        $scope.loadone();
        $scope.loadmore();

    });

})(angular)
