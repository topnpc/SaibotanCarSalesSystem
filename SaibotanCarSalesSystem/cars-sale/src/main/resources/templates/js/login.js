var a = angular.module("login", []);

a.controller("userlogin", function ($scope, $http) {
    $scope.username = "";
    $scope.userpass = "";
    $scope.msg = "";
    $scope.login = function (data) {
        if ($scope.username == "" || $scope.username == null) {
            $scope.msg = "用户名为空";
        } else if ($scope.userpass == "" || $scope.userpass == null) {
            $scope.msg = "密码为空";
        } else {
            var f = $http.post("/login.do?username=" + $scope.username + "&userpass=" + $scope.userpass);
            f.success(function (result) {
                if (result.code == -1) {
                    $scope.msg = result.msg;
                } else if (result.code == -2) {
                    $scope.msg = result.msg;
                } else if (result.code == -3) {
                    $scope.msg = result.msg;
                } else if (result.code == -4) {
                    $scope.msg = result.msg;
                } else if (result.code == 1) {

                    window.localStorage.setItem("userid", result.data.id);
                    window.localStorage.setItem("username", result.data.name);
                    window.localStorage.setItem("sex", result.data.sex);
                    window.localStorage.setItem("vip", result.data.vip);

                    // alert("登录成功，正在跳转……");
                    window.location.href = "main.html";
                }

            });
        }


    }


});
