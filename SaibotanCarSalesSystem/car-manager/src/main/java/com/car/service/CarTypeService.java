package com.car.service;

import com.car.bean.CarType;
import com.car.dao.CarDao;
import com.car.dao.CarTypeDao;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Objects;

@Service
public class CarTypeService {
    Result result;
    @Autowired
    CarTypeDao carTypeDao;

    public Result setResult(int code, String msg, Object data) {
        result = new Result(code, msg, data);
        return result;
    }

    /**
     * 添加汽车类型
     *
     * @param typeid
     * @param cartype
     * @param cardescribe
     * @return
     */
    public Result addCarType(Integer typeid, String cartype, String cardescribe) {
        //判断是否为空

        if (typeid==null||StringUtils.isEmpty(cartype)||StringUtils.isEmpty(cardescribe)){
            return this.setResult(-1,"表格不能为空",null);
        }
        //判断车型是否已存在
        ArrayList<CarType> carTypess = carTypeDao.selectCarType();
        System.out.println(carTypess);
        for (CarType cartype1 : carTypess){

            if (Objects.equals(Integer.valueOf(cartype1.getTypeid()),typeid)){
                return this.setResult(-3,"该车型id已存在",null);
            }
            if (cartype1.getCartype().equals(cartype)){
                return this.setResult(-2,"该车型已存在",null);
            }
        }
        int i = carTypeDao.addCarType(typeid, cartype, cardescribe);
        if (i == 1) {
            return this.setResult(1, "添加类型成功", null);
        }
        return this.setResult(0, "添加类型失败", null);

    }

    /**
     * 查询显示
     * @return
     */
    public Result selectAll() {
        ArrayList<CarType> carTypes = carTypeDao.selectCarType();
        return this.setResult(1,"查询成功",carTypes);
    }

    /**
     * 查询所有车型名字
     * @return
     */
    public Result selectCartypeName(){
        ArrayList<String> typeNames = carTypeDao.selectTypeName();
        return this.setResult(1,"查询成功",typeNames);
    }

    @Autowired
    CarDao carDao;
    /**
     * 删除类型
     * @param typeid
     * @return
     */
    public Result deleteCartype(Integer typeid){
        //判断id是否被car数据库关联
        ArrayList<Integer> cartypes = carDao.selectTypeId();
        System.out.println("车库里的leixingid为："+cartypes);
        for (Integer cartype:cartypes){
            System.out.println(cartype+":"+typeid);
            System.out.println(typeid == cartype);
            System.out.println(Objects.equals(typeid,cartype));
            if (Objects.equals(typeid,cartype)){
                return this.setResult(0,"该车型正在被使用，无法删除",null);
            }
        }

        int i = carTypeDao.deleteType(typeid);
        if (i==1){
            return this.setResult(1,"删除成功",null);
        }
        return this.setResult(-1,"删除失败",null);
    }

    /**
     * 通过typeid查询要修改的cartype
     * @param typeid
     * @return
     */
    public Result selectCartypebytypeid(Integer typeid){
        CarType carType = carTypeDao.selectCarTypeByTypeid(typeid);
        return this.setResult(1,"查询成功",carType);
    }

    /**
     * 修改车型
     * @param typeid
     * @param Typename
     * @return
     */
    public Result updateCartype(Integer typeid, String typedescribe, String Typename){
        //修改cartype表中的cartype
        int i = carTypeDao.updateBytypeId(typeid,typedescribe, Typename);
        if(i==1){
            //修改car表中的typename
            carDao.updateCartype(typeid, Typename);
            return this.setResult(1,"修改车型成功",null);

        }
        return this.setResult(-1,"修改失败",null);
    }
}
