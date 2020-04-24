package com.car.service;

import com.car.bean.CarBean;
import com.car.bean.ManagerBean;
import com.car.dao.CarDao;
import com.car.dao.ManagerDao;
import com.car.util.Result;
import com.car.util.ResultMsg;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class ManagerService {
    @Autowired
    ManagerDao managerDao;

    /**
     * 设置登录结果集，由登录判断方法调用
     * @param code 结果号
     * @param msg 结果信息
     * @param data 返回对象
     * @return
     */
    public Result setResult(int code,String msg,Object data){
        Result result=new Result(code,msg,data);
        return result;
    }

    /**
     * 登录服务端，由此调用ManagerDao中登录方法
     * @param username
     * @param password
     * @return
     */
    public Result login(String username,String password){

        //判断用户名为空
        if (StringUtils.isEmpty(username)){
            return this.setResult(ResultMsg.USERNAME_NULL_CODE,
                    ResultMsg.USERNAME_NULL_MSG,
                    null);
        }
        //判断密码为空
        if (StringUtils.isEmpty(password)){
            return this.setResult(ResultMsg.PASSWORD_NULL_CODE,
                    ResultMsg.PASSWORD_NULL_MSG,
                    null);
        }
        //登录返回对象
        ManagerBean managerBean = managerDao.loginByUsername(username);
        //判断用户名是否不存在
        if (StringUtils.isEmpty(managerBean)){
            return this.setResult(ResultMsg.USERNAME_NOTEXIST_CODE,
                    ResultMsg.USERNAME_NOTEXIST_MSG,
                    null);
        }
        //判断密码是否错误
        if (!managerBean.getPassword().equals(password)){
            return this.setResult(ResultMsg.PASSWORD_ERROR_CODE,
                    ResultMsg.PASSWORD_ERROR_MSG,
                    null);
        }

        //登录信息正确
        managerBean.setPassword(null);
        System.out.println(managerBean);
        return this.setResult(ResultMsg.OK,
                ResultMsg.SUCCESS,
                managerBean);
    }


}
