var a=angular.module("cartype",[]);
//车型添加
a.controller("carTypeaddContro",["$scope","$http",function ($scope,$http){

    $scope.cartype={
        typeid :"",
        cartype:"",
        typedescribe:""
    }
    $scope.successmsg="";
    $scope.errormsg="";
    //关闭弹窗
    $scope.layera_close=function(){
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);

    }


    $scope.cartypeadd=function () {

        if ( $scope.cartype.typeid==""||$scope.cartype.typeid==null) {
            $scope.successmsg="";
            $scope.errormsg="车型id不能为空";
        }else if($scope.cartype.cartype==""||$scope.cartype.cartype==null){
            $scope.successmsg="";
            $scope.errormsg="车型不能为空";
        }else if ($scope.cartype.typedescribe==""||$scope.cartype.typedescribe==null) {
            $scope.successmsg="";
            $scope.errormsg="车型介绍不能为空";
        } else{
            $scope.errormsg="";
            var $http1 = $http({
                method: "post",
                params:{typeid:$scope.cartype.typeid,cartype:$scope.cartype.cartype,typedescribe:$scope.cartype.typedescribe},
                url:"/addCarType.do"
            });
            $http1.success(function(result){
                if (result.code==1){
                    // layer.alert("<span style='color: red'>恭喜你添加成功</span>");
                    $scope.successmsg="恭喜你添加成功";
                }
                if (result.code==-3){
                    $scope.successmsg="该车型id已存在";
                }
                if (result.code==-2){
                    $scope.successmsg="该车型已存在";
                }
            });
            $http1.error(function () {
                alert("网络有问题...");
            });
        }
    }
}])

/**
 * 车型修改页面
 */
a.controller("carTypeUpdateContro",["$scope","$http",function ($scope,$http){

    $scope.errormsg1="";
    $scope.successmsg1="";
    $scope.cartype={
        typeid :"",
        cartype:"",
        typedescribe:""
    }
    $scope.showCartype=function () {
        console.log("绑定成功")
        //获取cartype-list.html前段传过来的typeid
        var tid=window.localStorage.getItem("typeid");
        //查询选定cartype属性
        var f = $http.get("/selectCartypebytypeid.do?typeid="+tid);
        f.success(function (result) {
            console.log("连接成功")
            if (result.code==1){
                $scope.cartype.typeid=result.data.typeid;
                $scope.cartype.cartype=result.data.cartype;
                $scope.cartype.typedescribe=result.data.typedescribe;
                console.log("typid="+$scope.cartype.typeid+";");
            }

        });

    }

    /*关闭弹出框口*/
    $scope.layer_close11=function(){
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    }

    $scope.showCartype();
    //提交修改内容
    $scope.cartypeupdate=function () {
        console.log("这个typid="+$scope.cartype.cartype+";");
        console.log("这个描述="+$scope.cartype.typedescribe+";");
        if (confirm("汽车库也会随之修改，确认修改？")) {
            var u = $http.post("/updateCartype.do?typeid="+$scope.cartype.typeid+"&typename="+$scope.cartype.cartype+"&typedescribe="+$scope.cartype.typedescribe);
            u.success(function (result) {
                console.log("修改成功")
                if (result.code==1){
                    layer.msg(result.msg,{icon:1,time:1000});
                    setTimeout(function (args) {
                        location.href="cartype-list.html";
                    } , 1000);
                    $scope.errormsg="";
                    $scope.successmsg=result.msg;

                }else{
                    $scope.errormsg=result.msg;
                    $scope.successmsg="";
                }

            });
        }

    }

}])


/**
 * 车型显示页面
 */
a.controller("cartypeController",function ($scope,$http) {
    //数组
    $scope.cartypes=[];

    //车型遍历方法
    $scope.cartypefun=function () {
        console.info("已执行遍历方法");
        var f = $http.get("/selectAllType.do")
        f.success(function (result){
            if (result.code==1){
                $scope.cartypes=result.data;
            }
        });
    }
    $scope.cartypefun();
    $scope.carrefresh=function(){
        $scope.cartypefun();
    }

    //编辑方法
    $scope.car_edit=function (title,url,id,carName,carUrl,w,h) {
        window.localStorage.setItem("car_edit_id",id);
        window.localStorage.setItem("car_edit_carName",carName);
        window.localStorage.setItem("car_edit_carUrl",carUrl);
        layer_show(title,url,w,h);

    }

    //编辑跳转
    $scope.cartypeupdatejump=function(title,url,id){
        window.localStorage.setItem("typeid",id);
        var index = layer.open({
            type: 2,
            title: title,
            content: url
        });
        layer.full(index);
    }



    //删除
    $scope.cartype_del=function(obj,id){
        layer.confirm('确认要删除？',function(index){
            $.ajax({
                type: 'get',
                url: '/deleteType.do?typeid='+id,
                dataType: 'json',
                success: function(data){
                    // $(obj).parents("tr").remove();
                    layer.msg(data.msg,{icon:1,time:1000});
                    $scope.cartypefun();
                },
                error:function(data) {
                    console.log(data.msg);
                    alert("网络有问题");
                },
            });
        });
    }




});







