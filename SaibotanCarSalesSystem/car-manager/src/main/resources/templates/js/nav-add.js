var a=angular.module("navadd",[]);

a.controller("navadd_controller",function ($scope,$http) {
        //数组
        $scope.navName="";
        $scope.navUrl="";
        $scope.errormsg="";
        $scope.successmsg="";
      //导航栏遍历方法
      $scope.navadd=function () {


          if ( $scope.navName==""||$scope.navName==null) {
              $scope.successmsg="";
              $scope.errormsg="导航名为空";
          }else if($scope.navUrl==""||$scope.navName==null){
              $scope.successmsg="";
              $scope.errormsg="导航地址为空";
          }else{
              $scope.errormsg="";
              $http({
                  method: "put",
                  params:{navName:$scope.navName,navUrl:$scope.navUrl},
                  url:"/navadd.do"
              }).success(function(result){
                  if (result.code==1){
                      layer.alert("<span style='color: red'>恭喜你添加成功</span>");
                      $scope.successmsg="恭喜你添加成功";

                  }
              });



          }


    }








});







