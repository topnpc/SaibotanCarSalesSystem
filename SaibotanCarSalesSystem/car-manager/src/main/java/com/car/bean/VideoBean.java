package com.car.bean;

import java.io.Serializable;

public class VideoBean implements Serializable {
    private int id;
    private String videoname;
    private String videourl;
    private String videocoverurl;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVideoname() {
        return videoname;
    }

    public void setVideoname(String videoname) {
        this.videoname = videoname;
    }

    public String getVideourl() {
        return videourl;
    }

    public void setVideourl(String videourl) {
        this.videourl = videourl;
    }

    public String getVideocoverurl() {
        return videocoverurl;
    }

    public void setVideocoverurl(String videocoverurl) {
        this.videocoverurl = videocoverurl;
    }

    @Override
    public String toString() {
        return "Video{" +
                "id=" + id +
                ", videoname='" + videoname + '\'' +
                ", videourl='" + videourl + '\'' +
                ", videocoverurl='" + videocoverurl + '\'' +
                '}';
    }

    public VideoBean() {
    }


    public VideoBean(int id, String videoname, String videourl, String videocoverurl) {
        this.id=id;
        this.videoname=videoname;
        this.videourl = videourl;
        this.videocoverurl=videocoverurl;
    }

}
