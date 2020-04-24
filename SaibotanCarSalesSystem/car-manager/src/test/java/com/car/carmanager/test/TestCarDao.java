package com.car.carmanager.test;

import com.car.dao.CarDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestCarDao {
    @Autowired
    private CarDao carDao;

    @Test
    public void test_selectAll(){
        System.out.println(carDao.selectAll());
    }

    @Test
    public void test_selectByname(){
        System.out.println(carDao.selectByName("宝马BMWX5"));
    }

    @Test
    public void test_deleteCar(){
        System.out.println(carDao.deleteCar("车的名字"));
    }
//
//    @Test
//    public void test_update(){
//
//    }
//
//    public void test_insertCar(){
//
//    }
//
//    public void test_selectTypeId(){
//        System.out.println(carDao.selectByTypeid(1));
//    }
//
//    public void test_updateCartype(){
//    }
//




















}
