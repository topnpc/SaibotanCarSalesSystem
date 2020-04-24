package com.car.service;

import com.car.bean.User;
import com.car.dao.UserDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserService {
    @Autowired
    UserDao dao;

    public Result findById(Integer id){
        Result result = new Result();
        User user = dao.findById(id);
        if(user != null){
            result.setData(user);
            result.setCode(1);
            result.setMsg("成功");
        }else{
            result.setCode(-1);
            result.setMsg("失败");
        }
        return result;
    }

}
