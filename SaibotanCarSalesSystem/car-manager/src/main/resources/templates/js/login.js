var a=angular.module("loginpage",[]);

a.controller("userlogin",['$scope','$http',function ($scope,$http) {
    // $scope.user={
    //     name:"",
    //     pass:"",
    //     msg:""
    // }

    $scope.username="";
    $scope.password="";
    $scope.msg="";


    $scope.login=function () {
        // if ($scope.user.name==""||$scope.user.name==null){
        //     $scope.msg="用户名为空";
        //     console.log($scope.msg);
        // }
        // if ($scope.user.pass=""||$scope.user.pass==null){
        //     $scope.msg="密码为空";
        //     console.log("2");
        // }
        // else {

        $http({
            method: "post",
            params:{username:$scope.username,password:$scope.password},
            url:"/login.do"
        }).success(function(result){
            if(result.code==-1){
                $scope.msg=result.msg;
                console.log($scope.msg);
            }else if (result.code==-2){
                $scope.msg=result.msg;
                console.log($scope.msg);
            } else if (result.code==-3){
                $scope.msg=result.msg;
                console.log($scope.msg);
            }else if (result.code==-4){
                console.log($scope.msg);
                $scope.msg=result.msg;
            }else if (result.code==1){

                console.log($scope.msg);
                alert("登录成功，正在跳转……");
                window.location.href="index.html";
            }
        });

    }
}])


