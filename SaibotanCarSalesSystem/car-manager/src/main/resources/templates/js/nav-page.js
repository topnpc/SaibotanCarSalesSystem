var a=angular.module("navpage",[]);




a.controller("navpage_controller",function ($scope,$http) {
        //数组
        $scope.navs=[];
        $scope.pageNum=1; //第几页
        $scope.navNum=""; //nav总数
      //导航栏遍历方法
      $scope.fun1=function () {

          var f = $http.get("/pageselect.do?pageNum="+$scope.pageNum);

          f.success(function (result){
                if (result.code==1){

                    $scope.navs=result.data.data;
                    $scope.navNum= result.data.navNum;
                    console.log("navNum="+ $scope.navNum);
                }
          });
    }



    //上一页
    $scope.upPage=function () {

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
    $scope.downPage=function () {

        if ($scope.pageNum*3>= $scope.navNum){
            // alert("downPage2,"+$scope.pageNum);
            layer.alert("<span style='color: red'>已经是最后一页了</span>")
        }else {
            // alert("downPage3,"+$scope.pageNum);
            $scope.pageNum=$scope.pageNum+1;
            $scope.fun1()
        }
    }



    $scope.navrefresh=function(){
        $scope.fun1();
    }

    //编辑方法
    $scope.nav_edit=function (title,url,id,navName,navUrl,w,h) {
        window.localStorage.setItem("nav_edit_id",id);
        window.localStorage.setItem("nav_edit_navName",navName);
        window.localStorage.setItem("nav_edit_navUrl",navUrl);
        layer_show(title,url,w,h);


    }
    //删除
    $scope.nav_del=function(delid){
        layer.confirm('<span style=\'color: red\'>确认删除吗？</span>',function(){
            var f = $http.delete("/navdelete.do?id="+delid);

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


});







