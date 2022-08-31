package com.car.util;

import java.io.Serializable;

/**
 * 返回json定义的统一格式
 *
 * @author Liurenzu
 */

public class Result implements Serializable {

    private int code;
    private String msg;

    private int totalPages;//总页数
    private int currentPage;//当前页
    private Long totalCount;//总数据条数
    private int pageSize;//一页显示几条数据

    private Object data;

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public Long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Long totalCount) {
        this.totalCount = totalCount;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }


    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Result [code=" + code + ", msg=" + msg + ", object=" + data + "]";
    }

    public static Result check(int flag, Result result) {
        if (flag == 1) {
            result.setCode(1);
            result.setMsg("成功");
        } else {
            result.setCode(-1);
            result.setMsg("失败");
        }
        result.setData(null);

        return result;
    }

    public static Result check2(int flag, Object o, Result result) {
        if (flag == 1 && o != null) {
            result.setCode(1);
            result.setMsg("查询成功");
        } else {
            result.setCode(-1);
            result.setMsg("查询失败");
        }
        result.setData(o);

        return result;
    }


}
