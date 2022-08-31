package com.car.dao;

import com.car.bean.Video;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface VideoDao {
    @Select("select * from video limit 1")
    public Video ListVideo();
}
