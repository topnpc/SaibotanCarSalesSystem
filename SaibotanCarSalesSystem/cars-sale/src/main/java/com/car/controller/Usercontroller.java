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
    public Result findById(Integer id) {
        return service.findById(id);
    }

    @GetMapping("/tologin.do")
    public String toLogin() {
        System.out.println("login page");
        return "login.html";
    }

    /**
     * 登录
     *
     * @param username
     * @param userpass
     * @return
     */
    @PostMapping("/login.do")
    @ResponseBody
    public Result login(String username, String userpass) {
        return service.login(username, userpass);
    }

    @GetMapping("/toregister.do")
    public String toRegister() {
        System.out.println("login page");
        return "register.html";
    }

    /**
     * 注册
     *
     * @param username
     * @param userpass
     * @return
     */

    @PostMapping("/register.do")
    @ResponseBody
    public Result register(String username, String userpass) {
        System.out.println("username=" + username + "passwrd=" + userpass);
        System.out.println("正在注册");
        return service.register(username, userpass);
    }

    @PostMapping("/userupdate.do")
    @ResponseBody
    public Result userUpate(String sex, String password, String address, String paypassword, int id) {
        System.out.println("正在修改用户信息");
        return service.userUpdate(sex, password, address, paypassword, id);
    }

}
