var a=angular.module("navupdate",[]);

a.controller("navupdate_controller",function ($scope,$http) {
        //数组
        $scope.navName="";
        $scope.navUrl="";


        $scope.errormsg="";
        $scope.successmsg="";
      //导航栏遍历方法
        $scope.showupdatenav=function(){
            $scope.navName=window.localStorage.getItem("nav_edit_navName");
            $scope.navUrl=window.localStorage.getItem("nav_edit_navUrl");
        }

       $scope.navupdate=function () {
           layer.confirm('<span style=\'color: red\'>确认修改吗？</span>',function(){
               if ( $scope.navName=="") {
                   $scope.successmsg="";
                   $scope.errormsg="导航名为空";
               }else if($scope.navUrl==""){
                   $scope.successmsg="";
                   $scope.errormsg="导航地址为空";
               }else if($scope.id==""){
                   $scope.successmsg="";
                   $scope.errormsg="导航地址为空";
               }else{
                   var id=window.localStorage.getItem("nav_edit_id");

                   $scope.errormsg="";

                   $http({
                       method: "post",
                       params:{navName:$scope.navName,navUrl:$scope.navUrl,id:id},
                       url:"/navupdate.do"
                   }).success(function(result){
                       if (result.code==1){
                           layer.alert("<span style='color: red'>恭喜你修改成功</span>");
                           $scope.successmsg="";
                           $scope.successmsg="恭喜你修改成功";
                       }
                   });



               }
           });



    }  //方法1



    $scope.showupdatenav();








});







