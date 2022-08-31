var a = angular.module("detail", []);
a.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

a.controller("detail_controller", function ($scope, $http, $location) {
    //数组
    $scope.navs = [];

    $scope.flag_user = true;
    $scope.username = "";
    $scope.userid = "";
    $scope.sex = "";
    $scope.car = "";
    $scope.hrefid = "";

    //已经购买的
    $scope.hasbuynum = 0;
    //此车型库存量
    $scope.collect_number = 0;
    //通过地址栏查询的汽车id
    $scope.carid = $location.search().id;
    //查询出的订单
    $scope.orderitems = [];

    //导航栏遍历方法
    $scope.fun1 = function () {
        var f = $http.get("http://localhost:8081/listAllMainNav.do");
        f.success(function (result) {
            if (result.code == 1) {
                console.log("aaaaaaaaaa")
                $scope.navs = result.data;
            }
        });

    }

    /**
     *显示详情页信息
     */
    $scope.cardetail = function () {
        var f = $http.get("http://localhost:8081/carid.do?id=" + $scope.carid);
        f.success(function (result) {
            if (result.code == 1) {
                $scope.car = result.data;
                //查询此车型的库存数量
                $scope.collect_number = result.data.collect_number;
                console.log('this car collect_num is ' + $scope.collect_number);
            }
        });
    }
    //判断用户是否登录
    //flag
    $scope.flagm = function () {
        $scope.username = window.localStorage.getItem("username");
        $scope.userid = window.localStorage.getItem("userid");
        $scope.sex = window.localStorage.getItem("sex");
        console.log("username=" + $scope.username + ",userid=" + $scope.userid + "sex=" + $scope.sex)
        if ($scope.userid == null || $scope.userid == "") {
            $scope.flag_user = true;

        } else {
            $scope.flag_user = false;

        }

    }

    //点击加入购物车
    $scope.jiagou = function () {
        if (!$scope.flag_user) {
            //执行加购逻辑
            var f = $http.get("/shopcar/add?uid=" + $scope.userid + "&carid=" + $scope.carid +
                "&carnum=1&totalprice=" + $scope.car.price);
            console.log('find has bought car num ,uid=' + $scope.userid + ',carid=' + $scope.carid);
            f.success(function (result) {
                if (result.code == 1) {
                    console.log('this car has add shopcar');
                    alert("加购成功，请到我的购物车查看");
                } else {
                    console.log("服务器繁忙,加购失败");
                }
            });
            f.error(function (result) {
                console.log('网络繁忙，加购失败');
            });
        } else {
            window.alert("请登录后加购");
            window.open("/login.html", "_blank");
        }
    }

    //在点击购买的判断是否，超出限购范围，超出了，在这里就进行提示，不让它点击
    $scope.goumai = function () {
        //先判断用户是否存在，不存在就不执行逻辑了
        if (!$scope.flag_user) {
            //判断库存是否还有数量
            if ($scope.collect_number <= 0) {
                alert('库存数量不足啦,我们会尽快上线,您先看看其他车型吧');
            } else {
                window.localStorage.setItem("pagepathurl", $location.path());
                window.open("/xiadan.html?uid=" + $scope.userid + "&carid=" + $scope.carid, "_blank");
            }
        } else {
            window.alert("请登录后购买");
            // window.location.href="/login.html"; 在当前窗口打开
            window.open("/login.html", "_blank");//新打开窗口
        }
    }


    //导航栏方法执行
    $scope.fun1();
    $scope.cardetail();
    $scope.flagm();


});



