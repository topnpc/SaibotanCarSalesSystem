package com.car.carmanager;

import com.car.bean.CarBean;
import com.car.controller.CarController;
import com.car.controller.ManagerController;
import com.car.dao.CarDao;
import com.car.dao.ManagerDao;
import com.car.service.CarService;
import com.car.service.ManagerService;
import com.car.util.PageRequest;
import com.car.util.PageResult;
import com.github.pagehelper.PageInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CarManagerApplicationTests {
    @Autowired
    ManagerDao managerDao;

    @Autowired
    ManagerController managerController;

    @Autowired
    ManagerService managerService;


    @Test
    public void contextLoads() {

 //       System.out.println(managerDao.loginByUsername("xm"));
        System.out.println(managerController.login("xm","321"));
    }

//    @Autowired
//    CarController carController;
//    @Test
//    public void pageText(){
//        PageRequest pageRequest=new PageRequest(1,5);
//        System.out.println(carController.findPage(pageRequest));
//    }
    @Autowired
    CarDao carDao;



//    @Test
//    public void selectText(){
//        CarService carService=new CarService();
//        PageRequest pageRequest = new PageRequest(1, 3);
//
//        PageInfo<CarBean> pageInfo = carService.getPageInfo(pageRequest);
//
//    }

}
