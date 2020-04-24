package com.car.dao;

import com.car.bean.CarBean;
import com.car.bean.OrderItem;
import com.car.bean.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.apache.ibatis.type.JdbcType;
import org.junit.Test;
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
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER,
                            select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    one=@One(fetchType=FetchType.EAGER,
                            select="com.car.dao.CarDao.findParmiryKey"))

    })
    OrderItem selectByPrimaryKey(@Param("id") Integer id);



    //通过 userid 查询 订单信息
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where userid = #{userid,jdbcType=INTEGER}"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER,
                            select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER,
                            select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByUserid(@Param("userid") Integer uid);



    @Select({
            "select ",
            "* ",
            "from orderitem"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER,
                            select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER,
                            select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectAll();


    //通过status查询 订单信息
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where status = #{status,jdbcType=VARCHAR} order by ordertime desc"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER,
                            select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER,
                            select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByStatus(@Param("status") String status);


    //根据时间段查询订单
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where ordertime between #{begintime} and #{endtime} order by ordertime desc"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER, select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER, select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByTime(@Param("begintime") String begintime,@Param("endtime") String endtime);


    @Select({
            "select",
            "* ",
            "from orderitem",
            "where status = #{status} and ordertime between #{begintime} and #{endtime} order by ordertime desc"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER, select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER, select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByTime2(@Param("status")String status,@Param("begintime") String begintime,@Param("endtime") String endtime);


    @Select({
            "select",
            "* ",
            "from orderitem",
            "where STATUS IN ('已退款','已退货退款','已评价','管理员已评价') and ordertime between #{begintime} and #{endtime} order by ordertime desc"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER, select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER, select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> allokByTime(@Param("begintime") String begintime,@Param("endtime") String endtime);



    //通过userid carid 查询 单个订单附带的信息
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where userid = #{userid,jdbcType=INTEGER} and carid = #{carid,jdbcType=INTEGER}"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER,
                            select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER,
                            select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectByUseridAndCarId(@Param("userid") Integer uid, @Param("carid") Integer carid);


    //查询所有状态为 已退款 已退货退款 已评价 管理员已评价 的所有订单
    @Select({
            "select",
            "* ",
            "from orderitem",
            "where STATUS IN ('已取消','已退款','已退货退款','已评价','管理员已评价')"
    })
    @Results({
            @Result(property="user",javaType= User.class,column="userid",
                    one=@One(fetchType= FetchType.EAGER,
                            select="com.car.dao.UserDao.findById")),

            @Result(property="car",javaType= CarBean.class,column="carid",
                    many=@Many(fetchType=FetchType.EAGER,
                            select="com.car.dao.CarDao.findParmiryKey"))

    })
    List<OrderItem> selectAllOK();

    //结束订单
    @Update("update orderitem set status = '已结束',finaltime= #{finaltime} ,closetime = #{closetime} where id = #{id}")
    int closeOrder(@Param("finaltime") Date finaltime,
                   @Param("closetime") Date closetime, @Param("id") Integer id);

    //结束所有状态为 的订单
    @Update("update orderitem set status = '已结束',finaltime= #{finaltime} ,closetime = #{closetime} " +
            "where STATUS IN ('已退款','已退货退款','已评价','管理员已评价')")
    int closeallok(@Param("finaltime") Date finaltime,@Param("closetime") Date closetime);

    //修改订单状态
    @Update("update orderitem set status = #{status} where id = #{id}")
    int updateStatus(@Param("status") String status, @Param("id") Integer id);

    //发货
    @Update("update orderitem set status = #{status},sendtime= #{sendtime} where id = #{id}")
    int fahuoone(@Param("status") String status, @Param("sendtime")Date sendtime ,@Param("id") Integer id);

    //一键发货
    @Update("update orderitem set status = '待收货',sendtime= #{sendtime} where status = '待发货' and shouhuoren IS NOT NULL" +
            " and shouhuophone IS NOT NULL and shouhuodizi IS NOT NULL " +
            " and wuliuname IS NOT NULL and wuliu IS NOT NULL")
    int fahuoall(@Param("sendtime")Date sendtime);


    @Update("update orderitem set carid = #{carid},carnum = #{carnum},totalprice = #{totalprice}," +
            "shouhuoren = #{shouhuoren},shouhuophone = #{shouhuophone},shouhuodizi = #{shouhuodizi}," +
            "wuliuname = #{wuliuname},wuliu = #{wuliu}" +
            " where id = #{id}")
    int modifyOrder(
            @Param("carid") Integer carid,@Param("carnum") Integer carnum,@Param("totalprice") Integer totalprice,
            @Param("shouhuoren")String shouhuoren,@Param("shouhuophone") String shouhuophone,@Param("shouhuodizi") String shouhuodizi,
            @Param("wuliuname")String wuliuname,@Param("wuliu") String wuliu, @Param("id") Integer id
    );

    @Delete("delete from orderitem where id = #{id}")
    int delById(@Param("id") Integer id);

    //删除已结束订单
    @Delete("delete from orderitem WHERE status in '订单结束'")
    int delAllFinal();

}
