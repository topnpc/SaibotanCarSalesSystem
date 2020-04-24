package com.car.service;

import com.car.bean.Main_nav;
import com.car.dao.ChartDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class ChartService {

    @Autowired
    ChartDao dao;

    public Result CarSalesCharts(){
        Result result = new Result();
        ArrayList<String> carName = dao.CarSalesName();
        ArrayList<String> carSalesNum = dao.CarSalesNum();
        HashMap<String, Object> map = new HashMap<>();
        map.put("carName",carName);
        map.put("carSalesNum",carSalesNum);
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.SUCCESSS_MSG);
        result.setData(map);
        return result;
    }


}
