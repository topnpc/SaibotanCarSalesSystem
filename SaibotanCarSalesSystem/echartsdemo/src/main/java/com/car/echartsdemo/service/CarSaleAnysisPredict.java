package com.car.echartsdemo.service;

import com.car.echartsdemo.dao.CarMonthSaleDao;
import com.car.echartsdemo.entity.CarAreaSale;
import com.car.echartsdemo.entity.CarColorSale;
import com.car.echartsdemo.entity.CarMonthSale;
import com.car.echartsdemo.entity.CarSexSale;
import com.car.echartsdemo.util.CarSaleAnalysisUtil;
import com.car.echartsdemo.util.JavaSalePredict;
import com.car.echartsdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CarSaleAnysisPredict {
    @Autowired
    private CarMonthSaleDao carSaleDao;

    public List<CarMonthSale> selectAllByCarName(String carName){
        return carSaleDao.selectAllByCarName(carName);
    }

    //返回每种车在半年的总销量， 半年所有汽车的总销量
    public Result banyearsale(){
        Result result = new Result();
        List<CarMonthSale> carMonthSales = carSaleDao.selectAll();
        List<Integer> banyear = new ArrayList<>();
        Map<String,Object> data = new HashMap<>();
        if(carMonthSales!=null){
            for(CarMonthSale carMonthSale : carMonthSales){
                List<Integer> monthsales = CarSaleAnalysisUtil.jieximonthsale(carMonthSale.getPerMonthAmonunt());
                List<Integer> carbanyears = CarSaleAnalysisUtil.jixibanyear(monthsales);
                carMonthSale.setBanyearsale(carbanyears);
            }
            List<Integer> jidusale = CarSaleAnalysisUtil.jidusalesum(carMonthSales);
            int banyearsum1 = 0;int banyearsum2 = 0;
            banyearsum1 += jidusale.get(0);
            banyearsum1 += jidusale.get(1);
            banyearsum2 += jidusale.get(2);
            banyearsum2 += jidusale.get(3);
            banyear.add(banyearsum1);
            banyear.add(banyearsum2);

            data.put("data1",carMonthSales);
            data.put("data2",banyear);
            if(data!=null){
                result.setCode(1);
                result.setData(data);
                result.setMsg("半年销售情况返回成功");
            }
        }else{
            result.setCode(-1);
            result.setMsg("半年销售情况返回失败");
        }
       return result;
    }


    //返回每个季度汽车总销量
    public Result jidusaleanysis2(){
        Result result = new Result();
        List<CarMonthSale> carMonthSales = carSaleDao.selectAll();
        List<Integer> jidusales = CarSaleAnalysisUtil.jidusalesum(carMonthSales);
        if(jidusales!=null){
            result.setCode(1);
            result.setMsg("查询四季度销量成功");
            result.setData(jidusales);
        }else{
            result.setCode(-1);
            result.setMsg("查询四季度销量失败");
        }
        return result;
    }


    //返回每个汽车在每个季度的总销量，每个季度汽车总销量
    public Result jidusaleanysis(){
        Result result = new Result();
        List<CarMonthSale> carMonthSales = carSaleDao.selectAll();
        Map<String,Object> jidusale = CarSaleAnalysisUtil.carMonthSale2(carMonthSales);
        if(jidusale!=null){
            result.setCode(1);
            result.setMsg("查询汽车季度分析数据成功");
            result.setData(jidusale);
        }else{
            result.setCode(-1);
            result.setMsg("查询汽车季度分析数据失败");
        }
        return result;
    }



    //查询所有的汽车名字
    public Result selectAllCarName(){
        Result result = new Result();
        List<String> carnames = carSaleDao.selectAllCarName();
        if(carnames!=null){
            result.setCode(1);
            result.setMsg("查到所有的汽车名字");
            result.setData(carnames);
        }else{
            result.setCode(-1);
            result.setMsg("没有查到汽车名字");
        }
        return result;
    }


    //返回一种车在一年12个月的消费情况
    public Result oneCarYearSale(String carName){
        Result result = new Result();
        List<CarMonthSale> carMonthSales = carSaleDao.selectAllByCarName(carName);
        if(carMonthSales!=null){
            CarSaleAnalysisUtil.fengzhaung(carMonthSales);
            result.setCode(1);
            result.setMsg("返回一种车在一年12个月的消费情况,成功");
            result.setData(carMonthSales);
        }else{
            result.setCode(-1);
            result.setMsg("返回一种车在一年12个月的消费情况,失败");
        }
        return result;
    }


    //返回所有车在一年的销售情况
    public Result allCarYearSale(){
        Result result = new Result();
        List<CarMonthSale> carMonthSales = carSaleDao.selectAll();
        if(carMonthSales!=null){
            CarSaleAnalysisUtil.fengzhaung(carMonthSales);
            result.setCode(1);
            result.setMsg("返回所有车在一年的销售情况，成功");
            result.setData(carMonthSales);
        }else{
            result.setCode(-1);
            result.setMsg("返回所有车在一年的销售情况，失败");
        }
        return result;
    }

    //这个是预测汽车下一个月的销量
    public Result carsalepredict(String carName){
        List<CarMonthSale> carMonthSales = carSaleDao.selectAllByCarName(carName);
        Result result = new Result();
        CarSaleAnalysisUtil.carMonthSale(carMonthSales);

        //一种类型的车按理说只有一个，但是为了防止数据库管理不当，写为List
        if(carMonthSales!=null){
            result.setCode(1);
            result.setMsg(carName+"：销量预测成功");
            result.setData(carMonthSales);
        }else{
            result.setCode(-1);
        }
        return result;
    }

    //预测所有车辆下个月销量
    public Result carsaleallpredict(){
        List<CarMonthSale> carMonthSales = carSaleDao.selectAll();
        Result result = new Result();
        CarSaleAnalysisUtil.carMonthSale(carMonthSales);

        //一种类型的车按理说只有一个，但是为了防止数据库管理不当，写为List
        if(carMonthSales!=null){
            result.setCode(1);
            result.setMsg("所有汽车：销量预测成功");
            result.setData(carMonthSales);
        }else{
            result.setCode(-1);
        }
        return result;
    }


    //地区汽车销量分析查询
    public Result areaAnysis(){
        Result result = new Result();
        List<CarAreaSale> areaSales = carSaleDao.areaAnysis();
        if(areaSales!=null){
            result.setCode(1);
            result.setMsg("地区汽车销量分析查询成功");
            result.setData(areaSales);
        }else{
            result.setCode(-1);
            result.setMsg("地区汽车销量分析查询失败");
        }
        return result;
    }


    //性别汽车销量分析查询
    public Result sexAnysis(){
        Result result = new Result();
        List<CarSexSale> sexSales = carSaleDao.sexAnysis();
        if(sexSales!=null){
            result.setCode(1);
            result.setMsg("性别汽车销量分析查询成功");
            result.setData(sexSales);
        }else{
            result.setCode(-1);
            result.setMsg("性别汽车销量分析查询失败");
        }
        return result;
    }


    //颜色汽车销量分析查询
    public Result colorAnysis(){
        Result result = new Result();
        List<CarColorSale> colorSales = carSaleDao.coloeAnysis();
        if(colorSales!=null){
            result.setCode(1);
            result.setMsg("颜色汽车销量分析查询成功");
            result.setData(colorSales);
        }else{
            result.setCode(-1);
            result.setMsg("颜色汽车销量分析查询失败");
        }
        return result;
    }











}
