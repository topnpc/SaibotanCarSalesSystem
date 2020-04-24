package com.car.echartsdemo.dao;

import com.car.echartsdemo.entity.CarAreaSale;
import com.car.echartsdemo.entity.CarColorSale;
import com.car.echartsdemo.entity.CarMonthSale;
import com.car.echartsdemo.entity.CarSexSale;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface CarMonthSaleDao {
    //查询汽车12个月的销量
    //按理说，一个汽车，年销量只有一个，不用List也行，为了防止出错，用List稳妥
    @Select("SELECT carName,perMonthAmonunt FROM carssale where carName = #{carName}")
    public List<CarMonthSale> selectAllByCarName(@Param("carName") String carName);

    //查询所有
    @Select("SELECT carName,perMonthAmonunt FROM carssale")
    public List<CarMonthSale> selectAll();

    //将最后一个预测出来的月销量，增加到数据库,也可以不写，因为是预测的也不是真实的
    //每次要预测的时候运行一下程序就行了

    //查询所有的汽车名字
    @Select("SELECT carName FROM carssale ")
    public List<String> selectAllCarName();

    //地区销量分析
    @Select("SELECT adress,totalYearamount FROM adressyearamount")
   //原想使用Map<String,Integer>直接封装，但是没有这种用法，还得写拦截器，所以还是新建一个类来映射好了
    public List<CarAreaSale> areaAnysis();

    //性别销量分析
    @Select("SELECT sex,totalYearAmount FROM sexyearamount")
    public List<CarSexSale> sexAnysis();


    //颜色销量分析
    @Select("SELECT carColor,amount FROM coloryearamount")
    public List<CarColorSale> coloeAnysis();


}
