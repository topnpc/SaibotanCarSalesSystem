package com.car.controller;

import com.car.service.BannerService;
import com.car.util.FileUtil;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.util.Date;

@Controller
public class BannerController {
    @Autowired
    private BannerService bannerService;

    @GetMapping("/banner/list.do")
    @ResponseBody
    public Result ListAllBanner(){
        return bannerService.listAll();
    }

    @GetMapping("/banner/findById.do")
    @ResponseBody
    public Result selectById(Integer bannerId){
        return bannerService.selectById(bannerId);
    }

    @GetMapping("/banner/findByName.do")
    @ResponseBody
    public Result selectByNameLike(String bannerName){
        return bannerService.selectByNameLike(bannerName);
    }

    @GetMapping("/banner/name/del.do")
    @ResponseBody
    public Result delBannerByName(String bannerName){

        return bannerService.delBannerByName(bannerName);
    }

    @PostMapping("/banner/id/del.do")
    @ResponseBody
    public Result delBannerById(Integer bannerId){
        return bannerService.delBannerById(bannerId);
    }

    @PostMapping("/banner/update.do")
    @ResponseBody
    public Result updateBannerById(String bannerName,@RequestPart("bannerUrl")MultipartFile bannerUrl,String bannerHref,int bannerId){
        String tempFileName = FileUtil.FileUpload(bannerUrl, "D:\\images\\banner", "aa");
        System.out.println("tempFileName:"+tempFileName);
        return  bannerService.updateBannerById(bannerName,"/img/"+tempFileName,bannerHref,bannerId);
    }

    @PostMapping("/banner/update2.do")
    @ResponseBody
    public Result updateBannerById2(String bannerName,String bannerHref, int bannerId){
        return bannerService.updateBannerById2(bannerName,bannerHref,bannerId);
    }


    @PostMapping("/banner/add.do")
    @ResponseBody
    public  Result addBanner(String bannerName, @RequestPart("bannerUrl")MultipartFile bannerUrl, String bannerHref){
        String tempFileName = FileUtil.FileUpload(bannerUrl, "D:\\images\\banner", "aa");
        System.out.println("tempFileName:"+tempFileName);
        return  bannerService.addBanner(bannerName,"/img/"+tempFileName,bannerHref);
    }





}
