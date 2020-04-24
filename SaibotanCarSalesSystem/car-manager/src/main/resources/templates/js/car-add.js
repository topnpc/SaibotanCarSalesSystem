  function article_save(){
        alert("刷新父级的时候会自动关闭弹层。")
        window.parent.location.reload();
    }
  var cartypes=[];

  $.ajax({
      "url":"/selectTypeNames.do",//请求地址
      "type":"get",//请求的方式
      //"dataType":"JSON",服务器返回的数据类型 , 默认为TEXT
      "success":function(data){//请求成功时的回调函数
          cartypes = data.data;
          var sel= document.getElementById("cartype");
          for (i=0;i<cartypes.length;i++){
              sel.options.add(new Option(cartypes[i],cartypes[i]));
          }

      },
      "error":function(){
          console.info("因为网络或者其他原因, 登录失败了");
      }
  });


    console.log("1");
    // var attr = document.createAttribute("option");
    // attr.innerHTML = cartypes[0];
    // document.getElementById("cartype").appendChild(attr);


function carsave(){
    var flag = true;
    var carUrl = $("#carUrl")[0].files[0];
    var name = $("#name").val();
    var price = $("#price").val();
    var color = $("#color").val();
    var describe = $("#describe").val();
    var cartype = $("#cartype").val();
    var typeid = 0;
    var sale_number = $("#sale_number").val();
    var collect_number = $("#collect_number").val();
    if (name ==''||price==''|| color ==''||describe==''||cartype==''|| sale_number ==''||collect_number=='') {
        alert("不能存在空值");
        flag = false;
    }


    var formData = new FormData();//表单对象
    formData.append("imgFile", carUrl);    //生成一对表单属性
    formData.append("name", name);
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
                url: '/addCar2.do',         //对应的后台处理类的地址
                data: formData,
                processData: false,
                contentType: false,
                success: function (result) {
                    if (result.code == 1) {
                        alert("汽车添加成功,请点击图片管理查看");
                        location.replace("car-list.html");
                    } else if (result.code == -1) {
                        alert("汽车上传失败");
                    }

                },
                error: function () {
                    alert("网络错误，请稍后再试...");
                }
            });
        }
    }else {
        if (flag) {
            $.ajax({
                type: "POST",           //因为是传输文件，所以必须是post
                url: '/addCar.do',         //对应的后台处理类的地址
                data: formData,
                processData: false,
                contentType: false,
                success: function (result) {
                    alert(6666666);
                    if (result.code == 1) {
                        alert("汽车添加成功,请点击图片管理查看");
                        console.log("跳转前");
                        location.replace("car-list.html");
                        console.log("跳转后");
                    } else if (result.code == -1) {
                        alert("汽车上传失败");
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
  function layer_close(){
      var index = parent.layer.getFrameIndex(window.name);
      parent.layer.close(index);

  }







