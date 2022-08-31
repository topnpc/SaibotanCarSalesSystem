package com.car.controller;

import com.car.dao.BannerDao;
import com.car.service.BannerService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BannerController {
    @Autowired
    private BannerService service;

    @GetMapping("/listAllBanner.do")
    @ResponseBody
    public Result ListAllBanner() {
        return service.listAll();
    }


}
