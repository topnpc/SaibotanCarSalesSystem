package com.car.dao;

import com.car.bean.Banner;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Mapper
@Repository
public interface BannerDao {

    @Select("select bannerId,bannerName,bannerUrl,bannerHref from banner")
     public List<Banner> listAll();

    @Select("select bannerId,bannerName,bannerUrl,bannerHref from banner where bannerId=#{bannerId}")
    public Banner selectById(@Param("bannerId") Integer bannerId);

    @Select("select bannerId,bannerName,bannerUrl,bannerHref from banner where bannerName like #{bannerName}")
    public List<Banner> selectByNameLike(@Param("bannerName") String bannerName);

    @Insert("insert into " +
            "banner " +
            "(bannerName,bannerUrl,bannerHref) values " +
            "(#{bannerName},#{bannerUrl},#{bannerHref})")
    public int addBanner(
            @Param("bannerName") String bannerName,
            @Param("bannerUrl") String bannerUrl,
            @Param("bannerHref") String bannerHref
            );

    @Delete("delete from " +
            "banner " +
            "where " +
            "bannerName=#{bannerName}")
    public int delBannerByName(@Param("bannerName") String bannerName);

    @Delete("delete from " +
            "banner " +
            "where " +
            "bannerId=#{bannerId}")
    public int delBannerById(@Param("bannerId") Integer bannerId);

    @Update("update " +
            "banner " +
            "set " +
            "bannerName =#{bannerName}," +
            "bannerUrl=#{bannerUrl}," +
            "bannerHref =#{bannerHref} " +
            "where " +
            "bannerId = #{bannerId}")
    public int updateBannerById(
            @Param("bannerName") String bannerName,
            @Param("bannerUrl") String bannerUrl,
            @Param("bannerHref") String bannerHref,
            @Param("bannerId") int bannerId
            );

    @Update("update " +
            "banner " +
            "set " +
            "bannerName =#{bannerName}," +
            "bannerHref =#{bannerHref} " +
            "where " +
            "bannerId = #{bannerId}")
    public int updateBannerById2(
            @Param("bannerName") String bannerName,
            @Param("bannerHref") String bannerHref,
            @Param("bannerId") int bannerId
    );

}
