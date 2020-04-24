package com.car.bean;

public class CarBean {
    private int id;
    private String name;
    private String price;
    private String color;
    private String describe;
    private String url;
    private String imgurl;
    private int typeid;
    private int sales_number;
    private int collect_number;
    private String cartype;

    public CarBean() {
        super();
    }

    @Override
    public String toString() {
        return "CarBean{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                ", color='" + color + '\'' +
                ", describe='" + describe + '\'' +
                ", url='" + url + '\'' +
                ", imgurl='" + imgurl + '\'' +
                ", typeid=" + typeid +
                ", sales_number=" + sales_number +
                ", collect_number=" + collect_number +
                ", cartype='" + cartype + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getImgurl() {
        return imgurl;
    }

    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }

    public int getTypeid() {
        return typeid;
    }

    public void setTypeid(int typeid) {
        this.typeid = typeid;
    }

    public int getSales_number() {
        return sales_number;
    }

    public void setSales_number(int sales_number) {
        this.sales_number = sales_number;
    }

    public int getCollect_number() {
        return collect_number;
    }

    public void setCollect_number(int collect_number) {
        this.collect_number = collect_number;
    }

    public String getCartype() {
        return cartype;
    }

    public void setCartype(String cartype) {
        this.cartype = cartype;
    }

    public CarBean(int id, String name, String price, String color, String describe, String url, String imgurl, int typeid, int sales_number, int collect_number, String cartype) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.describe = describe;
        this.url = url;
        this.imgurl = imgurl;
        this.typeid = typeid;
        this.sales_number = sales_number;
        this.collect_number = collect_number;
        this.cartype = cartype;
    }
}
