package com.car.bean;

public class CarType {
    private int typeid;
    private String cartype;
    private String typedescribe;

    public CarType() {
        super();
    }

    @Override
    public String toString() {
        return "CarType{" +
                "typeid=" + typeid +
                ", cartype='" + cartype + '\'' +
                ", typedescribe='" + typedescribe + '\'' +
                '}';
    }

    public int getTypeid() {
        return typeid;
    }

    public void setTypeid(int typeid) {
        this.typeid = typeid;
    }

    public String getCartype() {
        return cartype;
    }

    public void setCartype(String cartype) {
        this.cartype = cartype;
    }

    public String getTypedescribe() {
        return typedescribe;
    }

    public void setTypedescribe(String typedescribe) {
        this.typedescribe = typedescribe;
    }

    public CarType(int typeid, String cartype, String typedescribe) {

        this.typeid = typeid;
        this.cartype = cartype;
        this.typedescribe = typedescribe;
    }
}
