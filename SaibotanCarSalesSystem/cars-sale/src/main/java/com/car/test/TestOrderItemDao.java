package com.car.test;

import com.car.CarsSaleApplication;
import com.car.bean.OrderItem;
import com.car.dao.OrderItemDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

@SpringBootTest(classes = CarsSaleApplication.class)
@RunWith(SpringRunner.class)
public class TestOrderItemDao {
    @Autowired
    private OrderItemDao orderItemDao;

    @Test
    public void test_selectByPrimaryKey() {
        System.out.println(orderItemDao.selectByPrimaryKey(1));
    }

    @Test
    public void test_selectByUserid() {
        System.out.println(orderItemDao.selectByUserid(33));
    }


    @Test
    public void test_selectByUseridAndCarId() {
        System.out.println(orderItemDao.selectByUseridAndCarId(33, 10));
    }

    @Test
    public void test_addOrderItem() {
        OrderItem item = new OrderItem("123", 1, 1, 1, "aa", 34, new Date());
        int a = orderItemDao.addOrderItem(item);
        System.out.println(item);
    }

    @Test
    public void test_selectByStatusAndUid() {
        System.out.println(orderItemDao.selectByStatusAndUid("已付款", 38));
    }


    @Test
    public void test_pinjiaone() {
        System.out.println(orderItemDao.pinjiaone("haohaohao", 88));
    }

}
