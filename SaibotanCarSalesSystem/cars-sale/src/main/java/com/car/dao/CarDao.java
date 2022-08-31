package com.car.dao;

import com.car.bean.Car;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CarDao {
    @Select("select * from car order by collect_number desc,sales_number desc limit 4")
    public List<Car> List_Good_cars_tui_jian();

    @Select("select * from car order by sales_number desc, collect_number desc limit 8")
    public List<Car> List_Num_cars_tuijian();

    @Select("select * from car where id=#{id}")
    public Car findCarId(@Param("id") String id);

    @Select("select * from car where id=#{id}")
    public Car findParmiryKey(@Param("id") Integer id);

    //库存数减1，销售数加1
    @Update("update car set sales_number = sales_number + 1,collect_number = collect_number-1  where id = #{id} ")
    public int saleCar(@Param("id") int id);

    @Select("select * from car where cartype=#{cartype}")
    public List<Car> listCarBytype(@Param("cartype") String cartype);

}
