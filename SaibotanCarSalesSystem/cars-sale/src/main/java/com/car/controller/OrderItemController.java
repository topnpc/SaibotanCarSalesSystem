package com.car.controller;

import com.car.bean.OrderItem;
import com.car.service.OrderItemService;
import com.car.util.Result;
import com.mysql.cj.xdevapi.JsonArray;
import jdk.nashorn.internal.parser.JSONParser;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class OrderItemController {
    @Autowired
    private OrderItemService orderItemService;

    @GetMapping("/order/id")
    @ResponseBody
    public Result selectByPrimaryKey(Integer id) {
        return orderItemService.selectByPrimaryKey(id);
    }

    @GetMapping("/order/uid")
    @ResponseBody
    public Result selectByUserid(Integer uid) {
        return orderItemService.selectByUserid(uid);
    }

    @GetMapping("/order/uidid")
    @ResponseBody
    public Result selectByUseridAndCarId(Integer uid, Integer carid) {
        return orderItemService.selectByUseridAndCarId(uid, carid);
    }

    @GetMapping("/order/fukaun")
    @ResponseBody
    public Result fukuanone(Integer id, Integer money, Integer userid) {
        return orderItemService.fukuan(id, money, userid);
    }

    //根据主键删除订单
    @GetMapping("/order/delone")
    @ResponseBody
    public Result delByPrimarykey(Integer orderid) {
        return orderItemService.delByPrimarykey(orderid);
    }

    //用户取消订单 订单关闭
    @GetMapping("/order/quxiaoone")
    @ResponseBody
    public Result quxiaoone(Integer orderid) {
        return orderItemService.quxiaoone(orderid);
    }


    //残忍退款 申请退款
    @GetMapping("/order/tuikuanone")
    @ResponseBody
    public Result tuikuanone(Integer orderid) {
        return orderItemService.modifyStatus("待退款", orderid);
    }

    //用户收货
    @GetMapping("/order/shouhuoone")
    @ResponseBody
    public Result shouhuoone(Integer orderid) {
        return orderItemService.modifyStatus("待评价", orderid);
    }

    //用户退货
    @GetMapping("/order/tuihuoone")
    @ResponseBody
    public Result tuihuoone(Integer orderid) {
        return orderItemService.modifyStatus("待退货退款", orderid);
    }

    //用户评价
    @GetMapping("/order/pinjiaone")
    @ResponseBody
    public Result pinjiaone(Integer orderid, String evaluate) {
        return orderItemService.pinjiaone(orderid, evaluate);
    }


    @RequestMapping("/order/fukaunmore")
    @ResponseBody
    public Result fukuanmore(@RequestParam(value = "ids[]") String[] ids, Integer userid) {
        for (String i : ids) {
            System.out.println("i=" + i);
        }
        return null;
    }


//    @PostMapping("/order/addmore")
//    @ResponseBody//
//    public Result addOrderItem(@RequestParam(value = "items[]")OrderItem[] items){
//        for(OrderItem item : items){
//            System.out.println(item);
//        }
//        return orderItemService.addOrderItems(items);
//    }


    //提交单个订单
    @PostMapping("/order/addone")
    @ResponseBody
    public Result addOrderItem(Integer carid, Integer userid, Integer carnum, String message, Integer totalprice) {
        return orderItemService.addOrderItem(carid, userid, carnum, message, totalprice);
    }

    @GetMapping("/order/status/page")
    @ResponseBody
    public Result selectByStatus(@RequestParam(defaultValue = "1") int pageNum, String status, Integer userid) {
        return orderItemService.selectByStatusAndUid(pageNum, userid, status);
    }

    //分页根据userid 查询订单
    @GetMapping("/order/uid/page")
    @ResponseBody
    public Result selectByStatus(Integer pageNum, Integer userid) {
        return orderItemService.selectByUserid(pageNum, userid);
    }


}
