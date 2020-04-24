package com.car.controller;

import com.car.service.UserService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Usercontroller {
    @Autowired
    UserService service;

    @GetMapping("/user/id")
    @ResponseBody
    public Result findById(Integer id){
        return service.findById(id);
    }

    @GetMapping("/tologin.do")
    public  String toLogin(){
        System.out.println("login page");
        return "login.html";
    }

}
