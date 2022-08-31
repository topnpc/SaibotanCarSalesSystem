(function (angular) {
    var a = angular.module("fukuanok", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("fukuanok_Controller", function ($scope, $http, $location) {
        $scope.user = '';
        $scope.money = 0;
        $scope.load = function () {
            var uid = $location.search().uid;
            $scope.money = $location.search().money;
            $scope.getuser(uid);
        }

        $scope.getuser = function (uid) {
            console.log('uid' + uid);
            var f = $http.get("http://localhost:8081/user/id?id=" + uid);
            f.success(function (result) {
                if (result.code == 1) {
                    $scope.user = result.data;
                    console.log('user find ok,name=' + result.data.name);
                }
            });
        }

        $scope.load();

    });


})(angular)
