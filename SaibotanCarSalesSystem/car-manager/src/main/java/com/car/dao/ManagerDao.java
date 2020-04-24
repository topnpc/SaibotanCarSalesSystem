package com.car.dao;

import com.car.bean.ManagerBean;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ManagerDao {
    @Select("select * from manager where username=#{username}")
    public ManagerBean loginByUsername(String username);
}
