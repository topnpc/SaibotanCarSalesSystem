package com.car.test;

import com.car.CarsSaleApplication;
import com.car.dao.*;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest(classes = CarsSaleApplication.class)
@RunWith(SpringRunner.class)
public class TestDao {
    @Autowired
    UserDao dao;

    @Autowired
    Main_navDao navDao;

    @Autowired
    BannerDao banDao;

    @Autowired
    CarDao carDao;


    @Test
    public void testUserDao() {
        System.out.println(dao.LoginByUsername("aa"));
    }

    @Test
    public void testUserDao2() {
        dao.Register("xiang", "xiang");
    }

    @Test
    public void testUserDao3() {
        dao.deleteById(28);
    }

    @Test
    public void testUserDao4() {
        dao.updateById("aaaaaaa", "aaaaaaaaaa", "男", 27);
    }

    @Test
    public void testMain_dao() {

        System.out.println(navDao.listAll());
    }

    @Test
    public void testQueryBanner() {
        System.out.println(banDao.listAll());
    }

    @Test
    public void testCar01() {
        System.out.println(carDao.List_Good_cars_tui_jian());
    }

    @Autowired
    VideoDao videoDao;

    @Test
    public void testVideo() {
        System.out.println(videoDao.ListVideo());
    }
}
