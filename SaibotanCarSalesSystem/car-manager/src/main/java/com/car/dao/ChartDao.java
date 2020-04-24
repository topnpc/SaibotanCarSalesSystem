package com.car.dao;

import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;

@Mapper
@Repository
public interface ChartDao {
    @Select("select `name` from car order by sales_number DESC limit 6")
    ArrayList<String> CarSalesName();

    @Select("select sales_number from car order by sales_number DESC limit 6")
    ArrayList<String> CarSalesNum();
}
