package com.car.controller;

import com.car.dao.ChartDao;
import com.car.service.ChartService;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;

@Controller
public class ChartController {

    @Autowired
    ChartService service;

    @GetMapping("/charts/salesnum")
    @ResponseBody
    public Result CarSalesCharts(){
      return service.CarSalesCharts();
    }


}
