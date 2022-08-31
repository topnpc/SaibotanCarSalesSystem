var a = angular.module("carlistmodule", []);
a.controller("carlistcontroller", function ($scope, $http) {
    $scope.navs = [];
    $scope.carbytypes = [];
    $scope.cartype = window.localStorage.getItem("cartype");//首次跳转，取出的值,仅在本js文件使用

    $scope.flag_user = true;
    //导航栏遍历方法
    $scope.fun1 = function () {
        var f = $http.get("http://localhost:8081/listAllMainNav.do");
        f.success(function (result) {
            if (result.code == 1) {
                console.log("navs执行了");
                $scope.navs = result.data;
                console.log('nav1=' + $scope.navs[0].navName);
            }
        });

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

    //汽车分类浏览
    $scope.getCarsbytype = function (cartype) {
        console.log(cartype + "汽车分类跳转浏览");
        var f = $http.get("http://localhost:8081/listcarsbytype.do?cartype=" + cartype);
        f.success(function (result) {
            console.log("汽车分类浏览,result=" + result);
            if (result.code == 1) {
                $scope.carbytypes = result.data;
            } else {
                alert('返回码错误，重新试一下吧');
            }
        });
        f.error(function () {
            alert('跳转错误，重新试一下吧');
        });
    }

    //点击事件，根据接收参数nextcartype跳到下一个汽车分类浏览
    $scope.typecarlist = function (nextcartype) {
        window.localStorage.setItem("cartype", nextcartype);
        window.location.href = "carlist.html";
    }

    $scope.buy = function (carurl) {
        window.open('http://localhost:8081/' + carurl);
    }

    $scope.flagm();
    $scope.fun1();
    $scope.getCarsbytype($scope.cartype);


});
