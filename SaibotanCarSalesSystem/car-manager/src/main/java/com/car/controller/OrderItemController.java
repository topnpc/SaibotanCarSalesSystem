package com.car.controller;

import com.car.bean.OrderItem;
import com.car.service.OrderItemService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class OrderItemController {
    @Autowired
    private OrderItemService orderItemService;

    @GetMapping("/order/id")
    @ResponseBody
    public Result selectByPrimaryKey(Integer id){
        return orderItemService.selectByPrimaryKey(id);
    }

    @GetMapping("/order/uid")
    @ResponseBody
    public Result selectByUserid(Integer uid){
        return orderItemService.selectByUserid(uid);
    }

    @GetMapping("/order/uidid")
    @ResponseBody
    public Result selectByUseridAndCarId(Integer uid,Integer carid){
        return orderItemService.selectByUseridAndCarId(uid,carid);
    }

    @GetMapping("/order/status/page")
    @ResponseBody
    public Result selectByStatus(@RequestParam(defaultValue = "1")int pageNum,String status){
        return orderItemService.selectByStatus(pageNum,status);
    }




    @GetMapping("/order/time/page")
    @ResponseBody
    public Result selectByTime(@RequestParam(defaultValue = "1")Integer pageNum, String begintime, String endtime){
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
//        String start = sdf.format(begintime);
//        String end = sdf.format(endtime);;
        System.out.println("controller begintime="+begintime+",endtime = "+endtime);
        return orderItemService.selectByTime(pageNum,begintime,endtime);
    }


    //普通查询
    @GetMapping("/order/status")
    @ResponseBody
    public Result selectByStatus(String status){
        return orderItemService.selectByStatus(status);
    }

    @GetMapping("/order/time")
    @ResponseBody
    public Result selectByTime(String begintime,String endtime){
        System.out.println("controller begintime="+begintime+",endtime = "+endtime);
        return orderItemService.selectByTime(begintime,endtime);
    }

    @GetMapping("/order/time/status")
    @ResponseBody
    public Result selectByTime(String status,String begintime,String endtime){
        System.out.println("controller begintime="+begintime+",endtime = "+endtime);
        return orderItemService.selectByTime(status,begintime,endtime);
    }

    @GetMapping("/order/time/allok")
    @ResponseBody
    public Result allokByTime(String begintime,String endtime){
        System.out.println("controller begintime="+begintime+",endtime = "+endtime);
        return orderItemService.allokByTime(begintime,endtime);
    }

    //结束订单
    @GetMapping("/order/closeone")
    @ResponseBody
    public Result jieshuone(Integer orderid){
        return orderItemService.jieshuone(orderid);
    }

    @GetMapping("/order/closemore")
    @ResponseBody
    public Result jieshuone(){
        return orderItemService.jieshuallok();
    }




    //修改,参数有点多，最好传对象
    @PostMapping("/order/modify")
    @ResponseBody
    public Result modifyOrder(
            Integer carid,Integer carnum,Integer totalprice,String shouhuoren,
            String shouhuophone,String shouhuodizi,String wuliuname,String wuliu,
            Integer id){
        return orderItemService.modifyOrder(carid,carnum,totalprice,shouhuoren,shouhuophone,
                shouhuodizi,wuliuname,wuliu,id);
    }

    @GetMapping("/order/del")
    @ResponseBody
    public Result delById(Integer id){
        return orderItemService.delById(id);
    }

    @GetMapping("/order/delallfinal")
    @ResponseBody
    public Result delAllFinal(){
        return orderItemService.delAllFinal();
    }

    //修改订单状态
    @GetMapping("/order/modistatus")
    @ResponseBody
    public Result updateStatus(String status,Integer id){
        return orderItemService.updateStatus(status,id);
    }


    @GetMapping("/order/fahuoone")
    @ResponseBody
    public Result fahuoone(String status,Integer id){
        return orderItemService.fahuoone(status,id);
    }

    @GetMapping("/order/fahuoall")
    @ResponseBody
    public Result fahuoall(){
        return orderItemService.fahuoall();
    }

    @GetMapping("/order/findallok")
    @ResponseBody
    public Result selectAllOK(){
        return orderItemService.selectAllOK();
    }

    //会员闪电退货，一键退货退款
    //退货需要知道 订单编号 用户编号，进行退款
    @GetMapping("/order/tuihuoone")
    @ResponseBody
    public Result tuihuoone(Integer orderid){
        return orderItemService.tuihuoone(orderid);
    }

    //退款单个
    @GetMapping("/order/tuikuanone")
    @ResponseBody
    public Result tuikuanone(Integer orderid){
        return orderItemService.tuikuanone(orderid);
    }

    //一键退款
    @GetMapping("/order/tuikuanall")
    @ResponseBody
    public Result tuikuanall(Integer orderid){
        return orderItemService.tuikuanall();
    }



    //把所有状态为退货的 一键退货退款
    @GetMapping("/order/tuihuoall")
    @ResponseBody
    public Result tuihuomore(){
        return orderItemService.tuihuomore();
    }

    //查询所有订单
    @GetMapping("/order/findall")
    @ResponseBody
    public Result selectAll() {
        return orderItemService.selectAll();
    }





}
