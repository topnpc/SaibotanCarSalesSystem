package com.car.dao;

import com.car.bean.CarType;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Mapper
@Repository
public interface CarTypeDao {

    @Insert("insert cartype(typeid,cartype,typedescribe) values(#{typeid},#{cartype},#{typedestribe})")
    public int addCarType(@Param("typeid") Integer typeid, @Param("cartype") String cartype, @Param("typedestribe") String cardestribe);

    @Select("SELECT typeid,cartype,typedescribe from cartype")
    public ArrayList<CarType> selectCarType();

    @Select("SELECT cartype from cartype")
    public ArrayList<String> selectTypeName();

    @Select("SELECT typeid,cartype,typedescribe from cartype where typeid=#{typeid}")
    public CarType selectCarTypeByTypeid(Integer typeid);

    @Select("SELECT typeid from cartype")
    public ArrayList<Integer> selectTypeId();

    @Select("SELECT typeid from cartype where cartype = #{cartype}")
    public int selectTypeid(@Param("cartype") String cartype);

    @Delete("delete from cartype where typeid=#{typeid}")
    public int deleteType(@Param("typeid") Integer type);

    @Update("update cartype typedescribe set cartype=#{cartype},typedescribe=#{typedescribe} where typeid=#{typeid}")
    public int updateBytypeId(@Param("typeid") Integer type, @Param("typedescribe") String typedescribe, @Param("cartype") String typename);


}
