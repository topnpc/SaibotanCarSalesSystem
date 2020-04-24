package com.car;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@MapperScan(basePackages="com.car.dao")
@ServletComponentScan
public class CarManagerApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(CarManagerApplication.class, args);
    }

}
