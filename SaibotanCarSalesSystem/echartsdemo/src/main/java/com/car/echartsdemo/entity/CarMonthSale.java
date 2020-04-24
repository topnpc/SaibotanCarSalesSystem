package com.car.echartsdemo.entity;

import java.util.List;
import java.util.Map;

public class CarMonthSale {
    //汽车名
    private String carName;
    //用于销量预测的字符串
    private String perMonthAmonunt;
    //一年中12个月的汽车销量，数组的下标代表月份
    //用Map也行Map<Integer,Integer> 但是前端显示的时候List<Int>比较好
    //但也有一个问题，如果月份不连续，数组的下标其实不再是月份了
    //所以这里使用Map比较好，因为你毕竟不是管理数据库的

    //我们项目月份写的是连续的，我这里偷懒用List
    private List<Integer> monthsales;//该汽车每个月的销量

    private List<Integer> jidusales;//该汽车每个季度的销量

    private List<Integer> banyearsale;//该汽车半年的总销量

    //下一个月的数据，这个是预测出来的
    //这个数据结构最好是Map<Integer,Integer>
    //我们前端默认数组最后一个月就是预测出来的，我也会把nextMonthPre，加到monthsales去,这个字段就用不到了
    //private Integer nextMonthPre;

    //感觉不要把功能都耦合在一个类，颜色分析，性别分析，地址分析就分来放在单独的类中


    public List<Integer> getBanyearsale() {
        return banyearsale;
    }

    public void setBanyearsale(List<Integer> banyearsale) {
        this.banyearsale = banyearsale;
    }

    public List<Integer> getJidusales() {
        return jidusales;
    }

    public void setJidusales(List<Integer> jidusales) {
        this.jidusales = jidusales;
    }

    @Override
    public String toString() {
        return "CarMonthSale{" +
                "carName='" + carName + '\'' +
                ", perMonthAmonunt='" + perMonthAmonunt + '\'' +
                ", monthsales=" + monthsales +
                '}';
    }

    public void setMonthsales(List<Integer> monthsales) {
        this.monthsales = monthsales;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getPerMonthAmonunt() {
        return perMonthAmonunt;
    }

    public void setPerMonthAmonunt(String perMonthAmonunt) {
        this.perMonthAmonunt = perMonthAmonunt;
    }

    public List<Integer> getMonthsales() {
        return monthsales;
    }
}
