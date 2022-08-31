(function (angular) {
    var a = angular.module("pinjia", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("pinjia_Controller", function ($scope, $http, $location) {
        $scope.pinglun = '请输入评价';
        $scope.userid = window.localStorage.getItem("userid");
        $scope.orderid = $location.search().orderid;
        //提交评价
        $scope.pinjiaone = function () {
            var truthBeTold = window.confirm("确定评价吗？");
            if (truthBeTold) {
                var f = $http.get("/order/pinjiaone?orderid=" + $scope.orderid + "&evaluate=" + $scope.pinglun);
                f.success(function (result) {
                    if (result.code == 1) {
                        alert('订单评价成功');
                    } else {
                        alert('服务器繁忙，订单评价失败');
                    }
                });
                f.error(function () {
                    alert('网络不好，订单评价失败');
                })
            }
        }

    })
})(angular)
