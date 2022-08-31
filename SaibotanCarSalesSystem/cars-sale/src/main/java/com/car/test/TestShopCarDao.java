package com.car.test;

import com.car.CarsSaleApplication;
import com.car.dao.ShopCarDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

@SpringBootTest(classes = CarsSaleApplication.class)
@RunWith(SpringRunner.class)
public class TestShopCarDao {
    @Autowired
    private ShopCarDao shopCarDao;

    @Test
    public void test_addshop() {
        System.out.println(shopCarDao.addshop(1, 1, 1, 122, new Date()));
    }

    @Test
    public void test_delshop() {
        System.out.println(shopCarDao.delshop(1));
    }
}

