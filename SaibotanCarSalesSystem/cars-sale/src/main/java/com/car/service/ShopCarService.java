package com.car.service;

import com.car.bean.ShopCar;
import com.car.dao.ShopCarDao;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class ShopCarService {
    @Autowired
    private ShopCarDao shopCarDao;
    private Result res = new Result();
    private int fla = 1;

    public Result addshop(Integer uid, Integer carid, Integer carnum, Integer totalprice) {
        int flag = shopCarDao.addshop(uid, carid, carnum, totalprice, new Date());
        return Result.check(flag, this.res);
    }

    //删除单个
    public Result delshop(Integer id) {
        int flag = shopCarDao.delshop(id);
        return Result.check(flag, this.res);
    }


    //批量删除,如果有一个出错，怎么控制事务？
    public Result delshops(Integer[] ids) {
        int flag = 0;
        for (Integer id : ids) {
            flag = shopCarDao.delshop(id);
        }
        return Result.check(flag, this.res);
    }


    public Result findByuid(Integer uid) {
        List<ShopCar> shopcars = shopCarDao.findByuid(uid);
        return Result.check2(this.fla, shopcars, this.res);
    }


}

