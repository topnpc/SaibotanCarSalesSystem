package com.car.carmanager.test;

import com.car.bean.OrderItem;
import com.car.dao.OrderItemDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TestOrderDao {
    @Autowired
    private OrderItemDao orderdao;

    @Test
    public void test_selectByStatus(){
        System.out.println(orderdao.selectByStatus("已付款"));
    }

    @Test
    public void test_selectByTime(){
        System.out.println(orderdao.selectByTime("2018-10-10 10:09:21","2019-11-01 06:41:24"));
    }

    @Test
    public void test_fahuoone(){
        System.out.println(orderdao.fahuoone("已发货",new Date(),89));
    }

}
