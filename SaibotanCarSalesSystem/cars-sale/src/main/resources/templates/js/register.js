var a = angular.module("register", [])
a.controller("useregister", function ($scope, $http) {
    $scope.username = "";
    $scope.userpass = "";
    $scope.userpass2 = ""; //确认密码
    $scope.msg = "";
    $scope.register = function (data) {
        if ($scope.username == null) {
            $scope.msg = "用户名不能为空";
        } else if ($scope.userpass == null) {
            $scope.msg = "密码不能为空";
        } else {
            if ($scope.userpass == $scope.userpass2) {
                var f = $http.post("register.do?username=" + $scope.username + "&userpass=" + $scope.userpass);
                f.success(function (result) {
                    if (result.code == -1) {
                        $scope.msg = result.msg;
                    }

                    if (result.code == -2) {
                        $scope.msg = result.msg;
                    }
                    if (result.code == -5) {
                        $scope.msg = result.msg;
                    }

                    if (result.code == 1) {
                        // $scope.msg=result.msg;


                        window.location.href = "login.html";
                    }
                });
            } else {
                $scope.msg = "两次密码不一致";
            }
        }


    }


});