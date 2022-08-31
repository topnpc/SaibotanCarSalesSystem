package com.car.controller;

import com.car.service.Main_navService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Main_navsController {

    @Autowired
    Main_navService service;

    @GetMapping("/listAllMainNav.do")
    @ResponseBody
    public Result ListAllMainNav() {

        return service.listAll_MainNav();
    }
}
