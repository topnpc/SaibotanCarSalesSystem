var a=angular.module("videoupdatemodule",[]);
a.controller("videoupdatecontro",["$scope","$http",function ($scope,$http) {
    $scope.vid="";
    $scope.videoname="";
    $scope.videourl="";
    $scope.videocoverurl="";

    console.log("there is updatemodule");

    $scope.vid=window.localStorage.getItem("item_videoid");
    $scope.videoname=window.localStorage.getItem("item_videoname");
    //$scope.videourl=window.localStorage.getItem("item_videourl");
    //$scope.videocoverurl=window.localStorage.getItem("item_videocoverurl");


    //显示要修改对象的数据
    $scope.showvideo=function () {
        $scope.vid=window.localStorage.getItem("item_videoid");
        $scope.videoname=window.localStorage.getItem("item_videoname");
        //$scope.videourl=window.localStorage.getItem("item_videourl");
        //$scope.videocoverurl=window.localStorage.getItem("item_videocoverurl");
        console.log("there is showvideo");
    }

    $scope.videoupdate=function () {
        layer.confirm('<span style=\'color: red\'>确认修改吗？</span>',function(){
                // if ( $scope.vid=="") {
                //  $scope.successmsg="";
                //  $scope.errormsg="视频ID为空";
                // }else

                // else( $scope.videoname=="") {
                //     $scope.successmsg="";
                //     $scope.errormsg="视频名称为空";
                // }else if($scope.videourl==""){
                //     $scope.successmsg="";
                //     $scope.errormsg="视频地址为空";
                // }else if($scope.videocoverurl==""){
                //     $scope.successmsg="";
                //     $scope.errormsg="封面地址为空";
                // }

                        var vid =$scope.vid;
                        $scope.errormsg = "";
                        console.log("videoupdate id is :"+vid);
                        var formdate=new FormData();
                        var videoname=$scope.videoname;
                        //var videourl=$scope.videourl[0].file[0];
                        var videourl=$("#videourl")[0].files[0];
                        //var videocoverurl=$scope.videocoverurl[0].file[0];
                        var videocoverurl=$("#videocoverurl")[0].files[0];
                        formdate.append("id",vid);
                        formdate.append("videoname",videoname);
                        formdate.append("videourl",videourl);
                        formdate.append("videocoverurl",videocoverurl);
                        $http({
                            method: "post",
                            //params: {id: vid,videoname: $scope.videoname, videourl: $scope.videourl,videocoverurl: $scope.videocoverurl},
                            data:formdate,
                            url: "/updatevideo.do",
                            transformRequest: angular.identity,
                            headers: {'Content-Type':undefined},
                        }).success(function (result) {
                            if (result.code == 1) {
                                layer.alert("<span style='color: red'>恭喜你修改成功</span>");
                                // $scope.successmsg = "";
                                // $scope.successmsg = "恭喜你修改成功";
                            }
                        })
            })
    }

     //add1
     $scope.showvideo();

}]);
