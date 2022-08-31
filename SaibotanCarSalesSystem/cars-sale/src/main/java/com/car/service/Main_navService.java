package com.car.service;

import com.car.bean.Main_nav;
import com.car.dao.Main_navDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Main_navService {
    @Autowired
    Main_navDao dao;

    public Result listAll_MainNav() {
        Result result = new Result();

        List<Main_nav> main_navs = dao.listAll();
        if (main_navs == null) {
            result.setCode(ResultMsg.EMPTY);
            result.setMsg(ResultMsg.EMPTY_MSG);
            result.setData(null);
        } else {
            result.setCode(ResultMsg.OK);
            result.setMsg(ResultMsg.OK_MSG);
            result.setData(main_navs);
        }
        return result;
    }
}
