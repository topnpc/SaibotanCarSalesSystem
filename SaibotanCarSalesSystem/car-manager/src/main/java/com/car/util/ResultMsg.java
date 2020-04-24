package com.car.util;

public class ResultMsg {

    public static final int USERNAME_NULL_CODE=-1;
    public static final String USERNAME_NULL_MSG="用户名不能为空";

    public static final int PASSWORD_NULL_CODE=-2;
    public static final String PASSWORD_NULL_MSG="密码不能为空";

    public static final int USERNAME_NOTEXIST_CODE=-3;
    public static final String USERNAME_NOTEXIST_MSG="用户名不存在";

    public static final int PASSWORD_ERROR_CODE=-4;
    public static final String PASSWORD_ERROR_MSG="密码错误";

    public static final int OK=1;
    public static final int ERROR=-1;
    public static final String SUCCESS="登录成功";

    public  static  final  int EMPTY=-6;
    public  static  final  String EMPTY_MSG="暂时没有数据";

    public  static  final  String OK_MSG="成功";


    public static final int PAGE_SIZE_IS_NULL=-5;
    public static final String PAGE_SIZE_IS_NULLMSG="页面大小为空";
    public static final String Nav_SELECT_SUCCESS="导航栏查询成功";

    /**
     * 因为懒，在这里统一处理
     */
    public static final int ARGS_IS_NULL=-6;
    public static final String ARGS_IS_NULLMSG="参数为空";
    public static final String SUCCESSS_MSG="操作成功";


    public static final int PAGE_RESULT_IS_NULL=-7;
    public static final String PAGE_RESULT_IS_NULLMSG="页面大小为空";
    public static final String Video_SELECT_SUCCESS="首页视频查询成功";


}
