package com.car.test;

import com.car.CarsSaleApplication;
import com.car.dao.UserDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest(classes = CarsSaleApplication.class)
@RunWith(SpringRunner.class)
public class TestUserDao {
    @Autowired
    private UserDao userDao;

    @Test
    public void test_findById() {
        System.out.println(userDao.findById(33));
    }

}
