package com.car.bean;

import java.util.Date;

//订单项 用于存储单个订单信息 当用户点击提交订单之后，就在数据库增加了一些订单信息
//当用户进行支付的时候，数据库的一些订单信息的状态的变化了
public class OrderItem {
    private int id;
    private String orderuuid;
    private int carid;
    private int userid;
    private int carnum;//购买数量
    private String message;//买家留言
    private Integer totalprice;//订单小计
    private String status;//订单状态
    private Date ordertime;//下单时间
    private Date paytime;//付款时间
    private Date sendtime;//发货时间
    private Date finaltime;//订单完成时间，买家收货时间
    private Date closetime;//订单关闭时间，买家退货，退款，卖家不卖等
    private String wuliu;//物流编号
    private String wuliuname;//物流名称
    private String evaluate;//买家评价
    private String shouhuoren;//收货人
    private String shouhuophone;//收货人电话
    private String shouhuodizi;//收货地址
    private String evaluate2;//卖家评价
    private User user;
    private CarBean car;

    public String getEvaluate2() {
        return evaluate2;
    }

    public void setEvaluate2(String evaluate2) {
        this.evaluate2 = evaluate2;
    }

    public String getShouhuoren() {
        return shouhuoren;
    }

    public void setShouhuoren(String shouhuoren) {
        this.shouhuoren = shouhuoren;
    }

    public String getShouhuophone() {
        return shouhuophone;
    }

    public void setShouhuophone(String shouhuophone) {
        this.shouhuophone = shouhuophone;
    }

    public String getShouhuodizi() {
        return shouhuodizi;
    }

    public void setShouhuodizi(String shouhuodizi) {
        this.shouhuodizi = shouhuodizi;
    }

    public Date getPaytime() {
        return paytime;
    }

    public void setPaytime(Date paytime) {
        this.paytime = paytime;
    }

    public Date getSendtime() {
        return sendtime;
    }

    public void setSendtime(Date sendtime) {
        this.sendtime = sendtime;
    }

    public Date getFinaltime() {
        return finaltime;
    }

    public void setFinaltime(Date finaltime) {
        this.finaltime = finaltime;
    }

    public Date getClosetime() {
        return closetime;
    }

    public void setClosetime(Date closetime) {
        this.closetime = closetime;
    }

    public String getWuliu() {
        return wuliu;
    }

    public void setWuliu(String wuliu) {
        this.wuliu = wuliu;
    }

    public String getWuliuname() {
        return wuliuname;
    }

    public void setWuliuname(String wuliuname) {
        this.wuliuname = wuliuname;
    }

    public String getEvaluate() {
        return evaluate;
    }

    public void setEvaluate(String evaluate) {
        this.evaluate = evaluate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Date ordertime) {
        this.ordertime = ordertime;
    }

    public OrderItem() {
        super();
    }

    public Integer getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(Integer totalprice) {
        this.totalprice = totalprice;
    }

    public OrderItem(String orderuuid, int carid, int userid, int carnum, String message, Integer totalprice, Date ordertime) {
        this.orderuuid = orderuuid;
        this.carid = carid;
        this.userid = userid;
        this.carnum = carnum;
        this.message = message;
        this.totalprice = totalprice;
        this.ordertime = ordertime;
    }



    @Override
    public String toString() {
        return "OrderItem{" +
                "id=" + id +
                ", orderuuid='" + orderuuid + '\'' +
                ", carid=" + carid +
                ", userid=" + userid +
                ", carnum=" + carnum +
                ", message='" + message + '\'' +
                ", user=" + user +
                ", car=" + car +
                '}';
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public CarBean getCar() {
        return car;
    }

    public void setCar(CarBean car) {
        this.car = car;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrderuuid() {
        return orderuuid;
    }

    public void setOrderuuid(String orderuuid) {
        this.orderuuid = orderuuid;
    }

    public int getCarid() {
        return carid;
    }

    public void setCarid(int carid) {
        this.carid = carid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getCarnum() {
        return carnum;
    }

    public void setCarnum(int carnum) {
        this.carnum = carnum;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
