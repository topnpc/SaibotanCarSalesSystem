var carmodule = angular.module("carPage",[]);

carmodule.controller("carList",["$scope","$http",function ($scope,$http) {
    $scope.cars=[];
    $scope.carNum="";//汽车总数
    $scope.pageNum=1;//当前所在页
    $scope.msg="";
    $scope.pagesize=3;//每页个数(!!!更改此处必须同时更改后台)
    $scope.check=false;
    $scope.names=[];
    $scope.searchname="";
    $scope.cartypes=[];
    
    //遍历cartype汽车类型信息
    $scope.selectAllCartype=function(){
        var ff = $http.get("/selectAllType.do");
        ff.success(function (result) {
            if(result.code==1){
                $scope.cartypes=result.data;
                console.log($scope.cartypes);
            }
        })
    }
    $scope.selectAllCartype();


    /**
     * 根据车型分类遍历汽车
     */
    $scope.selectCarsByCartype=function(id) {
        var f = $http.get("/SelecCarstByTypeid.do?pageNum="+$scope.pageNum+"&typeid="+id);
        f.success(function (result) {

            if(result.code==1){
                $scope.msg=result.msg;
                $scope.carNum=result.data.carnum;
                $scope.cars=result.data.cars;
                console.log("汽车数量2："+$scope.carNum);
            }
        })
        f.error(function (result) {
            console.log("错误");
        })
    }

    //根据名称查询订单
    $scope.selectFun=function() {
        var f = $http.get("/carSelect1.do?pageNum="+$scope.pageNum+"&name="+$scope.searchname);
        f.success(function (result) {

            if(result.code==1){
                $scope.msg=result.msg;
                $scope.carNum=result.data.carnum;
                $scope.cars=result.data.cars;
                console.log("汽车数量："+$scope.carNum);
            }
        })
        f.error(function (result) {
            console.log("错误");
        })
    }

    //首页
    $scope.FirstPage=function(){
            $scope.pageNum=1;
            $scope.selectFun();
    }
    //上一页
    $scope.UpPage=function(){
        if ($scope.pageNum==1){
            alert("没有上一页");
        } else {
            $scope.pageNum=$scope.pageNum-1;
            $scope.selectFun();
        }
    }

    //下一页
    $scope.DownPage=function(){
        if ($scope.carNum%3==0){
            if ($scope.pageNum==parseInt($scope.carNum/3)){
                alert("已经是最后一页");
            } else {
                $scope.pageNum=$scope.pageNum+1;
                $scope.selectFun();
            }
        }else {
            if ($scope.pageNum==parseInt($scope.carNum/3)+1){
                alert("已经是最后一页");
            } else {
                $scope.pageNum=$scope.pageNum+1;
                $scope.selectFun();
            }
        }

    }

    $scope.selectFun();


    /*汽车-删除*/
    $scope.car_del=function(obj,name){
        layer.confirm('确认要删除'+name+'吗？',function(index){
            $.ajax({
                type: 'get',
                url: '/car_del.do?name='+name,
                dataType: 'json',
                success: function(data){
                    $(obj).parents("tr").remove();
                    layer.msg(data.msg,{icon:1,time:1000});
                    $scope.selectFun();
                },
                error:function(data) {
                    console.log(data.msg);
                },
            });
        });
    }

    /*产品-添加*/
    $scope.car_add=function (title,url){

        layer.open

        var index = layer.open({
            type: 2,
            title: title,
            content: url
        });
        layer.full(index);
    }

        /*产品-编辑*/
    $scope.car_edit=function(title,url,name){
        window.localStorage.setItem("carname",name);
        var index = layer.open({
            type: 2,
            title: title,
            content: url
        });
        layer.full(index);
    }

    /**
     * 刷新
     */
    $scope.navrefresh1=function () {
        $scope.selectFun();
    }

    /**
     * 批量删除
     */
    $scope.carsdel=function () {
        var names=new Array();
        console.log($scope.carNum%$scope.pagesize)
        //判断不是最后一页
        if ($scope.pageNum<=parseInt($scope.carNum/3)) {
            for (var i=0;i<$scope.pagesize;i++){
                // console.log($scope.cars[i].name);
                // console.log(document.getElementsByName($scope.cars[i].name)[0].checked);
                if (document.getElementsByName($scope.cars[i].name)[0].checked) {
                    names.push($scope.cars[i].name);
                }
            }
        }else {
            //最后一页
            for (var i=0;i<(($scope.carNum)%($scope.pagesize));i++){
                // console.log($scope.cars[i].name);
                // console.log(document.getElementsByName($scope.cars[i].name)[0].checked);
                if (document.getElementsByName($scope.cars[i].name)[0].checked) {
                    names.push($scope.cars[i].name);
                }
            }
        }

        if (names.length>0) {
            b = confirm("确定要删除 "+names+" ?");
            console.log(b);
            if(b==true){
                $.ajax({
                    type: 'get',
                    url: '/cars_del.do?names='+names,
                    dataType: 'json',
                    success: function(data){
                        alert(data.msg)
                        $scope.selectFun();
                    },
                    error:function(data) {
                        console.log(data.msg);
                    },
                });
            }

        }else {
            alert("没选你删个屁啊");
        }


    }

}])

