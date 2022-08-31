package com.car.dao;

import com.car.bean.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserDao {

    @Select("select id,name,password,sex,address,paypassword,phone,realname,vip,money from user where id =#{id}")
    public User findById(@Param("id") Integer id);

    @Select("select * from user where name=#{username}")
    public User LoginByUsername(@Param("username") String username);

    @Select("select * from user where name=#{username}")
    public User FindByUsername(@Param("username") String username);

    @Insert("insert into user(name,password) values(#{username},#{password})")
    public Boolean Register(@Param("username") String username, @Param("password") String password);

    @Delete("delete from user where id=#{id}")
    public Boolean deleteById(int id);

    //支付时，账户余额变少
    @Update("update user set money = money - #{money} where id = #{id}")
    public int updatemoney(@Param("money") Integer money, @Param("id") Integer id);

    @Update("update user set name=#{username},password=#{password},sex=#{sex} where id=#{id}")
    public Boolean updateById(@Param("username") String username, @Param("password") String password, @Param("sex") String sex, @Param("id") int id);

    @Update("update user set sex=#{sex},password=#{password},address=#{address},paypassword=#{paypassword} where id=#{id}")
    public Boolean updateUserById(@Param("sex") String sex, @Param("password") String password, @Param("address") String address, @Param("paypassword") String paypassword, @Param("id") int id);

}
