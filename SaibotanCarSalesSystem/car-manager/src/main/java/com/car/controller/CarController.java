package com.car.controller;

import com.car.service.CarService;
import com.car.util.FileUtil;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class CarController {
    @Autowired
    CarService carService;


    /**
     * 查询当页信息
     * @param pageNum:第几页
     * @return：汽车数量和页内汽车对象集合
     */
    @GetMapping("/carSelect.do")
    @ResponseBody
    public Result selectCar(@RequestParam(defaultValue = "1")int pageNum){
        int pageSize=3;
        Result result = carService.selectCar(pageNum, pageSize);
        return result;
    }

    /**
     * 根据typeid查询汽车
     * @param typeid
     * @return
     */
    @GetMapping("/SelecCarstByTypeid.do")
    @ResponseBody
    public Result selecCarstByTypeid(Integer pageNum, Integer typeid){
        int pageSize=3;
        return carService.selectByTypeid(pageNum, pageSize,typeid);

    }

    //根据类型名称查询汽车
    @GetMapping("/car/typename")
    @ResponseBody
    public Result selectByTypeName(String typeName){
        return carService.selectByTypeName(typeName);
    }

    @GetMapping("/car/name")
    @ResponseBody
    public Result selectByName(String name){
        return carService.selectByName(name);
    }


    /**
     * 查询含有查询名字的当页信息
     * @param pageNum:第几页
     * @return：汽车数量和页内汽车对象集合
     */
    @GetMapping("/carSelect1.do")
    @ResponseBody
    public Result selectCar(@RequestParam(defaultValue = "1")int pageNum, String name){
        int pageSize=3;
        return carService.selectCarByname(pageNum, pageSize,name);
    }

    /**
     * 查询一个
     * @param
     * @return
     */
    @GetMapping("/SelectOneCar.do")
    @ResponseBody
    public Result selectByname(@RequestParam("name")String name){
        Result result = carService.selectByname(name);
        return result;
    }

    /**
     * 添加汽车
     * @param name
     * @param price
     * @param color
     * @param describe
     * @param
     * @param imgFile：接受前端的图片或其他文件属性
     * @param typeid
     * @param sales_number
     * @param collect_number
     * @param cartype
     * @return
     */
    @PostMapping("/addCar.do")
    @ResponseBody
    public Result addCar(String name, String price, String color,
                         String describe, @RequestParam(name = "imgFile") MultipartFile imgFile,
                         int typeid, int sales_number, int collect_number,
                         String cartype){
        String url="car_detail.html";
        String fileUpload=null;
        if (imgFile.toString().equals("undefined")||imgFile.toString()=="undefined"){
            fileUpload = "不存在";
        }else {
            fileUpload = FileUtil.FileUpload(imgFile, "D:\\images\\car", "a");
        }

        return carService.addCar(name, price, color, describe, url, "/car_img/"+fileUpload, typeid, sales_number, collect_number, cartype);
    }

    /**
     * 无图片添加
     * @param name
     * @param price
     * @param color
     * @param describe
     * @param typeid
     * @param sales_number
     * @param collect_number
     * @param cartype
     * @return
     */
    @PostMapping("/addCar2.do")
    @ResponseBody
    public Result addCar2(String name, String price, String color,
                          String describe, int typeid, int sales_number,
                          int collect_number, String cartype){
        String url="car_detail.html";
        return carService.addCar(name, price, color, describe, url, "/car_img/图片不存在", typeid, sales_number, collect_number, cartype);
    }

    /**
     * 带图片修改
     * @param rename
     * @param name
     * @param price
     * @param color
     * @param describe
     * @param imgFile
     * @param typeid
     * @param sales_number
     * @param collect_number
     * @param cartype
     * @return
     */
    @PostMapping("/updateCar.do")
    @ResponseBody
    public Result updateCar(String rename, String name, String price, String color,
                            String describe, @RequestParam(name = "imgFile") MultipartFile imgFile,
                            int typeid, int sales_number, int collect_number,
                            String cartype){
        String fileUpload=null;
        if (imgFile.toString().equals("undefined")||imgFile.toString()=="undefined"||imgFile==null){
            fileUpload = "不存在";
        }else {
            fileUpload = FileUtil.FileUpload(imgFile, "D:\\images\\car", "a");
        }
        System.out.println(fileUpload);
        return carService.updateCar(rename, name,price, color, describe,
                "/car_img/"+fileUpload, typeid, sales_number,
                collect_number, cartype);
    }

    /**
     * 不修改图片
     * @param rename
     * @param name
     * @param price
     * @param color
     * @param describe
     * @param typeid
     * @param sales_number
     * @param collect_number
     * @param cartype
     * @return
     */
    @PostMapping("/updateCar2.do")
    @ResponseBody
    public Result updateCar(String rename, String name, String price, String color,
                            String describe, int typeid, int sales_number, int collect_number,
                            String cartype){
        return carService.updateCar(rename, name,price, color, describe,
                null, typeid, sales_number,
                collect_number, cartype);
    }
    /**
     * 单个删除
     * @param name
     * @return
     */
    @GetMapping("/car_del.do")
    @ResponseBody
    public Result deleteCar(@RequestParam(name = "name")String name){
        Result result = carService.deleteCar(name);
        return result;
    }

    /**
     * 批量删除
     * @param names
     * @return
     */
    @GetMapping("/cars_del.do")
    @ResponseBody
    public Result deleteCars(String[] names){
        Result result = carService.deleteCars(names);
        return result;
    }

}
