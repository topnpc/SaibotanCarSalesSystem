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
     *封装一个对参数的检查，null 和 ''和'   '
     */
    private void checkParam(Object... args){
        this.fla =1;
        for (Object o : args) {
            if(o==null){
                this.fla = 0;
                return;
            }
        }
    }

    public Result selectByPrimaryKey(Integer id){
        this.checkParam(id);
        OrderItem orderItem = orderItemDao.selectByPrimaryKey(id);
        return Result.check2(this.fla, orderItem,this.res);
    }

    public Result selectByUserid(Integer uid){
        this.checkParam(uid);
        List<OrderItem> orderItems = orderItemDao.selectByUserid(uid);
        return Result.check2(this.fla, orderItems,this.res);
    }

    public Result selectByUseridAndCarId(Integer uid,Integer carid){
        this.checkParam(uid,carid);
        List<OrderItem> orderItems = orderItemDao.selectByUseridAndCarId(uid,carid);
        return Result.check2(this.fla, orderItems,this.res);
    }

    private Result check3(int flag,List<OrderItem> o,Result result,Integer pageNum){
        PageInfo<OrderItem> pageInfo=new PageInfo<>(o);
        if(flag == 1 && o != null){
            result.setCode(1);
            result.setCurrentPage(pageNum);
            result.setTotalPages(pageInfo.getPages());
            result.setPageSize(pageInfo.getPageSize());
            result.setTotalCount(pageInfo.getTotal());
            result.setMsg("查询成功");
        }else{
            result.setCode(-1);
            result.setMsg("查询失败");
        }
        result.setData(o);

        return result;
    }

    //全部查询
    public Result selectByStatus(String status){
        this.checkParam(status);
        List<OrderItem> orderItems = orderItemDao.selectByStatus(status);
        return Result.check2(this.fla,orderItems,this.res);
    }

    public Result selectByTime(String begintime,String endtime){
        this.checkParam(begintime,endtime);
        int flag = this.checktime(begintime,endtime);
        if(flag ==1){
            List<OrderItem> orderItems = orderItemDao.selectByTime(begintime,endtime);
            return Result.check2(this.fla,orderItems,this.res);
        }else{
            return Result.check2(-1,null,this.res);
        }
    }

    public Result selectByTime(String status,String begintime,String endtime){
        this.checkParam(begintime,endtime);
        int flag = this.checktime(begintime,endtime);
        if(flag==1){
            List<OrderItem> orderItems = orderItemDao.selectByTime2(status,begintime,endtime);
            return Result.check2(this.fla,orderItems,this.res);
        }else{
            return Result.check2(-1,null,this.res);
        }
    }


    //分页查询
    public Result selectByStatus(Integer pageNum,String status){
        this.checkParam(pageNum,status);
        PageHelper.startPage(pageNum, 2);//设置数据库分页查询的范围
        List<OrderItem> orderItems = orderItemDao.selectByStatus(status);
        return this.check3(this.fla,orderItems,this.res,pageNum);
    }

    //简单判断下 具体肯定还要 写个工具方法 先解析字符串 2019-02-11 00:00:00
    private int checktime(String begintime,String endtime){
        System.out.println("service check before begintime="+begintime+",endtime = "+endtime);
        System.out.println("service check before begintime leng="+begintime.length()+",endtime leng = "+endtime.length());
        int flag = 1;
        if(begintime.length()<9 && begintime.length()>19){flag = -1;}
        if(endtime.length()<9 && endtime.length()>19){flag = -1;}
        //下面是没有用的 String 类型不支持修改 每一次都是新建 地址在变化
//        if(begintime.length()>9 && begintime.length()<19){begintime = begintime+" 00:00:00";}
//        if(endtime.length()>9 && endtime.length()<19){endtime = endtime+" 23:59:59";}
//        System.out.println("service check after begintime="+begintime+",endtime = "+endtime);
        return flag;
    }

    public Result selectByTime(Integer pageNum,String begintime,String endtime){
        this.checkParam(pageNum,begintime,endtime);
        int flag = this.checktime(begintime,endtime);
        if(flag==1){
            PageHelper.startPage(pageNum, 2);//设置数据库分页查询的范围
            //简单判断长度
            List<OrderItem> orderItems = orderItemDao.selectByTime(begintime,endtime);
            return this.check3(this.fla,orderItems,this.res,pageNum);
        }else{
            return this.check3(this.fla,null,this.res,pageNum);
        }
    }

    //查询所有订单
    public Result selectAll() {
        List<OrderItem> orderItems = orderItemDao.selectAll();
        return Result.check2(1, orderItems, this.res);
    }



    //事务问题，商品修改以后，汽车表的内容会有变化,添加事务，只要下边有一个出错，数据库就得进行事务回滚
    //用于金额的修改是在购买是改的，商家修改订单是在用于下单后，购买前改的，之后只能用户私信商家，然后商家修改
    @Transactional
    public Result modifyOrder(
            Integer carid,Integer carnum,Integer totalprice,String shouhuoren,
            String shouhuophone,String shouhuodizi,String wuliuname,String wuliu, Integer id){

        OrderItem orderItem = orderItemDao.selectByPrimaryKey(id);
        int flag = orderItemDao.modifyOrder(carid,carnum,totalprice,shouhuoren,shouhuophone,
                shouhuodizi,wuliuname,wuliu,id);
        if(flag == 1){
            //id相同，数量不同
            if(carid==orderItem.getCarid()){
                if(carnum!=orderItem.getCarnum()){
                    //如果数量大，car表里的销售数量就要加，库存数量就要减
                    int num = Math.abs(carnum-orderItem.getCarnum());
                    int cid = orderItem.getCarid();
                    flag = carnum-orderItem.getCarnum()>0?carDao.saleadd(num,cid):carDao.saledown(num,cid);
                    //如果数量小，car表里的...
                }
            }else{
                //id不同
                int num2 = orderItem.getCarnum();
                flag = carDao.saledown(num2,orderItem.getCarid());
                flag = carDao.saleadd(carnum,carid);
            }
        }

        return Result.check(flag,this.res);
    }


    public Result delById(Integer id){
        int flag = orderItemDao.delById(id);
        return Result.check(flag,this.res);
    }

    //删除所有已结束订单
    public Result delAllFinal(){
        int flag = orderItemDao.delAllFinal();
        return Result.check(flag,this.res);
    }

    //修改订单状态
    public Result updateStatus(String status,Integer id){
        int flag = orderItemDao.updateStatus(status,id);
        return Result.check(flag,this.res);
    }


    //发货一个
    public Result fahuoone(String status,Integer id){
        Date sendtime = new Date();
        int flag = orderItemDao.fahuoone(status,sendtime,id);
        return Result.check(flag,this.res);
    }


    //一键发货
    public Result fahuoall(){
        Date sendtime = new Date();
        int flag = orderItemDao.fahuoall(sendtime);
        return Result.check(flag,this.res);
    }

    public Result selectAllOK(){
        List<OrderItem> items = orderItemDao.selectAllOK();
        return Result.check2(1,items,this.res);
    }

    public Result allokByTime(String begintime,String endtime){
        int flag = this.checktime(begintime,endtime);
        if(flag==1){
            List<OrderItem> items = orderItemDao.allokByTime(begintime,endtime);
            return Result.check2(this.fla,items,this.res);
        }else{
            return Result.check2(-1,null,this.res);
        }

    }

    //结束订单
    public Result jieshuone(Integer orderid){
        int flag = orderItemDao.closeOrder(new Date(),new Date(),orderid);
        return Result.check(flag,this.res);
    }

    //结束所有订单
    public Result jieshuallok(){
        int flag = orderItemDao.closeallok(new Date(),new Date());
        return Result.check(flag,this.res);
    }


    //退货退款一个
    @Transactional
    public Result tuihuoone(Integer orderid){
        OrderItem item = orderItemDao.selectByPrimaryKey(orderid);
        int flag = this.tuo(item,"已退货退款");
        return Result.check(flag,this.res);
    }

    //退款一个
    @Transactional
    public Result tuikuanone(Integer orderid){
        OrderItem item = orderItemDao.selectByPrimaryKey(orderid);
        int flag = this.tuo(item,"已退款");
        return Result.check(flag,this.res);
    }

    //一键退款
    public Result tuikuanall(){
        //先把 带退款的所有商品查询出来
        List<OrderItem> items = orderItemDao.selectByStatus("待退款");
        int flag = 0;
        for(OrderItem item:items){
            flag = this.tuo(item,"已退款");
        }
        return Result.check(flag,this.res);
    }

    private int tuo(OrderItem item,String status){
        int flag = 0;
        if(item!=null){
            //修改订单状态
            flag = orderItemDao.updateStatus(status,item.getId());
            //汽车表 销量减少
            if(flag == 1){
                flag = carDao.saledown(item.getCarnum(),item.getCar().getId());
            }
            //用户表 金额增加
            if(flag == 1){
                flag = userDao.updatemoney2(item.getTotalprice(),item.getUser().getId());
            }
        }
        return flag;
    }


    //把状态为 待退款的订单 进行退货
    @Transactional
    public Result tuihuomore(){
       //把待退货的订单都查询出来
        List<OrderItem> items = orderItemDao.selectByStatus("待退货退款");
        int flag =0;
        for(OrderItem item : items){
           flag = this.tuo(item,"已退货退款");
        }
        return Result.check(flag,this.res);
    }

}
