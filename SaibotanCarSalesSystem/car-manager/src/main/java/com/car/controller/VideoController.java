package com.car.controller;

import com.car.service.VideoService;
import com.car.util.FileUtil;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class VideoController {
    @Autowired
    VideoService service;


    @GetMapping("/video.do")
    @ResponseBody
    public Result video(){

        return service.video();
    }


    //add1
    @GetMapping("/videopageselect.do")
    @ResponseBody
    public Result findAllVideoByPage(@RequestParam(name="pageNum",defaultValue = "1")Integer pageNum){
        System.out.println("pagenum="+pageNum);
        return service.findAllVideoByPage(pageNum);
    }



//    @GetMapping("/deletevideo.do")
//    @ResponseBody
//    public Result deleteVideo(int id){
//
//        return service.deleteVideo(id);
//    }

    @PostMapping("/deletevideo.do")
    @ResponseBody
    public Result deleteVideo(int id){

        return service.deleteVideo(id);
    }

    @PostMapping("/insertvideo.do")
    @ResponseBody
    public Result insertVideo(String videoname, @RequestPart("videourl")MultipartFile videourl,@RequestPart("videocoverurl")MultipartFile videocoverurl){
        String tempVideoName= FileUtil.FileUpload(videourl,"D:\\video\\","video");
        String tempCoverName= FileUtil.FileUpload(videocoverurl,"D:\\video\\","cover");
        System.out.println("tempVideoName："+tempVideoName);
        return service.insertVideo(videoname,"/video/"+tempVideoName,"/video/"+tempCoverName);
    }

    @PostMapping("/updatevideo.do")
    @ResponseBody
    public Result updataVideo(int id,String videoname, @RequestPart("videourl")MultipartFile videourl,@RequestPart("videocoverurl")MultipartFile videocoverurl){
        String tempVideoName= FileUtil.FileUpload(videourl,"D:\\video\\","video");
        String tempCoverName= FileUtil.FileUpload(videocoverurl,"D:\\video\\","cover");
        return service.updataVideo(id,videoname,"/video/"+tempVideoName,"/video/"+tempCoverName);
    }


}
