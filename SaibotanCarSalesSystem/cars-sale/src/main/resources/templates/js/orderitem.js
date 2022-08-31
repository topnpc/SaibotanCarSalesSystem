(function (angular) {
    var a = angular.module("order", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("order_Controller", function ($scope, $http, $location) {
        $scope.orderitems = [];
        $scope.userid = window.localStorage.getItem("userid");

        $scope.carnameall = '';//用于全局搜索用的
        $scope.carname = '';//用于搜索订单用的

        $scope.totalPages = 0;
        $scope.currentPage = $location.search().pageNum;
        //用户没有登录，就不让跳到这个页

        $scope.status = $location.search().status;

        $scope.allorder = false;//所有订单
        $scope.fukuan = false;
        $scope.fahuo = false;
        $scope.shouhuo = false;
        $scope.pinjia = false;

        //确认收货逻辑 修改订单表状态 传订单id过来
        $scope.shouhuoone = function () {

        }


        //查询所有订单,带分页的
        $scope.loadByuid = function (pageNum) {
            var f = $http.get("/order/uid/page?pageNum=" + pageNum + "&userid=" + $scope.userid);
            f.success(function (result) {
                if (result.code == 1) {
                    $scope.orderitems = result.data;
                    $scope.totalPages = result.totalPages;
                    $scope.currentPage = result.currentPage;
                }
            });
            f.error(function () {
                alert('网络不好，数据查询失败');
            })
        }

        //取消订单 href="/order/quxiaoone?orderid={{orderitem.id}}"
        $scope.quxiaoone = function (orderid) {
            console.log('orderid = ' + orderid);
            var truthBeTold = window.confirm("确定要取消吗？");
            if (truthBeTold) {
                var f = $http.get("/order/quxiaoone?orderid=" + orderid);
                f.success(function (result) {
                    if (result.code == 1) {
                        alert('取消订单成功');
                    } else {
                        alert('服务器繁忙，取消订单失败');
                    }
                });
                f.error(function () {
                    alert('网络不好，取消订单失败');
                })
                $scope.go($scope.currentPage);
            }
        }


        $scope.tuikuan = function (orderid) {
            //执行退款逻辑
            console.log('orderid = ' + orderid);
            var truthBeTold = window.confirm("确定要申请退款吗？");
            if (truthBeTold) {
                var f = $http.get("/order/tuikuanone?orderid=" + orderid);
                f.success(function (result) {
                    if (result.code == 1) {
                        alert('订单退款申请成功，商家正在处理');
                    } else {
                        alert('服务器繁忙，订单退款申请失败');
                    }
                });
                f.error(function () {
                    alert('网络不好，订单退款申请失败');
                })
                $scope.go($scope.currentPage);
            }

        }

        //收货
        $scope.shouhuo = function (orderid) {
            console.log('orderid = ' + orderid);
            var truthBeTold = window.confirm("确定收货吗？");
            if (truthBeTold) {
                var f = $http.get("/order/shouhuoone?orderid=" + orderid);
                f.success(function (result) {
                    if (result.code == 1) {
                        alert('订单收货成功');
                    } else {
                        alert('服务器繁忙，订单收货失败');
                    }
                });
                f.error(function () {
                    alert('网络不好，订单收货申请失败');
                })
                $scope.go($scope.currentPage);
            }
        }

        //退货
        $scope.tuihuo = function (orderid) {
            console.log('orderid = ' + orderid);
            var truthBeTold = window.confirm("确定申请退货吗？");
            if (truthBeTold) {
                var f = $http.get("/order/tuihuoone?orderid=" + orderid);
                f.success(function (result) {
                    if (result.code == 1) {
                        alert('订单申请退货成功');
                    } else {
                        alert('服务器繁忙，订单申请退货失败');
                    }
                });
                f.error(function () {
                    alert('网络不好，订单申请退货失败');
                })
                $scope.go($scope.currentPage);
            }
        }


        //根据订单状态查询订单，带分页的
        $scope.loadbystatus = function (pageNum, status) {
            console.log('即将查询状态为' + status + '的订单');
            var f = $http.get("/order/status/page?pageNum=" + pageNum + "&status=" + status + "&userid=" + $scope.userid);
            f.success(function (result) {
                if (result.code == 1) {
                    $scope.orderitems = result.data;
                    $scope.totalPages = result.totalPages;
                    $scope.currentPage = result.currentPage;
                }
            });
            f.error(function () {
                alert('网络不好，数据查询失败');
            })
        }


        //页面刷新
        $scope.refreshzi2 = function (pageNum, status) {
            window.localStorage.setItem("orderurl", "findbystatus");
            window.location.href = "http://localhost:8081/orderlist.html?pageNum=" + pageNum +
                "&status=" + status;
        }


        //页面刷新
        $scope.refreshzi = function (pageNum) {
            window.localStorage.setItem("orderurl", "findbyuid");
            window.location.href = "http://localhost:8081/orderlist.html?pageNum=" + pageNum;
        }

        //页面加载
        $scope.load = function () {
            var orderurl = window.localStorage.getItem("orderurl");
            console.log('orderurl=' + orderurl);
            if (orderurl == "findbyuid") {
                //执行根据id page 查询数据的逻辑
                var pageNum = $location.search().pageNum;
                $scope.currentPage = pageNum;
                $scope.allorder = true;
                $scope.loadByuid(pageNum);
            } else if (orderurl == "findbystatus") {
                var pageNum2 = $location.search().pageNum;
                var status2 = $location.search().status;
                $scope.currentPage = pageNum2;
                $scope.status = status2;
                console.log('load status is ' + $scope.status);
                if ($scope.status.toString() == "待付款") {
                    $scope.fukuan = true;
                }
                if ($scope.status.toString() == "待发货") {
                    $scope.fahuo = true;
                }
                if ($scope.status.toString() == "待收货") {
                    $scope.shouhuo = true;
                }
                if ($scope.status.toString() == "待评价") {
                    $scope.pinjia = true;
                }
                $scope.loadbystatus(pageNum2, status2);
            }
        }

        // 暴露一个上一页下一页的行为
        $scope.go = function (page) {
            console.log('page=' + page);
            if (page >= 1 && page <= $scope.totalPages) {
                var orderurl = window.localStorage.getItem("orderurl");
                if (orderurl == "findbyuid") {
                    $scope.refreshzi(page);
                } else if (orderurl == "findbystatus") {
                    $scope.refreshzi2(page, $scope.status);
                }
            }
        }

        $scope.shouhuoall = function () {
            alert('批量确认收货');
        }

        //根据商品名称，模糊查找订单
        $scope.loadBycarname = function (uid) {
            alert("根据汽车名称模糊查询订单,只能查询用户下过单的");
        }

        $scope.loadBycarname = function () {
            alert("根据汽车名称模糊查询订单");
        }

        $scope.load();

    })

})(angular)

