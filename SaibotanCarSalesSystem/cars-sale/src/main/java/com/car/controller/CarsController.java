package com.car.controller;

import com.car.bean.Car;
import com.car.service.CarService;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class CarsController {

    @Autowired
    CarService service;


    @GetMapping("/car/id")
    @ResponseBody
    public Result findCarBykey(String id) {
        return service.findCarByid(id);
    }


    @GetMapping("/List_good_cars.do")
    @ResponseBody
    public Result List_Good_cars_tui_jian() {

        return service.List_Good_cars_tui_jian();

    }


    @GetMapping("Num_car.do")
    @ResponseBody
    public Result List_Num_cars_tui_jian() {

        return service.List_Num_cars_tui_jian();
    }


//    @GetMapping("/todetails.do")
//    public String todetails(String id, HttpSession session){
//        session.setAttribute("hrefid",id);
//        System.out.println("detail sssssssssssssssss  id="+id);
//        return "car_detail.html";
//    }

    /**
     * 显示详情页
     */
    @GetMapping("/carid.do")
    @ResponseBody
    public Result findCarByid(String id) {
        return service.findCarByid(id);
    }

    @GetMapping("/listcarsbytype.do")
    @ResponseBody
    public Result listCarsBytype(String cartype) {
        System.out.println("listcarsbytype.do," + cartype);
        return service.listCarByType(cartype);
    }

}
