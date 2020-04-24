package com.car.carmanager.test;

import com.car.dao.BannerDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest
public class BannerDaoTest<test> {
    @Autowired
    private BannerDao bannerDao;

    @Test
    public void test_listAll(){
        System.out.println(bannerDao.listAll().size());
    }

    @Test
    public void test_selectById(){
        System.out.println(bannerDao.selectById(1));
    }

    @Test
    public void test_selectByNameLike(){
        System.out.println(bannerDao.selectByNameLike("图片"));
    }

    @Test
    public void test_delBannerByName(){
        int flag = bannerDao.delBannerByName("图片6");
        if(flag==1){
            System.out.println(true);
        }
    }

    @Test
    public void test_updateBannerById(){
        int flag = bannerDao.updateBannerById(
                "图片6",
                "/img/2019-09-20-15-59-50-5d",
                "sss",
                6
        );
        if(flag==1){
            System.out.println(true);
        }
    }

}
