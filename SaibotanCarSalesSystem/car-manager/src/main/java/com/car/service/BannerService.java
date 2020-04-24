package com.car.service;

import com.car.bean.Banner;
import com.car.dao.BannerDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class BannerService {
    @Autowired
    private BannerDao bannerDao;
    private Result res = new Result();
    private int fla = 0;

    private Result check(int flag,Result result){
        if(flag==1){
            result.setCode(1);
            result.setMsg("成功");
        }else{
            result.setCode(-1);
            result.setMsg("失败");
        }
        result.setData(null);

        return result;
    }

    private Result check2(Object o,Result result){
        if(o != null){
            result.setCode(1);
            result.setMsg("查询成功");
        }else{
            result.setCode(-1);
            result.setMsg("查询失败");
        }
        result.setData(o);

        return result;
    }

    /**
     *封装一个对参数的检查，null 和 ''和'   '
     */
    public boolean checkParam(Object... args){
        for (Object o : args) {
            if(o==null){
                return false;
            }
        }
        return true;
    }

    //用于删除文件用的
    private boolean delFile(File file) {
        if (!file.exists()) {
            return false;
        }

        if (file.isDirectory()) {
            File[] files = file.listFiles();
            for (File f : files) {
                delFile(f);
            }
        }
        return file.delete();
    }




    public Result delBannerByName(String bannerName){
        this.fla = bannerDao.delBannerByName(bannerName);
        return this.check(fla,this.res);
    }

    //删除数据库信息时，应该把服务器中的图片删掉
    public Result delBannerById(Integer bannerId){
        Banner b = bannerDao.selectById(bannerId);
        String OrbannerUrl = b.getBannerUrl();
        this.fla = bannerDao.delBannerById(bannerId);
        if(fla==1){
            delFile(new File("D:\\images\\banner\\"+OrbannerUrl.substring(4)));
        }
        return this.check(fla,this.res);
    }

    //更新新图片地址，也应该把服务器原来的图片删掉
    public Result updateBannerById(String bannerName,String bannerUrl
            ,String bannerHref,Integer bannerId){
        //事先把原来的图片地址查出来，如果更新成功就删掉原来的图片
        Banner b = bannerDao.selectById(bannerId);
        String OrbannerUrl = b.getBannerUrl();

        this.fla = bannerDao.updateBannerById(bannerName,bannerUrl,bannerHref,bannerId);
        if(fla==1){
            delFile(new File("D:\\images\\banner\\"+OrbannerUrl.substring(4)));
        }

        return this.check(fla,this.res);
    }

    public Result updateBannerById2(String bannerName,String bannerHref,Integer bannerId){
        this.fla = bannerDao.updateBannerById2(bannerName,bannerHref,bannerId);
        return  this.check(fla,this.res);
    }

    public Result addBanner(String bannerName, String bannerUrl, String bannerHref){
        this.fla = bannerDao.addBanner(bannerName,bannerUrl,bannerHref);
        return this.check(fla,this.res);
    }

    public Result selectById(Integer bannerId){
        Banner banner = bannerDao.selectById(bannerId);
        return this.check2(banner,this.res);
    }


    public Result listAll(){
        List<Banner> banners = bannerDao.listAll();
        return this.check2(banners,this.res);
    }

    public Result selectByNameLike(String bannerName){
        List<Banner> banners = bannerDao.selectByNameLike("%"+bannerName+"%");
        return this.check2(banners,this.res);
    }










}
