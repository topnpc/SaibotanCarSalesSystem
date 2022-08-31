package com.car.controller;

import com.car.service.ShopCarService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ShopCarController {
    @Autowired
    private ShopCarService service;

    @GetMapping("/shopcar/add")
    @ResponseBody
    public Result addshop(Integer uid, Integer carid, Integer carnum, Integer totalprice) {
        return service.addshop(uid, carid, carnum, totalprice);
    }

    @GetMapping("/shopcar/del")
    @ResponseBody
    public Result delshop(Integer id) {
        return service.delshop(id);
    }

    @GetMapping("/shopcar/dels")
    @ResponseBody
    public Result delshops(Integer[] ids) {
        return service.delshops(ids);
    }

    @GetMapping("/shopcar/findbyuid")
    @ResponseBody
    public Result findByuid(Integer uid) {
        return service.findByuid(uid);
    }


}

