(function (angular) {
    var a = angular.module("shopcar", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("shopcar_Controller", function ($scope, $http, $location) {
        $scope.shopcars = [];
        $scope.userid = window.localStorage.getItem("userid");
        $scope.carnameall = '';
        $scope.selectall = false;
        $scope.subshops = [];//最后购买的商品
        $scope.totalprice = 0;

        //判断用户是否登录，需要用到uid最好都检查一下
        $scope.flagm = function () {
            $scope.username = window.localStorage.getItem("username");
            $scope.userid = window.localStorage.getItem("userid");
            $scope.sex = window.localStorage.getItem("sex");
            console.log("username=" + $scope.username + ",userid=" + $scope.userid + "sex=" + $scope.sex)
            if ($scope.userid == null || $scope.userid == "") {
                $scope.flag_user = true;

            } else {
                $scope.flag_user = false;
            }
        }

        //默认显示全部商品
        $scope.load = function () {
            var f = $http.get("/shopcar/findbyuid?uid=" + $scope.userid);
            f.success(function (result) {
                if (result.code == 1) {
                    console.log('shopcar find ok');
                    $scope.shopcars = result.data;
                }
            });
        }

        //全局搜索 通过carname 模糊查询汽车
        $scope.loadBycarname = function () {
            alert('全局搜索carname like ' + $scope.carnameall);
        }

        //给全选监听一个事件
        $scope.selectallfun = function () {
            alert('功能正在完善，敬请期待');
            // if($scope.selectall){
            //     console.log('全选选中啦');
            //     $("[name='items']").attr("checked","checked");
            //     $scope.totalprice =0;
            //     $scope.subshops = [];
            //     for(var i=0;i<$scope.shopcars;i++){
            //         $scope.totalprice += $scope.shopcars[i].totalprice;
            //         $scope.subshops.push($scope.shopcars[i]);
            //     }
            //
            // }else{
            //     console.log('全选取消啦');
            //     $("[name='items']").removeAttr("checked");
            //     $scope.totalprice =0;
            //     $scope.subshops = [];
            // }
        }

        //商品数量加减


        //给每一个单选监听一个事件，选择一个计算一次总价格
        $scope.selectonefun = function ($event, inde) {
            console.log('订单，下标为' + inde);
            var checkbox = $event.target;
            if (checkbox.checked) {
                console.log('订单选中');
                $scope.totalprice += $scope.shopcars[inde].totalprice;
                $scope.subshops.push($scope.shopcars[inde]);
            } else {
                console.log('订单未选中');
                $scope.totalprice -= $scope.shopcars[inde].totalprice;
                for (var i = 0; i < $scope.subshops.length; i++) {
                    if ($scope.subshops[i].id == $scope.shopcars[inde].id) {
                        $scope.subshops.splice(i, 1);   //splice为从要删除的元素开始,删除一个,刚好就是删除那个元素
                        console.log('移除已加入订单，加入订单下标为' + i);
                        return;
                    }
                }
            }
        }


        $scope.jiesuan = function () {
            for (var i = 0; i < $scope.subshops.length; i++) {
                //移除购物车里边的数据
                var f = $http.get("/shopcar/del?id=" + $scope.subshops[i].id);
                f.success(function (result) {
                    if (result.code == 1) {
                        console.log('shopcar del ok');
                    }
                });
            }
            window.localStorage.setItem("pagepathurl", "/shopcar.html");
            window.localStorage.setItem("shopcars", angular.toJson($scope.subshops));

            window.open("/xiadan.html", "_blank");
        }

        $scope.load();

    });
})(angular)
