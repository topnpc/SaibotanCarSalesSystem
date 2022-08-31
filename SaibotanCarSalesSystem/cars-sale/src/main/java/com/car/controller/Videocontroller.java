package com.car.controller;

import com.car.service.UserService;
import com.car.service.VideoService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Videocontroller {
    @Autowired
    VideoService service;


    @GetMapping("/video.do")
    @ResponseBody
    public Result video() {
        return service.video();
    }

}
