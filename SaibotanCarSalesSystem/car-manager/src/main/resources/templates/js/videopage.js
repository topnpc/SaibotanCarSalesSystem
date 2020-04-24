var a=angular.module("videomodle",[]);
a.controller("videocontroller",['$scope','$http',function($scope,$http){
    //数组
    $scope.videos=[];
    $scope.pageNum=1; //第几页
    $scope.videoNum=""; //video数据总数
    //导航栏遍历方法
    $scope.fun1=function () {

        var f = $http.get("/videopageselect.do?pageNum="+$scope.pageNum);

        f.success(function (result){
            if (result.code==1){

                $scope.videos=result.data.data;
                $scope.videoNum=result.data.videoNum;
                console.log("videoNum="+ $scope.videoNum);
            }
        });
    }



    //上一页
    $scope.videoUpPage=function () {

        //一页显示3个，
        if ($scope.pageNum<=1){
            // alert("upPage2,"+$scope.pageNum);
            layer.alert("<span style='color: red'>已经是第一页</span>")
        }else {
            // alert("upPage3,"+$scope.pageNum);
            $scope.pageNum=$scope.pageNum-1;
            $scope.fun1()
        }

    }
    //下一页
    $scope.videoDownPage=function () {

        if ($scope.pageNum*3>= $scope.videoNum){
            // alert("downPage2,"+$scope.pageNum);
            layer.alert("<span style='color: red'>已经是最后一页了</span>")
        }else {
            // alert("downPage3,"+$scope.pageNum);
            $scope.pageNum=$scope.pageNum+1;
            $scope.fun1()
        }
    }



    $scope.videoRefresh=function(){
        $scope.fun1();
    }

    //编辑方法
    $scope.videoupd=function (id,videoname,videourl,videocoverurl,title,url,w,h) {
        window.localStorage.setItem("item_videoid",id);
        window.localStorage.setItem("item_videoname",videoname);
        //window.localStorage.setItem("item_videourl",videourl);
        //window.localStorage.setItem("item_videocoverurl",videocoverurl);
        //console.log("videopage is:"+id+videoname+videourl+videocoverurl+title+url);
        layer_show(title,url,w,h);
    }

    //删除
    $scope.videodel=function(delid){
        layer.confirm('<span style=\'color: red\'>确认删除吗？</span>',function(){
            //注释的方法运行报错
            //var f = $http.delete("/deletevideo.do?id="+delid);
            var f=$http({
                method: "post",
                params: {id: delid},
                url: "/deletevideo.do"
            });
            console.log("删除处理中"+delid);
            f.success(function (result){
                if (result.code==1){
                    $scope.fun1();
                    layer.alert("<span style='color: red'>恭喜你删除成功</span>")

                }
            });

        });

    }


    //遍历方法在页面自动执行
    //导航栏方法执行

    $scope.fun1();


}]);