package com.car.service;

import com.car.bean.Banner;
import com.car.dao.BannerDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BannerService {
    @Autowired
    private BannerDao dao;

    public Result listAll() {
        Result result = new Result();

        List<Banner> banners = dao.listAll();
        if (banners == null) {
            result.setCode(ResultMsg.EMPTY);
            result.setMsg(ResultMsg.EMPTY_MSG);
            result.setData(null);
        } else {
            result.setCode(ResultMsg.OK);
            result.setMsg(ResultMsg.OK_MSG);
            result.setData(banners);
        }
        return result;
    }

}
