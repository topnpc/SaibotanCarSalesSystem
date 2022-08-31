//首页
var a = angular.module("main", []);

a.controller("main_nav_controller", function ($scope, $http) {
    //数组
    $scope.navs = [];
    $scope.banners = [];
    $scope.good_cars = [];
    $scope.video = "";
    $scope.num_cars = [];
    $scope.flag_user = true;
    //
    $scope.username = "";
    $scope.userid = "";
    $scope.sex = "";
    $scope.bannersize = [];

    //导航栏遍历方法
    $scope.fun1 = function () {
        var f = $http.get("http://localhost:8081/listAllMainNav.do");
        f.success(function (result) {
            if (result.code == 1) {
                $scope.navs = result.data;
            }
        });

    }

    //banner图
    $scope.fun2 = function () {
        var f = $http.get("http://localhost:8081/listAllBanner.do");
        f.success(function (result) {
            if (result.code == 1) {
                console.log("轮番图执行了");

                $scope.banners = result.data;
                for (var i = 0; i < $scope.banners.length; i++) {
                    $scope.bannersize.push(i);
                }
            }
        });
    }

    //好车推荐
    $scope.good_cars_method = function () {
        var f = $http.get("http://localhost:8081/List_good_cars.do");
        console.log("好车推荐执行了1")
        f.success(function (result) {
            if (result.code == 1) {
                console.log("好车推荐执行了2")
                $scope.good_cars = result.data;
            }
        });
    }


    //售出最多推荐

    $scope.num = function () {
        var f = $http.get("http://localhost:8081/Num_car.do");
        console.log("好车推荐执行了1")
        f.success(function (result) {
            if (result.code == 1) {
                console.log("好车推荐执行了2")
                $scope.num_cars = result.data;
            }
        });
    }

    //video
    $scope.video_method = function () {
        var f = $http.get("http://localhost:8081/video.do");
        console.log("视频执行了1")
        f.success(function (result) {
            if (result.code == 1) {
                $scope.video = result.data;
            }
        });
    }
    //判断用户是否登录
    //flag
    $scope.flagm = function () {
        $scope.username = window.localStorage.getItem("username");
        $scope.userid = window.localStorage.getItem("userid");
        $scope.sex = window.localStorage.getItem("sex");

        if ($scope.userid == null || $scope.userid == "") {
            $scope.flag_user = true;

        } else {
            $scope.flag_user = false;
        }
    }

    //退出
    $scope.logout = function () {
        var truthBeTold = window.confirm("确定要退出吗？");
        if (truthBeTold) {
            console.log("正在退出");
            localStorage.clear();//清除所有键值对
            location.reload();
        }
    }

    //修改用户信息
    $scope.update = function () {
        var id = window.localStorage.getItem("userid");
        var name = window.localStorage.getItem("username");

        console.log(id + "号用户" + name + "跳转到修改页");
        alert(id + "号用户" + name + "跳转到修改页");
        window.localStorage.setItem("uid", id);
        window.localStorage.setItem("uname", name);
        location.href = "userupdate.html";
    }

    //跳转到 汽车类型 查询
    $scope.typecarlist = function (cartype) {
        console.log(cartype + "汽车分类浏览,跳转汽车 类型 。。");
        window.localStorage.setItem("cartype", cartype);//首次跳转，把类型存起来
        window.location.href = "carlist.html";
    }

    //遍历方法在页面自动执行
    //导航栏方法执行
    $scope.fun1();
    //banner图方法执行
    $scope.fun2();
    //好车推荐方法执行
    $scope.good_cars_method();
    //video执行
    $scope.video_method();

    //售出最多推荐执行
    $scope.num();

    $scope.flagm();

    window.localStorage.setItem("orderurl", "findbyuid");
});







