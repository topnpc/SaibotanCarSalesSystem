package com.car.bean;

public class Main_nav {
    private int navId;
    private String navName;
    private String navUrl;

    public int getNavId() {
        return navId;
    }

    public void setNavId(int navId) {
        this.navId = navId;
    }

    public String getNavName() {
        return navName;
    }

    public void setNavName(String navName) {
        this.navName = navName;
    }

    public String getNavUrl() {
        return navUrl;
    }

    public void setNavUrl(String navUrl) {
        this.navUrl = navUrl;
    }

    @Override
    public String toString() {
        return "Main_nav{" +
                "navId=" + navId +
                ", navName='" + navName + '\'' +
                ", navUrl='" + navUrl + '\'' +
                '}';
    }
}
