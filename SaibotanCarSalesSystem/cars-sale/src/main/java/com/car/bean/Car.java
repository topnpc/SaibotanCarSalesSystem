package com.car.bean;

import java.io.Serializable;

public class Car implements Serializable {
    private int id;
    private String name;
    private String price;
    private String color;
    private String describe;
    private String url; //href
    private String imgurl;
    private int typeid;
    private String cartype;


    private String sales_number;
    private String collect_number;

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

    public String getSales_number() {
        return sales_number;
    }

    public void setSales_number(String sales_number) {
        this.sales_number = sales_number;
    }

    public String getCollect_number() {
        return collect_number;
    }

    public void setCollect_number(String collect_number) {
        this.collect_number = collect_number;
    }

    public String getCartype() {
        return cartype;
    }

    public void setCartype(String cartype) {
        this.cartype = cartype;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                ", color='" + color + '\'' +
                ", describe='" + describe + '\'' +
                ", url='" + url + '\'' +
                ", imgurl='" + imgurl + '\'' +
                ", typeid=" + typeid +
                ", cartype='" + cartype + '\'' +
                ", sales_number='" + sales_number + '\'' +
                ", collect_number='" + collect_number + '\'' +
                '}';
    }
}
