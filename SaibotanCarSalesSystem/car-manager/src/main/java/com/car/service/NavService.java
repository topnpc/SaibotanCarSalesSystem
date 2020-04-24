package com.car.service;

import com.car.bean.Main_nav;
import com.car.dao.NavDao;
import com.car.util.Result;
import com.car.util.ResultMsg;

import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class NavService {
    @Autowired
    NavDao navDao;

    /**
     *
     * @param pageNum
     * @return
     */
    public Result findAllNavByPage(Integer pageNum){

        Result result = new Result();

        if (StringUtils.isEmpty(pageNum)) {
            result.setCode(ResultMsg.PAGE_SIZE_IS_NULL);
            result.setMsg(ResultMsg.PAGE_SIZE_IS_NULLMSG);
            return result;
        }
        int navNum=navDao.navNum();
        //一页显示一个
        PageHelper.startPage(pageNum, 3);
        List<Main_nav> nav = navDao.findAllNav();

        HashMap<String, Object> map = new HashMap<>();
        map.put("navNum",navNum);
        map.put("data",nav);
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.Nav_SELECT_SUCCESS);
        result.setData(map);
        return result;
    }

    /**
     * 添加nav
     * @param navName
     * @param navUrl
     * @return
     */
    public Result addNavById(String navName,String navUrl){

        Result result = new Result();

        if (StringUtils.isEmpty(navName)||StringUtils.isEmpty(navUrl)) {
            result.setCode(ResultMsg.ARGS_IS_NULL);
            result.setMsg(ResultMsg.ARGS_IS_NULLMSG);
            return result;
        }
        navDao.addNav(navName, navUrl);
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.SUCCESSS_MSG);
//        result.setData(nav);
        return result;
    }

    /**
     * 修改nav通过id
     * @param navName
     * @param navUrl
     * @param id
     * @return
     */

    public Result updateNavById(String navName,String navUrl,Integer id){

        Result result = new Result();

        if (StringUtils.isEmpty(navName)||StringUtils.isEmpty(navUrl)||StringUtils.isEmpty(id)) {
            result.setCode(ResultMsg.ARGS_IS_NULL);
            result.setMsg(ResultMsg.ARGS_IS_NULLMSG);
            return result;
        }
        navDao.updateNavById(navName,navUrl,id);
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.SUCCESSS_MSG);
//        result.setData(nav);
        return result;
    }


    /**
     * 删除nav通过id
     * @param id
     * @return
     */
    public Result deleteNavById(Integer id){

        Result result = new Result();

        if (StringUtils.isEmpty(id)) {
            result.setCode(ResultMsg.ARGS_IS_NULL);
            result.setMsg(ResultMsg.ARGS_IS_NULLMSG);
            return result;
        }
        navDao.deleteNavById(id);
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.SUCCESSS_MSG);

        return result;
    }
}
