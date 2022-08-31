package com.car.service;

import com.car.bean.Car;
import com.car.dao.CarDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    @Autowired
    CarDao dao;


    public Result List_Good_cars_tui_jian() {
        List<Car> cars = dao.List_Good_cars_tui_jian();
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.OK_MSG);
        result.setData(cars);

        return result;

    }

    public Result List_Num_cars_tui_jian() {
        List<Car> cars = dao.List_Num_cars_tuijian();
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.OK_MSG);
        result.setData(cars);

        return result;

    }

    public Result findCarByid(String id) {
        Car car = dao.findCarId(id);
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.OK_MSG);
        result.setData(car);

        return result;

    }

    public Result listCarByType(String cartype) {
        List<Car> cars = dao.listCarBytype(cartype);
        Result r = new Result();
        r.setCode(ResultMsg.OK);
        r.setData(cars);
        System.out.println(cars.toString());
        return r;
    }


}
