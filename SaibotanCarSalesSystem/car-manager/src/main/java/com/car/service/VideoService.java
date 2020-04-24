package com.car.service;

import com.car.bean.VideoBean;
import com.car.dao.VideoDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;

@Service
public class VideoService {

    @Autowired
    VideoDao dao;



    public Result insertVideo(String videoname, String videourl, String videocoverurl){
        dao.insertVideo(videoname,videourl,videocoverurl);
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        //result.setMsg(ResultMsg.);
        //result.setData(null);
        System.out.println(result);
        return result;

    }

    public Result updataVideo(int id, String videoname, String videourl, String videocoverurl){
        dao.updataVideo(id,videoname,videourl,videocoverurl);
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        //result.setMsg(ResultMsg.OK_MSG);
        //result.setData(null);

        return result;

    }

    public Result deleteVideo(int id){
        dao.deleteVideo(id);
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        //result.setMsg(ResultMsg.OK_MSG);
        //result.setData(null);

        return result;

    }

    public Result video(){
        List<VideoBean> list = dao.ListVideo();
        Result result = new Result();
        result.setCode(ResultMsg.OK);
        //result.setMsg(ResultMsg.OK_MSG);
        //result.setData(videoBeam);
        return result;

    }


    //add1
    public Result findAllVideoByPage(Integer pageNum){

        Result result = new Result();

        if (StringUtils.isEmpty(pageNum)) {
            result.setCode(ResultMsg.PAGE_RESULT_IS_NULL);
            result.setMsg(ResultMsg.PAGE_RESULT_IS_NULLMSG);
            return result;
        }
        int videoNum=dao.videoNum();
        //一页显示一个
        PageHelper.startPage(pageNum, 3);
        List<VideoBean> videos = dao.ListVideo();

        HashMap<String, Object> map = new HashMap<>();
        map.put("videoNum",videoNum);
        map.put("data",videos);
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.Video_SELECT_SUCCESS);
        result.setData(map);
        return result;
    }
}
