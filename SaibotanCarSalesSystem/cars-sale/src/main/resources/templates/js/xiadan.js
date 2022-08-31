(function (angular) {
    var a = angular.module("xiadan", []);

    a.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    a.controller("xiadan_Controller", function ($scope, $http, $location) {
        $scope.userid = window.localStorage.getItem("userid");

        //单个订单
        $scope.orderone = {
            id: 0, orderuuid: 0, carid: 0, userid: 0, carnum: 0, message: '', user: '', totalprice: 0,
            car: {
                "id": 0,
                "name": "",
                "price": "0",
                "color": "",
                "describe": "",
                "url": "",
                "imgurl": "",
                "typeid": 0,
                "cartype": "",
                "sales_number": "",
                "collect_number": ""
            }
        };

        $scope.totalprice = 0;

        //已经购买的此车型数量，用于对用户进行限购，可以不同的用户可以购买的数量不同
        //这个应该是一个集合，每一个订单对应一个
        $scope.hasbuynum = [{buy: 0}];

        //多个订单
        $scope.orderItems = [];

        //用于提交的订单
        $scope.suborders = [
            {id: 0, orderuuid: '1234', carid: 0, userid: 0, carnum: 0, message: '', totalprice: 0}
        ];

        //从order表 查询 uid 为 33 carid为10 的一条信息
        //顺带把 uid 为 33 的用户信息查询出来
        //carid 为 10 的用户信息查询出来

        //查询用户信息
        $scope.getuser = function (uid) {
            console.log('uid' + uid);
            var f = $http.get("http://localhost:8081/user/id?id=" + uid);
            f.success(function (result) {
                if (result.code == 1) {
                    $scope.orderone.user = result.data;
                    console.log('user find ok,name=' + result.data.name);
                }
            });
        }

        //查询商品信息
        $scope.getcar = function (carid) {
            console.log('carid' + carid);
            var f = $http.get("http://localhost:8081/car/id?id=" + carid);
            f.success(function (result) {
                if (result.code == 1) {
                    $scope.orderone.car = result.data;
                    console.log('car find ok,carname=' + result.data.name);
                }
            });
        }

        $scope.order_one = function () {
            var prepageurl = window.localStorage.getItem("pagepathurl");
            //这是单个订单事务，由car_detail.html跳转过来的
            if (prepageurl == "/car_detail.html") {
                var serch = $location.search();
                var carid = serch.carid;
                var uid = serch.uid;
                //思考：有没有必要去查数据？如果对车辆进行限购得话需要去查数据库
                $scope.getuser(uid);
                $scope.getcar(carid);
                $scope.orderItems.push($scope.orderone);
            }
        }

        //如果是从购物车页面跳转过来
        $scope.order_more = function () {
            var prepageurl = window.localStorage.getItem("pagepathurl");
            if (prepageurl == "/shopcar.html") {
                //将购物车传过来的信息，赋值给orderitems
                var shopcar = '';
                shopcar = window.localStorage.getItem("shopcars");
                var shopcars = [];
                shopcars = JSON.parse(shopcar);
                console.log('shopcar length is ' + shopcars.length);
                //先将原来的orderitems置空
                $scope.orderItems = [];
                $scope.totalprice = 0;
                $scope.getuser($scope.userid);//给orderone的user赋值
                //angular 变量赋值，值如果是object类型，会把object的地址赋值给变量，循环赋值的时候要在循环新创建接收对象
                for (var i = 0; i < shopcars.length; i++) {
                    var orderone = {
                        id: 0, orderuuid: 0, carid: 0, userid: 0, carnum: 0, message: '', user: '', totalprice: 0,
                        car: {
                            "id": 0,
                            "name": "",
                            "price": "0",
                            "color": "",
                            "describe": "",
                            "url": "",
                            "imgurl": "",
                            "typeid": 0,
                            "cartype": "",
                            "sales_number": "",
                            "collect_number": ""
                        }
                    };

                    orderone.car = shopcars[i].car;
                    orderone.user = $scope.orderone.user;
                    orderone.carnum = shopcars[i].carnum;
                    orderone.totalprice = shopcars[i].totalprice;
                    $scope.totalprice += shopcars[i].totalprice;
                    $scope.orderItems.push(orderone);
                    console.log('orderitem carname=' + $scope.orderItems[i].car.name);
                }
            }
        }

        $scope.decrement = function (orderid) {
            if ($scope.orderItems[orderid].carnum <= 0) {
                alert("亲,不能再减了");
                return;
            }
            $scope.orderItems[orderid].carnum = $scope.orderItems[orderid].carnum - 1;
            $scope.orderItems[orderid].totalprice = $scope.orderItems[orderid].totalprice - parseFloat($scope.orderItems[orderid].car.price);
            $scope.totalprice = $scope.totalprice - parseFloat($scope.orderItems[orderid].car.price);
        }

        //难点：把以前此车型的购买数量查出来，用于限购
        $scope.increment = function (orderid) {
            //如果在这里进行查询，会不会太占内存了，如果能在开始的时候查出来放到集合里面最好
            if ($scope.orderItems[orderid].carnum >= 5) {
                alert("亲,此车型只能买5量");
            }
            if ($scope.orderItems[orderid].carnum >= $scope.orderItems[orderid].car.collect_number) {
                alert("亲,库存不足啦,您再看看其他车型吧");
                return;
            }
            $scope.orderItems[orderid].carnum = $scope.orderItems[orderid].carnum + 1;
            $scope.orderItems[orderid].totalprice = $scope.orderItems[orderid].totalprice + parseFloat($scope.orderItems[orderid].car.price);
            $scope.totalprice = $scope.totalprice + parseInt($scope.orderItems[orderid].car.price);
        }

        //提交订单的时候不需要判断限购，因为在增加车辆的时候已经进行动作判断了
        $scope.tijiao = function () {
            //上面的商品数量变化后，怎么提取，订单是不是从数据库读出来的？
            //我认为肯定不是从数据库中读出来的，只有购物车页面跳转过来的时候，
            // 读取了购物车选中的某些数据，购物车---ids->查询信息--
            //那么这时就只在提交的时候，全部进行提交，不必在单个项增加，减少数量的时候，对数据库进行操作
            console.log("开始提交订单");
            var prepageurl = window.localStorage.getItem("pagepathurl");
            if ($scope.orderItems != null) {
                var config = {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        }
                        return str.join("&");
                    }
                };
                //如果是从详情页跳转过来的
                if (prepageurl == "/car_detail.html") {
                    var f = $http.post(
                        "http://localhost:8081/order/addone",
                        {
                            carid: $scope.orderItems[0].car.id,
                            userid: $scope.orderItems[0].user.id,
                            carnum: $scope.orderItems[0].carnum,
                            message: $scope.orderItems[0].message,
                            totalprice: $scope.orderItems[0].totalprice
                        },
                        config
                    );
                    f.success(function (result) {
                        if (result.code == 1) {
                            console.log("数据已保存");
                            alert("订单已成功提交");
                            //跳转到支付页面,
                            window.location.href = "/zhifu.html?orderid=" + result.data.id;//在当前窗口打开
                        } else {
                            console.log("服务器繁忙，数据保存失败");
                            alert("服务器繁忙，数据保存失败");
                        }

                    });
                    f.error(function (result) {
                        alert("网络不好，数据保存失败");
                    });
                } else if (prepageurl == "/shopcar.html") {
                    var ids = [];
                    console.log('处理从购物车过来的页面');
                    for (var i = 0; i < $scope.orderItems.length; i++) {
                        var f = $http.post(
                            "http://localhost:8081/order/addone",
                            {
                                carid: $scope.orderItems[i].car.id,
                                userid: $scope.userid,
                                carnum: $scope.orderItems[i].carnum,
                                message: $scope.orderItems[i].message,
                                totalprice: $scope.orderItems[i].totalprice
                            },
                            config
                        );
                        f.success(function (data) {
                            if (data.code == 1) {
                                ids.push(result.data.id);
                                console.log("数据已保存");
                                // alert("订单已成功提交");
                                //跳转到支付页面,
                                // window.location.href="/zhifu.html"; //在当前窗口打开
                            } else {
                                console.log("服务器繁忙，数据保存失败");
                                alert("服务器繁忙，数据保存失败");
                            }
                        });
                        f.error(function (data) {
                            alert("网络不好，数据保存失败");
                        });
                    }
                    alert("订单已成功提交");
                    //跳转到支付页面
                    window.localStorage.setItem("orderids", angular.toJson(ids));
                    window.localStorage.setItem("price", $scope.totalprice);
                    window.location.href = "/zhifu.html"; //在当前窗口打开
                }
            } else {
                alert('订单不能为空');
            }
        }

        //{orderuuid:'1234',carid:0,userid:0,carnum:0,message:'',totalprice:0}


        $scope.order_one();
        $scope.order_more();


    });
})(angular)
