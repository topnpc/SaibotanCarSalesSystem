package com.car.service;

import com.car.bean.OrderItem;
import com.car.dao.CarDao;
import com.car.dao.OrderItemDao;
import com.car.dao.UserDao;
import com.car.util.Result;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class OrderItemService {
    @Autowired
    private OrderItemDao orderItemDao;
    @Autowired
    private CarDao carDao;
    @Autowired
    private UserDao userDao;

    private Result res = new Result();
    private int fla = 1;

    /**
     * 封装一个对参数的检查，null 和 ''和'   '
     */
    private void checkParam(Object... args) {
        this.fla = 1;
        for (Object o : args) {
            if (o == null) {
                this.fla = 0;
                return;
            }
        }
    }

    public Result selectByPrimaryKey(Integer id) {
        this.checkParam(id);
        OrderItem orderItem = orderItemDao.selectByPrimaryKey(id);
        return Result.check2(this.fla, orderItem, this.res);
    }

    public Result selectByUserid(Integer uid) {
        this.checkParam(uid);
        List<OrderItem> orderItems = orderItemDao.selectByUserid(uid);
        return Result.check2(this.fla, orderItems, this.res);
    }

    public Result selectByUseridAndCarId(Integer uid, Integer carid) {
        this.checkParam(uid, carid);
        List<OrderItem> orderItems = orderItemDao.selectByUseridAndCarId(uid, carid);
        return Result.check2(this.fla, orderItems, this.res);
    }

    //操作单个订单,返回订单的信息,并在car的库存中减少一个，销售数量加1
    public Result addOrderItem(Integer carid, Integer userid, Integer carnum, String message, Integer totalprice) {
        System.out.println("开始提交单个订单");
        System.out.println(carid + "\t" + userid + "\t" + carnum + "\t" + message + "\t" + totalprice);
        this.checkParam(carid, userid, carnum, message, totalprice);
        String orderuuid = UUID.randomUUID().toString().substring(0, 8);
        Date ordertime = new Date();
        OrderItem item = new OrderItem(orderuuid, carid, userid, carnum, message, totalprice, ordertime);
        int flag = orderItemDao.addOrderItem(item);
        if (flag == 1) {
            flag = carDao.saleCar(carid);
        }
        return Result.check2(flag, item, this.res);
    }

    //订单付款，修改订单状态为已付款,支付成功后账户余额应该减少
    public Result fukuan(Integer orderid, Integer money, Integer userid) {
        System.out.println("买家开始执行付款逻辑");
        Date paytime = new Date();
        int flag = orderItemDao.fukuan(paytime, orderid);
        if (flag == 1) {
            userDao.updatemoney(money, userid);
        }
        return Result.check(flag, this.res);
    }


    private Result check3(int flag, List<OrderItem> o, Result result, Integer pageNum) {
        PageInfo<OrderItem> pageInfo = new PageInfo<>(o);
        if (flag == 1 && o != null) {
            result.setCode(1);
            result.setCurrentPage(pageNum);
            result.setTotalPages(pageInfo.getPages());
            result.setPageSize(pageInfo.getPageSize());
            result.setTotalCount(pageInfo.getTotal());
            result.setMsg("查询成功");
        } else {
            result.setCode(-1);
            result.setMsg("查询失败");
        }
        result.setData(o);

        return result;
    }

    //根据主键删除订单 删除订单
    public Result delByPrimarykey(Integer id) {
        int flag = orderItemDao.delByPrimarykey(id);
        return Result.check(flag, this.res);
    }

    //封装一个修改状态的方法
    public Result modifyStatus(String status, Integer orderid) {
        int flag = orderItemDao.updateStatus(status, orderid);
        return Result.check(flag, this.res);
    }

    //用户评价
    public Result pinjiaone(Integer orderid, String evaluate) {
        int flag = orderItemDao.pinjiaone(evaluate, orderid);
        return Result.check(flag, this.res);
    }

    //用户取消订单
    public Result quxiaoone(Integer orderid) {
        int flag = orderItemDao.quxiaoone("已取消", new Date(), new Date(), orderid);
        return Result.check(flag, this.res);
    }


    //分页根据status userid查询订单
    public Result selectByStatusAndUid(Integer pageNum, Integer userid, String status) {
        this.checkParam(pageNum, status);
        PageHelper.startPage(pageNum, 2);//设置数据库分页查询的范围
        List<OrderItem> orderItems = orderItemDao.selectByStatusAndUid(status, userid);
        return this.check3(this.fla, orderItems, this.res, pageNum);
    }

    //分页根据userid 查询订单
    public Result selectByUserid(Integer pageNum, Integer userid) {
        this.checkParam(pageNum, userid);
        PageHelper.startPage(pageNum, 2);//设置数据库分页查询的范围
        List<OrderItem> orderItems = orderItemDao.selectByUserid(userid);
        return this.check3(this.fla, orderItems, this.res, pageNum);
    }

    //操作多个订单 返回订单集合
//    public Result addOrderItems(OrderItem[] orderItems){
//        System.out.println("开始提交多个订单");
//        int flag=0;
//        for(OrderItem item:orderItems){
//            flag = this.addOrderItem(
//                    item.getCarid(),
//                    item.getUserid(),
//                    item.getCarnum(),
//                    item.getMessage(),
//                    item.getTotalprice()
//            );
//            if(flag !=1){
//                return this.check(0,null);
//            }
//        }
//        return this.check(flag,this.res);
//    }

}
