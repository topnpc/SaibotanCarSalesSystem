package com.car.bean;

public class ManagerBean {
    private String username;
    private String password;
    private String headImgUrl;

    public ManagerBean() {
        super();
    }

    public ManagerBean(String username, String password, String headImgUrl) {
        this.username = username;
        this.password = password;
        this.headImgUrl = headImgUrl;
    }

    @Override
    public String toString() {
        return "ManagerBean{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", headImgUrl='" + headImgUrl + '\'' +
                '}';
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getHeadImgUrl() {
        return headImgUrl;
    }

    public void setHeadImgUrl(String headImgUrl) {
        this.headImgUrl = headImgUrl;
    }
}
