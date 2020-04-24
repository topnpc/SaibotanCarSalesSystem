package com.car.dao;

import com.car.bean.Main_nav;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface NavDao {

    @Select("select navId,navName,navUrl  from main_nav")
    public List<Main_nav> findAllNav();

    @Select("select count(*) from main_nav")
    public int navNum();

    @Insert("insert into main_nav(navName,navUrl) values(#{navName},#{navUrl})")
    public int addNav(@Param("navName") String navName, @Param("navUrl") String navUrl);

    @Delete("delete from main_nav where navId=#{id}")
    public int deleteNavById(@Param("id") Integer id);

    @Update("update main_nav set navName=#{navName},navUrl=#{navUrl} where navId=#{id}")
    public int updateNavById(@Param("navName") String navName, @Param("navUrl") String navUrl, @Param("id") Integer id);

}
