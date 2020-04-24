package com.car.echartsdemo;

import com.car.echartsdemo.dao.CarMonthSaleDao;
import com.car.echartsdemo.entity.CarMonthSale;
import com.car.echartsdemo.service.CarSaleAnysisPredict;
import com.car.echartsdemo.util.CarSaleAnalysisUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EchartsdemoApplicationTests {
    @Autowired
    private CarMonthSaleDao saledao;
    @Autowired
    private CarSaleAnysisPredict carsaleanysis;

    //已测试成功1.0.0
    @Test
    public void test_selectAllByCarName() {
        System.out.println(carsaleanysis.selectAllByCarName("奥迪A6L"));
    }

    //已测试成功1.0.0
    @Test
    public void test_jieximonthsale() {
        List<CarMonthSale> carMonthSales = carsaleanysis.selectAllByCarName("奥迪A6L");
        CarMonthSale carMonthSale = carMonthSales.get(0);
        String perMonthSale = carMonthSale.getPerMonthAmonunt();
        System.out.println(perMonthSale);
        System.out.println(CarSaleAnalysisUtil.jieximonthsale(perMonthSale));
    }

    //已测试成功1.0.0
    @Test
    public void test_jiexijidusale(){
        List<CarMonthSale> carMonthSales = carsaleanysis.selectAllByCarName("奥迪A6L");
        CarMonthSale carMonthSale = carMonthSales.get(0);
        String perMonthSale = carMonthSale.getPerMonthAmonunt();
        List<Integer> monthsales = CarSaleAnalysisUtil.jieximonthsale(perMonthSale);
        System.out.println(CarSaleAnalysisUtil.jiexijidusale(monthsales));
    }

    //已测试成功1.0.0
    @Test
    public void test_jidusalesum(){
        List<CarMonthSale> carMonthSales = saledao.selectAll();
        System.out.println(CarSaleAnalysisUtil.jidusalesum(carMonthSales));
    }

    //已测试成功1.0.0
    @Test
    public void test_jidusaleanysis(){
        System.out.println(carsaleanysis.jidusaleanysis());
    }

    //已测试成功1.0.0
    @Test
    public void test_carsalepredict() {
        System.out.println(carsaleanysis.carsalepredict("奥迪A6L"));
    }

    //已测试成功1.0.0
    @Test
    public void test_selectAllCarName() {
        System.out.println(carsaleanysis.selectAllCarName());
    }

    //已测试成功1.0.0
    @Test
    public void test_areaAnysis() {
        System.out.println(carsaleanysis.areaAnysis());
    }

    //已测试成功1.0.0
    @Test
    public void test_sexAnysis(){
        System.out.println(carsaleanysis.sexAnysis());
    }

    //已测试成功1.0.0
    @Test
    public void test_colorAnysis(){
        System.out.println(carsaleanysis.colorAnysis());
    }
}
