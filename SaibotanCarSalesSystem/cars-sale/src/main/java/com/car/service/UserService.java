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

    public Result findById(Integer id) {
        Result result = new Result();
        User user = dao.findById(id);
        if (user != null) {
            result.setData(user);
            result.setCode(1);
            result.setMsg("成功");
        } else {
            result.setCode(-1);
            result.setMsg("失败");
        }
        return result;
    }

    public Result same(Result result, String username, String userpass) {
        //用户名为空
        if (StringUtils.isEmpty(username)) {
            result.setCode(ResultMsg.USERNAME_NULL_CODE);
            result.setMsg(ResultMsg.USERNAME_NULL_MSG);
            result.setData(null);
            return result;
        }
        //密码为空
        if (StringUtils.isEmpty(userpass)) {
            result.setCode(ResultMsg.PASSWORD_NULL_CODE);
            result.setMsg(ResultMsg.PASSWORD_NULL_MSG);
            result.setData(null);
            return result;
        }
        return null;
    }

    /**
     * 用户登陆
     *
     * @param username 用户名
     * @param userpass 密码
     * @return
     */
    public Result login(String username, String userpass) {
        Result result = new Result();

        Result same = same(result, username, userpass);
        if (same != null) {
            return result;
        }

        //数据库查询
        User user = dao.LoginByUsername(username);

        //判断是否存在改用户
        if (user == null) {
            result.setCode(ResultMsg.USER_NOT_EXIT_CODE);
            result.setMsg(ResultMsg.USER_NOT_EXIT_MSG);
            result.setData(null);
            return result;
        }
        //判断密码是否正确
        if (!userpass.equals(user.getPassword())) {
            result.setCode(ResultMsg.PASSWORD_IS_ERROR_CODE);
            result.setMsg(ResultMsg.PASSWORD_IS_ERROR_MSG);
            result.setData(null);
            return result;
        }
        //用户登陆成功封装result
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.LOGIN_SUCCESS);
        user.setPassword(null);
        result.setData(user);

        return result;

    }

    /**
     * 用户注册
     *
     * @param username
     * @param password
     * @return
     */
    public Result register(@RequestParam("username") String username, @RequestParam("password") String password) {
        Result result = new Result();

        //封装相同代码
        Result same = same(result, username, password);
        if (same != null) {
            return result;
        }
        //判断注册用户是否已存在
        User user = dao.FindByUsername(username);
        if (user != null) {
            result.setCode(ResultMsg.RUSER_NAME_CODE);
            result.setMsg(ResultMsg.RUSER_NAME_REPEAT);
            result.setData(null);
            return result;
        }

        //注册
        dao.Register(username, password);
        user = dao.FindByUsername(username);
        result.setCode(ResultMsg.OK);
        result.setMsg(ResultMsg.REGISTER_SUCCESS);
        user.setPassword(null);
        result.setData(user);
        return result;
    }

    /**
     * 修改用户信息
     *
     * @param sex
     * @param password
     * @param address
     * @param paypassword
     * @param id
     * @return
     */
    public Result userUpdate(@RequestParam("sex") String sex, @RequestParam("password") String password, @RequestParam("address") String address, @RequestParam("paypassword") String paypassword, @RequestParam("id") int id) {
        Result r = new Result();
        //
        if (StringUtils.isEmpty(password)) {
            r.setMsg(ResultMsg.PASSWORD_NULL_MSG);
            r.setCode(ResultMsg.PASSWORD_NULL_CODE);
            return r;
        }
        boolean b = dao.updateUserById(sex, password, address, paypassword, id);
        System.out.println("更新结果：" + b);
        if (b) {
            r.setCode(ResultMsg.OK);
            r.setMsg(ResultMsg.UPDATE_SUCCESS);
        } else {
            r.setCode(ResultMsg.FAIL_MSG);
            r.setMsg(ResultMsg.UPDATE_FAILURE);
        }
        return r;
    }
}
