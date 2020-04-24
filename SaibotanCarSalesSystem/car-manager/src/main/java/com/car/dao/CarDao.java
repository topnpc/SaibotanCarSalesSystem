package com.car.dao;

import com.car.bean.CarBean;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Mapper
@Repository
public interface CarDao {
    @Select("select * from car")
    public List<CarBean> selectAll();

//    @Select("select * from car where name like '%${text}%'")
//    public List<CarBean> selectByname(String name);

//    @Select("select * from car")
//    public List<CarBean> selectPage();

    @Select("select c.id,c.name,c.price,c.color,c.url,c.imgurl,t.typeid,c.sales_number,c.collect_number,\n" +
            "c.cartype,c.`describe` from cartype t LEFT JOIN car c on t.cartype=c.cartype WHERE c.name=#{name}")
    public CarBean selectByName(@Param("name") String name);

    @Delete("DELETE FROM car WHERE name = #{name}")
    public int deleteCar(@Param("name") String name);

    @Update("update car set name=#{rename} ,price=#{price} ,color=#{color},imgurl=#{imgurl},typeid=#{typeid},sales_number=#{sales_number},cartype=#{cartype},collect_number=#{collect_number},`describe`=#{describe}\n" +
            "where `name`=#{name}")
    public int update(@Param("rename") String rename, @Param("name") String name, @Param("price") String price, @Param("color") String color, @Param("describe") String describe, @Param("imgurl") String imgurl, @Param("typeid") int typeid, @Param("sales_number") int sales_number, @Param("collect_number") int collect_number, @Param("cartype") String cartype);

    @Select("SELECT * from car WHERE typeid=#{typeid}")
    public List<CarBean> selectByTypeid(@Param("typeid") Integer typeid);

    @Update("update car set cartype=#{typename} where typeid=#{typeid}")
    public int updateCartype(@Param("typeid")Integer typeid,@Param("typename")String typename);

    @Select("SELECT * from car WHERE name like '%${name}%'")
    public List<CarBean> selectBynameLike(@Param("name") String name);

    @Select("select count(*) from car")
    public int carNum();

    @Insert("insert into car(name,price,color,`describe`,url,imgurl,typeid,sales_number,collect_number,cartype) values(#{name},#{price},#{color},#{describe},#{url},#{imgurl},#{typeid},#{sales_number},#{collect_number},#{cartype})")
    public int insertCar(@Param("name") String name, @Param("price") String price, @Param("color") String color, @Param("describe") String describe, @Param("url") String url, @Param("imgurl") String imgurl, @Param("typeid") int typeid, @Param("sales_number") int sales_number, @Param("collect_number") int collect_number, @Param("cartype") String cartype);

    @Select("select name from car")
    public List<String> selectName();

    @Select("SELECT typeid from car")
    public ArrayList<Integer> selectTypeId();

    @Select("select * from car where id=#{id}")
    public CarBean findParmiryKey(@Param("id") Integer id);

    //用于追加购买数量的
    @Update("update car set sales_number = sales_number + #{num},collect_number = collect_number - #{num} where id = #{id}")
    public int saleadd(@Param("num") Integer num,@Param("id") Integer id);

    //用于取消购买或者减少购买数量
    @Update("update car set sales_number = sales_number - #{num},collect_number = collect_number + #{num} where id = #{id}")
    public int saledown(Integer num,@Param("id") Integer id);

}
