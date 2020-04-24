package com.car.echartsdemo;

import com.car.echartsdemo.service.CarSaleAnysisPredict;
import com.car.echartsdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin
public class CarSaleAnysisContro {
    @Autowired
    private CarSaleAnysisPredict carSaleAnysis;
    //月销量分析，最好有同一月份，不同车辆的对比，柱形图
    //同一年，同一种车，12个月的对比，折线图或柱状图
    //性别销量分析，使用饼图，
    //地区销量分析使用，地图，销量越多，颜色越深，可以通过选择销量或颜色（左边）看到地图的变化
    //颜色销量分析使用横向条状图

    //每种车 4个季度 的 柱形图

    //返回每种车在半年的总销量， 半年所有汽车的总销量
    @GetMapping("/carSaleAnysis/banyearsale.do")
    @ResponseBody
    public Result banyearsale(){
        return carSaleAnysis.banyearsale();
    }

    //返回每个季度汽车总销量
    @GetMapping("/carSaleAnysis/jidusale.do")
    @ResponseBody
    public Result jidusaleanysis2(){
        return carSaleAnysis.jidusaleanysis2();
    }

    //返回每个汽车在每个季度的总销量，每个季度汽车总销量
    @GetMapping("/carSaleAnysis/allCarjiduSale.do")
    @ResponseBody
    public Result jidusaleanysis(){
        return carSaleAnysis.jidusaleanysis();
    }
    //返回一种车在一年12个月的消费情况
    @GetMapping("/carSaleAnysis/oneCarYearSale.do")
    @ResponseBody
    public Result oneCarYearSale(String carName){
        return carSaleAnysis.oneCarYearSale(carName);
    }

    //返回所有车在一年的销售情况
    @GetMapping("/carSaleAnysis/allCarYearSale.do")
    @ResponseBody
    public Result allCarYearSale(){
        return carSaleAnysis.allCarYearSale();
    }

    //查询所有汽车名称
    @GetMapping("/carSaleAnysis/findallcarname.do")
    @ResponseBody
    public Result selectAllCarName(){
        return carSaleAnysis.selectAllCarName();
    }

    //预测一个汽车下一个月的销量
    @GetMapping("/carSaleAnysis/predictNextMonthSale.do")
    @ResponseBody
    public Result carsalepredict(String carName){
        return carSaleAnysis.carsalepredict(carName);
    }

    //预测所有汽车
    @GetMapping("/carSaleAnysis/predictAllCarNextMonthSale.do")
    @ResponseBody
    public Result  carsaleallpredict(){
        return carSaleAnysis.carsaleallpredict();
    }

    //地区汽车销量分析查询
    @GetMapping("/carSaleAnysis/anysisAreaSale.do")
    @ResponseBody
    public Result areaAnysis(){
        return carSaleAnysis.areaAnysis();
    }

    //性别销量分析
    @GetMapping("/carSaleAnysis/anysisSexSale.do")
    @ResponseBody
    public Result sexAnysis(){
        return carSaleAnysis.sexAnysis();
    }

    //颜色销量分析
    @GetMapping("/carSaleAnysis/anysisColorSale.do")
    @ResponseBody
    public Result colorAnysis(){
        return carSaleAnysis.colorAnysis();
    }


}
