package com.car.dao;

import com.car.bean.Car;
import com.car.bean.OrderItem;
import com.car.bean.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Mapper
@Repository
public interface OrderItemDao {

    //通过订单id查询 订单附带的信息
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where id = #{id,jdbcType=INTEGER}"
    })
    @Results({

            @Result(property = "user", javaType = User.class, column = "userid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.UserDao.findById")),

            @Result(property = "car", javaType = Car.class, column = "carid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.CarDao.findParmiryKey"))

    })
    OrderItem selectByPrimaryKey(@Param("id") Integer id);


    //通过userid carid 查询 单个订单附带的信息
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where userid = #{userid,jdbcType=INTEGER} and carid = #{carid,jdbcType=INTEGER}"
    })
    @Results({

            @Result(property = "user", javaType = User.class, column = "userid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.UserDao.findById")),

            @Result(property = "car", javaType = Car.class, column = "carid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByUseridAndCarId(@Param("userid") Integer uid, @Param("carid") Integer carid);


    //通过 userid 查询 订单信息
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where userid = #{userid,jdbcType=INTEGER}"
    })
    @Results({

            @Result(property = "user", javaType = User.class, column = "userid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.UserDao.findById")),

            @Result(property = "car", javaType = Car.class, column = "carid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByUserid(@Param("userid") Integer uid);


    //通过status查询 订单信息
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where status = #{status,jdbcType=VARCHAR} and userid = #{userid} order by ordertime desc"
    })
    @Results({
            @Result(property = "user", javaType = User.class, column = "userid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.UserDao.findById")),

            @Result(property = "car", javaType = Car.class, column = "carid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByStatusAndUid(@Param("status") String status, @Param("userid") Integer userid);


    //根据汽车名称 userid 模糊查询 订单 需要用到左外连接
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where userid = #{userid} order by ordertime desc"
    })
    @Results({
            @Result(property = "user", javaType = User.class, column = "userid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.UserDao.findById")),

            @Result(property = "car", javaType = Car.class, column = "carid",
                    one = @One(fetchType = FetchType.EAGER,
                            select = "com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> findByCarNameUid(Integer userid, String carname);


    //增加一条订单信息，批量操作写在controller或service
    //carid userid 要在数据库能找到，事务和逻辑写在service
    @Insert("insert into orderitem " +
            "(orderuuid, carid, userid, carnum, message,totalprice,status,ordertime) " +
            "values " +
            "(#{orderuuid},#{carid},#{userid},#{carnum},#{message},#{totalprice},'待付款',#{ordertime})")
    //在插入order到数据库时返回自增ID
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int addOrderItem(OrderItem item);

    //修改订单状态
    @Update("update orderitem set status = #{status} where id = #{id}")
    int updateStatus(@Param("status") String status, @Param("id") Integer id);

    //购买,主要是修改订单状态为已付款，并添加支付时间
    @Update("update orderitem set status = '待发货',paytime = #{paytime} where id = #{id}")
    int fukuan(@Param("paytime") Date paytime, @Param("id") Integer id);

    @Delete("delete from orderitem where id = #{id}")
    int delByPrimarykey(@Param("id") Integer id);

    //用户评价
    @Update("update orderitem set status = '已评价',evaluate = #{evaluate} where id = #{id}")
    int pinjiaone(@Param("evaluate") String evaluate, @Param("id") Integer id);

    //用户取消订单
    @Update("update orderitem set status = #{status},finaltime = #{finaltime},closetime = #{closetime} where id = #{id}")
    int quxiaoone(@Param("status") String status, @Param("finaltime") Date finaltime,
                  @Param("closetime") Date closetime, @Param("id") Integer id);


}
