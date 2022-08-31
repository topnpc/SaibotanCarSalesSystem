package com.car.service;

import com.car.bean.Car;
import com.car.bean.Video;
import com.car.dao.CarDao;
import com.car.dao.VideoDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {

    @Autowired
    VideoDao dao;

    public Result video() {
        Video video = dao.ListVideo();
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.OK_MSG);
        result.setData(video);
        return result;

    }
}
