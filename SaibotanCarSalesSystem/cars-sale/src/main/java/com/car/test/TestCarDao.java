package com.car.test;

import com.car.CarsSaleApplication;
import com.car.dao.CarDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest(classes = CarsSaleApplication.class)
@RunWith(SpringRunner.class)
public class TestCarDao {
    @Autowired
    private CarDao carDao;

    @Test
    public void test_findById() {
        System.out.println(carDao.findCarId("10"));
    }

}
