package com.car.echartsdemo.entity;

public class CarSexSale {
    private String sex;
    private Integer totalYearAmount;

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "CarSexSale{" +
                "sex='" + sex + '\'' +
                ", totalYearAmount=" + totalYearAmount +
                '}';
    }

    public Integer getTotalYearAmount() {
        return totalYearAmount;
    }

    public void setTotalYearAmount(Integer totalYearAmount) {
        this.totalYearAmount = totalYearAmount;
    }
}
