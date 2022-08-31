package com.car.dao;

import com.car.bean.Main_nav;
import com.car.bean.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface Main_navDao {

    @Select("select * from main_nav")
    public List<Main_nav> listAll();
}
