package com.car.bean;

public class Banner {
    private Integer bannerId;
    private String bannerName;
    private String bannerUrl;
    private String bannerHref;

    public String getBannerHref() {
        return bannerHref;
    }

    public void setBannerHref(String bannerHref) {
        this.bannerHref = bannerHref;
    }

    @Override
    public String toString() {
        return "Banner{" +
                "bannerId=" + bannerId +
                ", bannerName='" + bannerName + '\'' +
                ", bannerUrl='" + bannerUrl + '\'' +
                ", bannerHref='" + bannerHref + '\'' +
                '}';
    }

    public Banner() {
        super();
    }

    public Integer getBannerId() {
        return bannerId;
    }

    public void setBannerId(Integer bannerId) {
        this.bannerId = bannerId;
    }

    public String getBannerName() {
        return bannerName;
    }

    public void setBannerName(String bannerName) {
        this.bannerName = bannerName;
    }

    public String getBannerUrl() {
        return bannerUrl;
    }

    public void setBannerUrl(String bannerUrl) {
        this.bannerUrl = bannerUrl;
    }
}
