package com.car.echartsdemo.entity;

public class CarAreaSale {
    private String adress;
    private Integer totalYearamount;

    @Override
    public String toString() {
        return "CarAreaSale{" +
                "adress='" + adress + '\'' +
                ", totalYearamount=" + totalYearamount +
                '}';
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public Integer getTotalYearamount() {
        return totalYearamount;
    }

    public void setTotalYearamount(Integer totalYearamount) {
        this.totalYearamount = totalYearamount;
    }
}
