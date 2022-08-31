var a = angular.module("userupdmodule", []);

a.controller("updcontroller", function ($http, $scope) {
    //$scope.username="";
    $scope.uid = "";
    $scope.uname = "";

    $scope.sex = "";
    $scope.address = "";
    $scope.upd = "";
    $scope.upd2 = "";
    $scope.paypd = "";
    $scope.paypd2 = "";

    $scope.msg = "";

    var uid = window.localStorage.getItem("uid");
    var uname = window.localStorage.getItem("uname");
    //修改成功后重新登陆
    $scope.fun = function () {
        console.log("接受消息" + uid + uname);
        $scope.uid = uid;
        $scope.uname = uname;
    }
    $scope.update = function () {
        var truthBeTold = window.confirm("确定要修改吗？");
        if (truthBeTold) {
            alert('修改用户信息执行了');
            var f = $http.post("http://localhost:8081/userupdate.do?sex=" + $scope.sex + "&address=" + $scope.address + "&password=" + $scope.upd + "&paypassword=" + $scope.paypd + "&id=" + uid);
            f.success(function (result) {
                alert("修改返回数据" + result.code);
                if (result.code == -8) {
                    $scope.msg = result.msg;
                }
                if (result.code == -1) {
                    $scope.msg = result.msg;
                }
                if (result.code == 1) {
                    $scope.msg = result.msg;
                    alert("修改成功，返回重新登陆");
                    window.location.href = "login.html";
                    // location.reload();
                } else {
                    alert('服务器繁忙,等会再试吧');
                }
            });
            f.error(function () {
                alert('网络错误，重新试一下吧');
            });
        } else {
            alert('您已取消修改，即将返回主页');
            window.location.href = "main.html";
        }
    }

    $scope.fun();

});
