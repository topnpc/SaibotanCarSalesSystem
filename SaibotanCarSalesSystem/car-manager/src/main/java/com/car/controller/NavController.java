package com.car.controller;

import com.car.service.ManagerService;
import com.car.service.NavService;
import com.car.util.Result;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Controller
public class NavController {
    @Autowired
    NavService service;

//    @GetMapping("/toNavUpdate.do")
//    @ResponseBody
//    public Result toNavUpdate(HttpSession session){
//        session
//        return service.findAllNavByPage(pageNum);
//    }

    @GetMapping("/pageselect.do")
    @ResponseBody
    public Result findAllNavByPage(@RequestParam(name="pageNum",defaultValue = "1")Integer pageNum){
        System.out.println("pagenum="+pageNum);
        return service.findAllNavByPage(pageNum);
    }

    @PutMapping("/navadd.do")
    @ResponseBody
    public Result addNavById(String navName,String navUrl){
        System.out.println("进入nav添加方法，navName="+navName+"navUrl="+navUrl);
        return service.addNavById(navName,navUrl);
    }

    @PostMapping("/navupdate.do")
    @ResponseBody
    public Result updateNavById(String navName,String navUrl,Integer id){
        return service.updateNavById(navName,navUrl,id);
    }

    @DeleteMapping("/navdelete.do")
    @ResponseBody
    public Result deleteNavById(Integer id){
        return service.deleteNavById(id);
    }
}
