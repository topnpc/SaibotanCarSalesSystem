package com.car.echartsdemo.entity;

public class CarColorSale {
    private String carColor;
    private Integer amount;

    public String getCarColor() {
        return carColor;
    }

    public void setCarColor(String carColor) {
        this.carColor = carColor;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "CarColorSale{" +
                "carColor='" + carColor + '\'' +
                ", amount=" + amount +
                '}';
    }
}
