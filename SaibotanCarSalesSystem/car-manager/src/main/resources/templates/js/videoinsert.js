var a=angular.module("videoinsertmodule",[]);
a.controller("videoinsertcontro",["$scope","$http",function ($scope,$http) {

    $scope.videoname="";
    $scope.videourl="";
    $scope.videocoverurl="";
    $scope.videoinsert=function() {
        $http({
            method: "post",
            params: {videoname: $scope.videoname, videourl: $scope.videourl, videocoverurl: $scope.videocoverurl},
            url: "/insertvideo.do"
        }).success(function (result) {
            if (result.code == 1) {
                layer.alert("<span style='color: red'>恭喜你添加成功</span>");
                //$scope.successmsg="恭喜你添加成功";

            }
        })
    }

}]);