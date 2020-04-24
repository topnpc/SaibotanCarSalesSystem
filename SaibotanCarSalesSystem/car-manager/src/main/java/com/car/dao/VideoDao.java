package com.car.dao;

import com.car.bean.VideoBean;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface VideoDao {

    //add1
    @Select("select count(*) from video")
    public int videoNum();



    @Select("select * from video")
    public List<VideoBean> ListVideo();

    @Select("insert into video(videoname,videourl,videocoverurl) values(#{videoname},#{videourl},#{videocoverurl})")
    public void insertVideo(@Param("videoname") String videoname, @Param("videourl") String videourl, @Param("videocoverurl") String videocoverurl);

    @Select("insert into video(id,videoname,videourl,videocoverurl) values(#{id},#{videoname},#{videourl},#{videocoverurl})")
    public void insertVideoBegin(@Param("id") int id, @Param("videoname") String videoname, @Param("videourl") String videourl, @Param("videocoverurl") String videocoverurl);

    @Select("delete from video where id=#{id}")
    public void deleteVideo(@Param("id") int id);

    @Select("update video set videoname=#{videoname},videourl=#{videourl},videocoverurl=#{videocoverurl} where id=#{id}")
    public void updataVideo(@Param("id") int id, @Param("videoname") String videoname, @Param("videourl") String videourl, @Param("videocoverurl") String videocoverurl);
}
