var module = angular.module("CarUpdate",[]);
module.controller("Update",["$scope","$http",function ($scope,$http) {

    $scope.car =''; //{
    //     carUrl :'',
    //     rename :'',
    //     price :'',
    //     color :'',
    //     describe :'',
    //     cartype :'',
    //     typeid :'',
    //     sale_number:'',
    //     collect_number:''
    // };
    $scope.name1=window.localStorage.getItem("carname");




    //初始化页面数据
    $scope.load = function () {

        var p = $http({
            method: 'GET',
            url: '/SelectOneCar.do?name=' + $scope.name1
        });
        p.success(function (result) {
            if (result.code == 1) {
                $scope.car = result.data;

            }

        });
        p.error(function (result) {
            alert("失败");
        })



    }
    $scope.load();

}])

function carupdate() {
    var flag = true;
    var carUrl = $("#carUrl")[0].files[0];
    var name = $("#name").val();
    var rename = $("#rename").val();
    var price = $("#price").val();
    var color = $("#color").val();
    var describe = $("#describe").val();
    var cartype = $("#cartype").val();
    var typeid = "";
    var sale_number = $("#sale_number").val();
    var collect_number = $("#collect_number").val();
    switch(cartype)
    {
        case "SUV":
            typeid=0;
            break;
        case "小型车":
            typeid=1;
            break;
        case "中型车":
            typeid=2;
            break;
        case "大型车":
            typeid=3;
            break;
        default:
            typeid=5;
            break;
    }
    if (name ==''||price==''|| color ==''||describe==''||cartype==''|| sale_number ==''||collect_number=='') {
        alert("不能存在空值");
        flag = false;
    }


    var formData = new FormData();//表单对象
    formData.append("imgFile", carUrl);    //生成一对表单属性
    formData.append("name", name);
    formData.append("rename", rename);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("describe", describe);
    formData.append("typeid", typeid);
    formData.append("cartype", cartype);
    formData.append("sales_number", sale_number);
    formData.append("collect_number", collect_number);
    if ((formData.get("imgFile").toString())=="undefined") {
        formData.delete("imgFile");
        if (flag) {
            $.ajax({
                type: "POST",           //因为是传输文件，所以必须是post
                url: '/updateCar2.do',         //对应的后台处理类的地址
                data: formData,
                processData: false,
                contentType: false,
                success: function (result) {
                    if (result.code == 1) {
                        alert("汽车修改成功,请点击图片管理查看");
                        $scope.selectFun();
                    } else {
                        alert("修改失败");
                    }

                },
                error: function () {
                    alert("网络错误，请稍后再试...");
                }
            });
        }
    }else {
        if (flag) {
            // console.log(formData.get("imgFile"));
            // console.log(formData.get("name"));
            // console.log(formData.get("rename"));
            // console.log(formData.get("price"));
            // console.log(formData.get("color"));
            // console.log(formData.get("describe"));
            // console.log(formData.get("typeid"));
            // console.log(formData.get("sales_number"));
            // console.log(formData.get("collect_number"));
            // console.log(formData.get("cartype"));
            $.ajax({
                type: "POST",           //因为是传输文件，所以必须是post
                url: '/updateCar.do',         //对应的后台处理类的地址
                data: formData,
                processData: false,
                contentType: false,
                success: function (result) {
                    if (result.code == 1) {
                        alert("汽车修改成功,请点击图片管理查看");
                        location.replace("car-list.html");
                    } else {
                        alert("汽车修改失败");
                    }

                },
                error: function () {
                    alert("网络错误，请稍后再试...");
                }
            });
        }
    }
}

/*关闭弹出框口*/
function layer_close2(){
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}






