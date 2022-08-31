package com.car;

import com.car.dao.UserDao;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@MapperScan(basePackages = {"com.car.dao"})
public class CarsSaleApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(CarsSaleApplication.class, args);
    }


}
