package com.car.dao;

import com.car.bean.Car;
import com.car.bean.ShopCar;
import com.car.bean.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Mapper
@Repository
public interface ShopCarDao {
    //商品加入购物车
    @Insert("insert into shopcar(uid,carid,carnum,totalprice,addtime) values (" +
            "#{uid},#{carid},#{carnum},#{totalprice},#{addtime})")
    public int addshop(
            @Param("uid") Integer uid,
            @Param("carid") Integer carid,
            @Param("carnum") Integer carnum,
            @Param("totalprice") Integer totalprice,
            @Param("addtime") Date addtime
    );

    //商品移除购物车
    @Delete("delete from shopcar where id = #{id}")
    public int delshop(@Param("id") Integer id);


    //查询购物车全部信息,顺带把商品信息查出来
    @Select({
            "select",
            "id, uid, carid, carnum, totalprice, addtime",
            "from shopcar",
            "where uid = #{uid,jdbcType=INTEGER}"
    })
    @Results({
            @Result(column = "id", property = "id", jdbcType = JdbcType.INTEGER, id = true),
            @Result(column = "uid", property = "uid", jdbcType = JdbcType.VARCHAR),
            @Result(column = "carid", property = "carid", jdbcType = JdbcType.INTEGER),
            @Result(column = "carnum", property = "carnum", jdbcType = JdbcType.INTEGER),

            @Result(property = "car", javaType = Car.class, column = "carid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.CarDao.findParmiryKey"))
    })
    public List<ShopCar> findByuid(@Param("uid") Integer uid);


}
