package com.car.controller;

import com.car.service.ManagerService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ManagerController {
    @Autowired
    ManagerService userService;

    /**
     * 管理员用户登录
     * @param username 用户名
     * @param password 密码
     * @return 信息结果类
     */
    @ResponseBody
    @PostMapping("/login.do")
    public Result login(String username,String password){
        return userService.login(username,password);
    }
}
