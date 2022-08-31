package com.car.dao;

import com.car.bean.Banner;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface BannerDao {

    @Select("select * from banner")
    public List<Banner> listAll();
}
